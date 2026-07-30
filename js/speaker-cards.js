(function () {
  const speakerData = globalThis.SOFEX_SPEAKER_DATA;
  const desktopPrimaryRowCount = 7;
  const minSpeakerCountForTwoRows = 4;
  const secondaryRowMaxCount = 7;
  const primaryRowEnterDelaySeconds = 0;
  const secondaryRowEnterDelaySeconds = 0.18;
  const tertiaryRowEnterDelaySeconds = 0.36;
  const desktopPrimaryCardWidthRem = 12.4;
  const desktopSecondaryCardWidthRem = 9.1;
  const desktopFallbackCardWidthRem = 8.25;
  const resizeFitDebounceMs = 150;
  const speakerBaselineCache = new WeakMap();
  let fitFrame = 0;
  let fitDebounceTimer = 0;
  let lastFittedViewportWidth = -1;

  if (!speakerData) {
    return;
  }

  const defaultSpeakerFitProfile = {
    nameMaxLines: 2,
    detailMaxLines: 3,
    minNameFitScale: 0.52,
    minDetailFitScale: 0.72,
    marginShiftByViewport: {
      default: { name: 0, detail: 0 },
      tablet: { name: 0, detail: 0 },
      tiny: { name: 0, detail: 0 }
    }
  };

  const speakerCardFitProfiles = {
    primary: {
      nameMaxLines: defaultSpeakerFitProfile.nameMaxLines,
      detailMaxLines: defaultSpeakerFitProfile.detailMaxLines,
      minNameFitScale: defaultSpeakerFitProfile.minNameFitScale,
      minDetailFitScale: defaultSpeakerFitProfile.minDetailFitScale,
      marginShiftByViewport: {
        default: { name: 2, detail: 2},
        tablet: { name: 5, detail: 5 },
        tiny: { name: 6.0, detail: 6.0 }
      }
    },
    secondary: {
      nameMaxLines: defaultSpeakerFitProfile.nameMaxLines,
      detailMaxLines: defaultSpeakerFitProfile.detailMaxLines,
      minNameFitScale: defaultSpeakerFitProfile.minNameFitScale,
      minDetailFitScale: defaultSpeakerFitProfile.minDetailFitScale,
      marginShiftByViewport: {
        default: { name: 3, detail: 3 },
        tablet: { name: -6, detail: -6 },
        tiny: { name: 0, detail: 0 }
      }
    },
    fallback: defaultSpeakerFitProfile
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  function createSpeakerLayoutStyle(speaker, enterDelaySeconds) {
    return [
      `--speaker-name-left-margin:${speaker.name_left_margin};`,
      `--speaker-name-right-margin:${speaker.name_right_margin};`,
      `--speaker-name-font-size:${speaker.name_font_size};`,
      `--speaker-description-left-margin:${speaker.description_left_margin};`,
      `--speaker-description-right-margin:${speaker.description_right_margin};`,
      `--speaker-description-font-size:${speaker.description_font_size};`,
      `--speaker-enter-delay:${enterDelaySeconds.toFixed(2)}s;`
    ].join("");
  }

  function createSpeakerCardMarkup(speaker, variant, enterDelaySeconds) {
    const loading = variant === "teaser" ? "eager" : "lazy";
    const imagePath = speakerData.getSpeakerImagePath(speaker);
    const safeName = escapeHtml(speaker.name);
    const safeDetail = escapeHtml(speaker.detail ?? "");
    const layoutStyle = createSpeakerLayoutStyle(speaker, enterDelaySeconds);
    const mediaMarkup = imagePath
      ? `<img class="speaker-card__image" src="${imagePath}" alt="${safeName} - ${safeDetail}" loading="${loading}" decoding="async">`
      : `<div class="speaker-card__placeholder-message">Photo pending</div>`;
    const cardClasses = [
      "speaker-card",
      `speaker-card--${variant}`,
      imagePath ? "speaker-card--has-image" : "speaker-card--placeholder"
    ].join(" ");

    return [
      `<article class="${cardClasses}" data-speaker-id="${speaker.id}" style="${layoutStyle}">`,
      '<div class="speaker-card__media">',
      mediaMarkup,
      '<div class="speaker-card__overlay">',
      '<div class="speaker-card__name-wrap">',
      `<h3 class="speaker-card__name">${safeName}</h3>`,
      "</div>",
      '<div class="speaker-card__detail-wrap">',
      `<p class="speaker-card__detail">${safeDetail}</p>`,
      "</div>",
      "</div>",
      "</div>",
      "</article>"
    ].join("");
  }

  function createSpeakerRowMarkup(speakers, rowClassName, variant, enterDelaySeconds) {
    if (!speakers.length) {
      return "";
    }

    return [
      `<div class="speaker-grid__row ${rowClassName}">`,
      speakers
        .map(function mapSpeaker(speaker) {
          return createSpeakerCardMarkup(speaker, variant, enterDelaySeconds);
        })
        .join(""),
      "</div>"
    ].join("");
  }

  function getMainSpeakerRows(speakers) {
    if (
      speakers.length >= minSpeakerCountForTwoRows &&
      speakers.length <= desktopPrimaryRowCount
    ) {
      const primaryRowCount = Math.ceil(speakers.length / 2);

      return {
        primary: speakers.slice(0, primaryRowCount),
        secondary: speakers.slice(primaryRowCount),
        tertiary: [],
        isBalancedTwoRowLayout: true
      };
    }

    const primary = speakers.slice(0, desktopPrimaryRowCount);
    const remaining = speakers.slice(desktopPrimaryRowCount);

    if (remaining.length > secondaryRowMaxCount) {
      const secondaryRowCount = Math.ceil(remaining.length / 2);

      return {
        primary,
        secondary: remaining.slice(0, secondaryRowCount),
        tertiary: remaining.slice(secondaryRowCount),
        isBalancedTwoRowLayout: false
      };
    }

    return {
      primary,
      secondary: remaining,
      tertiary: [],
      isBalancedTwoRowLayout: false
    };
  }

  function parseNumericValue(value) {
    return Number.parseFloat(String(value || "").trim()) || 0;
  }

  function getRootFontSize() {
    return parseNumericValue(
      window.getComputedStyle(document.documentElement).fontSize
    ) || 16;
  }

  function convertSizeToPixels(value) {
    const trimmedValue = String(value || "").trim();

    if (!trimmedValue) {
      return 0;
    }

    if (trimmedValue.endsWith("rem")) {
      return parseNumericValue(trimmedValue) * getRootFontSize();
    }

    return parseNumericValue(trimmedValue);
  }

  function getCardVariable(card, name) {
    return (
      card.style.getPropertyValue(name).trim() ||
      window.getComputedStyle(card).getPropertyValue(name).trim()
    );
  }

  function getCardBaselineWidth(card) {
    const rootFontSize = getRootFontSize();

    if (
      card.closest(".speaker-grid__row--secondary") ||
      card.closest(".speaker-grid__row--tertiary")
    ) {
      return desktopSecondaryCardWidthRem * rootFontSize;
    }

    if (card.closest(".speaker-grid__row--primary")) {
      return desktopPrimaryCardWidthRem * rootFontSize;
    }

    return desktopFallbackCardWidthRem * rootFontSize;
  }

  function getSpeakerCardRowKey(card) {
    if (
      card.closest(".speaker-grid__row--secondary") ||
      card.closest(".speaker-grid__row--tertiary")
    ) {
      return "secondary";
    }

    if (card.closest(".speaker-grid__row--primary")) {
      return "primary";
    }

    return "fallback";
  }

  function getSpeakerCardFitProfile(card) {
    return speakerCardFitProfiles[getSpeakerCardRowKey(card)] || defaultSpeakerFitProfile;
  }

  function getViewportTier(viewportWidth) {
    if (viewportWidth <= 479) {
      return "tiny";
    }

    if (viewportWidth <= 991) {
      return "tablet";
    }

    return "default";
  }

  function getMeasureRoot() {
    let measureRoot = document.getElementById("speaker-card-measure-root");

    if (measureRoot) {
      return measureRoot;
    }

    measureRoot = document.createElement("div");
    measureRoot.id = "speaker-card-measure-root";
    measureRoot.setAttribute("aria-hidden", "true");
    measureRoot.style.position = "fixed";
    measureRoot.style.left = "-10000px";
    measureRoot.style.top = "-10000px";
    measureRoot.style.visibility = "hidden";
    measureRoot.style.pointerEvents = "none";
    measureRoot.style.zIndex = "-1";
    document.body.appendChild(measureRoot);
    return measureRoot;
  }

  function measureTextLines(sourceElement, widthPx, fontSizePx) {
    const measureRoot = getMeasureRoot();
    const measureNode = document.createElement(sourceElement.tagName);
    const computedStyle = window.getComputedStyle(sourceElement);
    const computedFontSize = parseNumericValue(computedStyle.fontSize) || fontSizePx;
    const computedLineHeight =
      parseNumericValue(computedStyle.lineHeight) || computedFontSize * 1.2;
    const lineHeightRatio = computedLineHeight / computedFontSize;
    const effectiveLineHeight = lineHeightRatio * fontSizePx;

    measureNode.textContent = sourceElement.textContent || "";
    measureNode.style.width = `${Math.max(1, widthPx)}px`;
    measureNode.style.margin = "0";
    measureNode.style.padding = "0";
    measureNode.style.boxSizing = "border-box";
    measureNode.style.fontFamily = computedStyle.fontFamily;
    measureNode.style.fontWeight = computedStyle.fontWeight;
    measureNode.style.fontStyle = computedStyle.fontStyle;
    measureNode.style.letterSpacing = computedStyle.letterSpacing;
    measureNode.style.lineHeight = `${effectiveLineHeight}px`;
    measureNode.style.fontSize = `${fontSizePx}px`;
    measureNode.style.whiteSpace = "normal";
    measureNode.style.overflowWrap = "break-word";
    measureNode.style.wordBreak = "normal";
    measureNode.style.textShadow = computedStyle.textShadow;

    measureRoot.appendChild(measureNode);

    const measuredLines = Math.max(
      1,
      Math.round(measureNode.getBoundingClientRect().height / effectiveLineHeight)
    );

    measureNode.remove();
    return measuredLines;
  }

  function clampMarginValue(value) {
    return Math.min(85, Math.max(-20, value));
  }

  function createShiftedMargins(baseLeft, baseRight, shiftAmount) {
    return {
      left: `${clampMarginValue(baseLeft + shiftAmount).toFixed(2)}%`,
      right: `${clampMarginValue(baseRight - shiftAmount).toFixed(2)}%`
    };
  }

  function ensureSpeakerBaseline(card) {
    if (speakerBaselineCache.has(card)) {
      return speakerBaselineCache.get(card);
    }

    const fitProfile = getSpeakerCardFitProfile(card);
    const nameElement = card.querySelector(".speaker-card__name");
    const detailElement = card.querySelector(".speaker-card__detail");
    const baselineCardWidth = getCardBaselineWidth(card);
    const baseNameLeft = parseNumericValue(
      getCardVariable(card, "--speaker-name-left-margin")
    );
    const baseNameRight = parseNumericValue(
      getCardVariable(card, "--speaker-name-right-margin")
    );
    const baseDetailLeft = parseNumericValue(
      getCardVariable(card, "--speaker-description-left-margin")
    );
    const baseDetailRight = parseNumericValue(
      getCardVariable(card, "--speaker-description-right-margin")
    );
    const baseNameFontSize = convertSizeToPixels(
      getCardVariable(card, "--speaker-name-font-size")
    );
    const baseDetailFontSize = convertSizeToPixels(
      getCardVariable(card, "--speaker-description-font-size")
    );
    const baseline = {
      baselineCardWidth,
      baseNameLeft,
      baseNameRight,
      baseDetailLeft,
      baseDetailRight,
      baseNameFontSize,
      baseDetailFontSize,
      nameTargetLines: Math.min(
        fitProfile.nameMaxLines,
        measureTextLines(
          nameElement,
          baselineCardWidth * (100 - baseNameLeft - baseNameRight) / 100,
          baseNameFontSize
        )
      ),
      detailTargetLines: Math.min(
        fitProfile.detailMaxLines,
        measureTextLines(
          detailElement,
          baselineCardWidth * (100 - baseDetailLeft - baseDetailRight) / 100,
          baseDetailFontSize
        )
      )
    };

    speakerBaselineCache.set(card, baseline);
    return baseline;
  }

  function fitTextBlock(card, element, cssVariable, targetLines, minScale) {
    if (!element) {
      return;
    }

    let scale = 1;
    card.style.setProperty(cssVariable, "1");

    while (scale > minScale) {
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);

      if (!lineHeight) {
        break;
      }

      if (element.scrollHeight <= lineHeight * targetLines + 1) {
        break;
      }

      scale = Math.max(minScale, scale - 0.02);
      card.style.setProperty(cssVariable, scale.toFixed(2));
    }
  }

  function fitSpeakerCardCopy(card, viewportWidth) {
    const baseline = ensureSpeakerBaseline(card);
    const fitProfile = getSpeakerCardFitProfile(card);
    const viewportTier = getViewportTier(viewportWidth);
    const marginShift =
      fitProfile.marginShiftByViewport[viewportTier] ||
      fitProfile.marginShiftByViewport.default;
    const nameElement = card.querySelector(".speaker-card__name");
    const detailElement = card.querySelector(".speaker-card__detail");
    const nameMargins = createShiftedMargins(
      baseline.baseNameLeft,
      baseline.baseNameRight,
      marginShift.name || 0
    );
    const detailMargins = createShiftedMargins(
      baseline.baseDetailLeft,
      baseline.baseDetailRight,
      marginShift.detail || 0
    );

    card.style.setProperty("--speaker-name-left-effective-margin", nameMargins.left);
    card.style.setProperty("--speaker-name-right-effective-margin", nameMargins.right);
    card.style.setProperty(
      "--speaker-description-left-effective-margin",
      detailMargins.left
    );
    card.style.setProperty(
      "--speaker-description-right-effective-margin",
      detailMargins.right
    );
    card.style.setProperty(
      "--speaker-detail-max-lines",
      String(Math.max(1, baseline.detailTargetLines))
    );
    card.style.setProperty("--speaker-name-fit-scale", "1");
    card.style.setProperty("--speaker-detail-fit-scale", "1");
    card.style.removeProperty("--speaker-name-bottom");

    fitTextBlock(
      card,
      nameElement,
      "--speaker-name-fit-scale",
      baseline.nameTargetLines,
      fitProfile.minNameFitScale
    );
    fitTextBlock(
      card,
      detailElement,
      "--speaker-detail-fit-scale",
      baseline.detailTargetLines,
      fitProfile.minDetailFitScale
    );
  }

  function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth || 0;
  }

  function fitAllSpeakerCards(force) {
    const viewportWidth = getViewportWidth();
    if (!force && viewportWidth === lastFittedViewportWidth) {
      return;
    }

    lastFittedViewportWidth = viewportWidth;
    document.querySelectorAll(".speaker-card").forEach(function fitCard(card) {
      fitSpeakerCardCopy(card, viewportWidth);
    });
  }

  function queueSpeakerCardFit(force) {
    window.cancelAnimationFrame(fitFrame);
    fitFrame = window.requestAnimationFrame(function runFitFrame() {
      fitAllSpeakerCards(force);
    });
  }

  function scheduleSpeakerCardFit(options) {
    const config = options || {};
    const debounce = !!config.debounce;
    const force = !!config.force;

    window.clearTimeout(fitDebounceTimer);

    if (debounce) {
      fitDebounceTimer = window.setTimeout(function runDebouncedFit() {
        queueSpeakerCardFit(force);
      }, resizeFitDebounceMs);
      return;
    }

    queueSpeakerCardFit(force);
  }

  function revealSpeakerCards(target) {
    if (!target) {
      return;
    }

    target.querySelectorAll(".speaker-card").forEach(function revealCard(card) {
      card.classList.add("speaker-card--is-visible");
    });
  }

  function setupSpeakerScrollEntrance(targetId) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealSpeakerCards(target);
      return;
    }

    const observer = new IntersectionObserver(
      function onIntersect(entries, activeObserver) {
        entries.forEach(function eachEntry(entry) {
          if (!entry.isIntersecting) {
            return;
          }

          revealSpeakerCards(target);
          activeObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(target);
  }

  function renderSpeakerCollection(targetId, speakers, variant) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    if (variant === "main") {
      const rows = getMainSpeakerRows(speakers);
      target.classList.toggle(
        "speaker-grid--balanced-two-rows",
        rows.isBalancedTwoRowLayout
      );

      target.innerHTML = [
        createSpeakerRowMarkup(
          rows.primary,
          "speaker-grid__row--primary",
          variant,
          primaryRowEnterDelaySeconds
        ),
        createSpeakerRowMarkup(
          rows.secondary,
          "speaker-grid__row--secondary",
          variant,
          secondaryRowEnterDelaySeconds
        ),
        createSpeakerRowMarkup(
          rows.tertiary,
          "speaker-grid__row--tertiary",
          variant,
          tertiaryRowEnterDelaySeconds
        )
      ].join("");

      return;
    }

    target.innerHTML = speakers
      .map(function mapSpeaker(speaker) {
        return createSpeakerCardMarkup(speaker, variant, primaryRowEnterDelaySeconds);
      })
      .join("");
  }

  renderSpeakerCollection(
    "speaker-teaser-grid",
    speakerData.getSpeakerTeaserList(),
    "teaser"
  );
  renderSpeakerCollection(
    "speaker-grid",
    speakerData.getVisibleSpeakers2026(),
    "main"
  );
  setupSpeakerScrollEntrance("speaker-teaser-grid");
  setupSpeakerScrollEntrance("speaker-grid");
  scheduleSpeakerCardFit({ force: true });

  window.addEventListener("resize", function onResize() {
    scheduleSpeakerCardFit({ debounce: true });
  }, { passive: true });
  window.addEventListener("load", function onLoad() {
    scheduleSpeakerCardFit({ force: true });
  }, { once: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready
      .then(function onFontsReady() {
        scheduleSpeakerCardFit({ force: true });
      })
      .catch(function noop() {});
  }
})();
