(function () {
  const speakerData = globalThis.SOFEX_SPEAKER_DATA;
  const desktopPrimaryRowCount = 6;

  if (!speakerData) {
    return;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  function createSpeakerLayoutStyle(speaker) {
    return [
      `--speaker-name-left-margin:${speaker.name_left_margin};`,
      `--speaker-name-right-margin:${speaker.name_right_margin};`,
      `--speaker-name-font-size:${speaker.name_font_size};`,
      `--speaker-description-left-margin:${speaker.description_left_margin};`,
      `--speaker-description-right-margin:${speaker.description_right_margin};`,
      `--speaker-description-font-size:${speaker.description_font_size};`
    ].join("");
  }

  function createSpeakerCardMarkup(speaker, variant) {
    const loading = variant === "teaser" ? "eager" : "lazy";
    const imagePath = speakerData.getSpeakerImagePath(speaker);
    const safeName = escapeHtml(speaker.name);
    const safeDetail = escapeHtml(speaker.detail ?? "");
    const layoutStyle = createSpeakerLayoutStyle(speaker);
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

  function createSpeakerRowMarkup(speakers, rowClassName, variant) {
    if (!speakers.length) {
      return "";
    }

    return [
      `<div class="speaker-grid__row ${rowClassName}">`,
      speakers
        .map(function mapSpeaker(speaker) {
          return createSpeakerCardMarkup(speaker, variant);
        })
        .join(""),
      "</div>"
    ].join("");
  }

  function renderSpeakerCollection(targetId, speakers, variant) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    if (variant === "main") {
      target.innerHTML = [
        createSpeakerRowMarkup(
          speakers.slice(0, desktopPrimaryRowCount),
          "speaker-grid__row--primary",
          variant
        ),
        createSpeakerRowMarkup(
          speakers.slice(desktopPrimaryRowCount),
          "speaker-grid__row--secondary",
          variant
        )
      ].join("");

      return;
    }

    target.innerHTML = speakers
      .map(function mapSpeaker(speaker) {
        return createSpeakerCardMarkup(speaker, variant);
      })
      .join("");
  }

  renderSpeakerCollection(
    "speaker-teaser-grid",
    speakerData.getSpeakerTeaserList(),
    "teaser"
  );
  renderSpeakerCollection("speaker-grid", speakerData.speakers2026, "main");
})();
