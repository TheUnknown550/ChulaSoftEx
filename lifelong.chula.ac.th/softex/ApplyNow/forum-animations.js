(function forumAnimations(window, document) {
  "use strict";

  var body = document.body;
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!body || prefersReducedMotion) {
    return;
  }

  var introSelectors = [".hero-copy", ".process-card", ".form-head"];
  var revealSelectors = [".form-section", ".consent-card", ".submit-row"];

  function markElements(selectors, baseDelay) {
    selectors.forEach(function assign(selector, selectorIndex) {
      document.querySelectorAll(selector).forEach(function decorate(element, index) {
        element.classList.add("motion-reveal");
        element.style.setProperty(
          "--motion-delay",
          String(baseDelay + selectorIndex * 90 + index * 110) + "ms"
        );
      });
    });
  }

  function revealIntro() {
    introSelectors.forEach(function reveal(selector) {
      document.querySelectorAll(selector).forEach(function makeVisible(element) {
        window.requestAnimationFrame(function onFrame() {
          element.classList.add("is-visible");
        });
      });
    });
  }

  function observeSections() {
    var observer;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".motion-reveal").forEach(function fallback(element) {
        element.classList.add("is-visible");
      });
      return;
    }

    observer = new IntersectionObserver(
      function handleEntries(entries) {
        entries.forEach(function handleEntry(entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    document.querySelectorAll(".motion-reveal").forEach(function observe(element) {
      if (element.matches(".hero-copy, .process-card, .form-head")) {
        return;
      }

      observer.observe(element);
    });
  }

  function setupFieldFocus() {
    document.addEventListener("focusin", function handleFocusIn(event) {
      var field = event.target.closest(".form-field, .file-picker, .checkbox-field");
      if (field) {
        field.classList.add("is-focused");
      }
    });

    document.addEventListener("focusout", function handleFocusOut(event) {
      var field = event.target.closest(".form-field, .file-picker, .checkbox-field");
      if (!field) {
        return;
      }

      window.setTimeout(function removeIfIdle() {
        if (!field.contains(document.activeElement)) {
          field.classList.remove("is-focused");
        }
      }, 0);
    });
  }

  function setupStatusPulse() {
    var status = document.getElementById("submit-status");
    var lastSignature = "";
    var observer;

    if (!status || !("MutationObserver" in window)) {
      return;
    }

    observer = new MutationObserver(function onMutation() {
      var signature = status.className + "::" + status.textContent;

      if (!status.textContent || signature === lastSignature) {
        return;
      }

      lastSignature = signature;
      status.classList.remove("is-animating");
      void status.offsetWidth;
      status.classList.add("is-animating");
    });

    observer.observe(status, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  markElements(introSelectors, 80);
  markElements(revealSelectors, 180);
  body.classList.add("forum-motion-ready");
  revealIntro();
  observeSections();
  setupFieldFocus();
  setupStatusPulse();
})(window, document);
