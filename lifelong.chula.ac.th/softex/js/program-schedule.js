(function () {
  const calendarsTarget = document.getElementById("program-schedule-calendars");
  const legendTarget = document.getElementById("program-schedule-legend");
  const speakerCardsTarget = document.getElementById("speaker-cards");

  const categoryOrder = [
    "Lectures and Workshops",
    "Exclucsive Site Visit",
    "Experiential Learning Trip"
  ];

  const categoryConfig = {
    "Lectures and Workshops": {
      label: "Lectures and Workshops",
      color: "orange"
    },
    "Exclucsive Site Visit": {
      label: "Exclusive Site Visit",
      color: "pink"
    },
    "Experiential Learning Trip": {
      label: "Experiential Learning Trip",
      color: "blue"
    }
  };

  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });

  const programEntries = [
    {
      dateLabel: "ศ. 5 มิ.ย. 69 (13:00 - 20:00)",
      dates: ["2026-06-05"],
      topic: "Orientation/Foundations of Creative Economy",
      category: "Lectures and Workshops",
      speakers: [
        "ศ. ดร.วิเลิศ ภูริวัชร",
        "ผศ.ดร.เอกก์ ภทรธนกุล",
        "คุณไชยยง รัตนอังกูร",
        "ดร.ชาคริต พิชญางกูร"
      ]
    },
    {
      dateLabel: "ศ. 12 มิ.ย. 69 (13:00 - 18:00)",
      dates: ["2026-06-12"],
      topic: "City Branding & Global Assets",
      category: "Exclucsive Site Visit",
      speakers: [
        "วิทยากรจาก Dib Bangkok",
        "รศ. ดร.วิริยะ เตชะรุ่งโรจน์",
        "Dr. hab. Magdalena Forex",
        "ดร.วลัญชลี วัฒนเจริญศิลป์"
      ]
    },
    {
      dateLabel: "ศ. 19 มิ.ย. 69 (13:00 - 20:00)",
      dates: ["2026-06-19"],
      topic: "Creative Organization & Competitiveness",
      category: "Exclucsive Site Visit",
      speakers: [
        "ผศ.ดร.จุฑามาศ วิศาลสิงห์",
        "Ms. Rehana Mughal (British Council)"
      ]
    },
    {
      dateLabel: "ส.-อา 20-21 มิ.ย. 69",
      dates: ["2026-06-20", "2026-06-21"],
      topic: "Creative Cultural Ecosystem Integration",
      category: "Experiential Learning Trip",
      speakers: [
        "คุณพิชิต วีรังคบุตร",
        "คุณฆฤณ กังวานกิตติ (ผอ. CEA สงขลา)"
      ]
    },
    {
      dateLabel: "ศ. 26 มิ.ย. 69 (13:00 - 18:00)",
      dates: ["2026-06-26"],
      topic: "Global Destination Branding",
      category: "Exclucsive Site Visit",
      speakers: [
        "วิทยากรจาก The Central Park",
        "คุณดลชัย บุณยะรัตเวช",
        "คุณพิชัย จิราธิวัฒน์"
      ]
    },
    {
      dateLabel: "ศ. 3 ก.ค. 69 (13:00 - 18:00)",
      dates: ["2026-07-03"],
      topic: "AI Power in Creativity",
      category: "Exclucsive Site Visit",
      speakers: [
        "วิทยากรจาก Google Thailand",
        "คุณณัฐวุฒิ อมรวิวัฒน์",
        "ดร. วิโรจน์ จิรพัฒนกุล"
      ]
    },
    {
      dateLabel: "ศ. 10 ก.ค. 69 (13:00 - 18:00)",
      dates: ["2026-07-10"],
      topic: "Geopolitics & Global Shift",
      category: "Lectures and Workshops",
      speakers: [
        "ดร. สันติธาร เสถียรไทย",
        "รศ.ดร.สมชาย ภคภาสน์วิวัฒน์"
      ]
    },
    {
      dateLabel: "ศ. 17 ก.ค. 69 (13:00 - 18:00)",
      dates: ["2026-07-17"],
      topic: "Cultural Capital & Content IP",
      category: "Lectures and Workshops",
      speakers: [
        "คุณอรมน ทรัพย์ทวีธรรม",
        "วิทยากรจาก UNESCO",
        "Panel Discussion:",
        "คุณกอบกาญจน์ วัฒนวรางกูร",
        "คุณพิมพ์ใจ ลี้อิสสระนุกูล",
        "ดำเนินรายการโดย ผศ.ดร.เอกก์ ภทรธนกุล"
      ]
    },
    {
      dateLabel: "จ. 20 ก.ค. 69 (13:00 - 18:00)",
      dates: ["2026-07-20"],
      topic: "Cultural Capital & Content IP",
      category: "Exclucsive Site Visit",
      speakers: ["วิทยากรจาก ผู้จัดงาน BICM"]
    },
    {
      dateLabel: "ศ. 24 ก.ค. 69 (13:00 - 20:00)",
      dates: ["2026-07-24"],
      topic: "Final Project Presentation",
      category: "Lectures and Workshops",
      speakers: ["CEA x Chula"]
    }
  ];

  const entryByDate = buildEntryByDateMap(programEntries);

  window.programScheduleEntries = programEntries;

  if (speakerCardsTarget) {
    speakerCardsTarget.innerHTML = buildSpeakerCardsMarkup(getUniqueSpeakerNames(programEntries));
  }

  if (calendarsTarget) {
    calendarsTarget.innerHTML = buildCalendarsMarkup(buildCalendarConfig(programEntries), entryByDate);
    attachCalendarInteractions(entryByDate);
  }

  if (legendTarget) {
    legendTarget.innerHTML = buildLegendMarkup();
  }

  function buildEntryByDateMap(entries) {
    const map = new Map();

    entries.forEach(function (entry) {
      entry.dates.forEach(function (dateString) {
        map.set(dateString, entry);
      });
    });

    return map;
  }

  function buildCalendarConfig(entries) {
    const calendarsByMonth = new Map();

    entries.forEach(function (entry) {
      const category = categoryConfig[entry.category];

      entry.dates.forEach(function (dateString) {
        const date = new Date(dateString + "T00:00:00");
        const key = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0");

        if (!calendarsByMonth.has(key)) {
          calendarsByMonth.set(key, {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            visibleWeeks: 5,
            highlightedDates: []
          });
        }

        calendarsByMonth.get(key).highlightedDates.push({
          day: date.getDate(),
          color: category.color
        });
      });
    });

    return Array.from(calendarsByMonth.values()).sort(function (left, right) {
      return left.year - right.year || left.month - right.month;
    });
  }

  function buildCalendarsMarkup(calendars, entriesByDate) {
    const allowedHighlightColors = new Set(["orange", "pink", "blue"]);

    return calendars
      .map(function (calendar) {
        const monthIndex = calendar.month - 1;
        const monthLabel = monthFormatter.format(new Date(calendar.year, monthIndex, 1));
        const highlightMap = new Map(
          (calendar.highlightedDates || []).map(function (item) {
            const color = allowedHighlightColors.has(item.color) ? item.color : "";
            return [Number(item.day), color];
          })
        );

        const cellsMarkup = getCalendarCells(calendar)
          .map(function (cell) {
            const cellClasses = ["program-schedule-calendar__cell"];
            const dayClasses = ["program-schedule-calendar__day-number"];
            const dateKey = cell.isCurrentMonth
              ? formatDateKey(calendar.year, calendar.month, cell.day)
              : "";
            const highlightColor = cell.isCurrentMonth ? highlightMap.get(cell.day) : "";
            const entry = dateKey ? entriesByDate.get(dateKey) : null;

            if (!cell.isCurrentMonth) {
              cellClasses.push("program-schedule-calendar__cell--outside");
            }

            if (highlightColor && entry) {
              dayClasses.push("program-schedule-calendar__day-number--highlight");
              dayClasses.push("program-schedule-calendar__day-number--" + highlightColor);
              dayClasses.push("program-schedule-calendar__day-number--interactive");

              return (
                '<div class="' +
                cellClasses.join(" ") +
                '"><button type="button" class="' +
                dayClasses.join(" ") +
                '" data-date-key="' +
                dateKey +
                '" aria-label="' +
                escapeHtml("รายละเอียด " + entry.dateLabel) +
                '">' +
                cell.day +
                "</button></div>"
              );
            }

            return (
              '<div class="' +
              cellClasses.join(" ") +
              '"><span class="' +
              dayClasses.join(" ") +
              '">' +
              cell.day +
              "</span></div>"
            );
          })
          .join("");

        const weekdayMarkup = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          .map(function (weekday) {
            return '<div class="program-schedule-calendar__weekday">' + weekday + "</div>";
          })
          .join("");

        return (
          '<section class="program-schedule-calendar" aria-label="' +
          monthLabel +
          " " +
          calendar.year +
          '">' +
          '<div class="program-schedule-calendar__header">' +
          '<h3 class="program-schedule-calendar__month">' +
          monthLabel +
          "</h3>" +
          '<div class="program-schedule-calendar__year">' +
          calendar.year +
          "</div>" +
          "</div>" +
          '<div class="program-schedule-calendar__weekdays">' +
          weekdayMarkup +
          "</div>" +
          '<div class="program-schedule-calendar__days">' +
          cellsMarkup +
          "</div>" +
          '<div class="program-schedule-calendar__hover-card" hidden>' +
          '<p class="program-schedule-calendar__hover-label">วันที่</p>' +
          '<p class="program-schedule-calendar__hover-value" data-field="date"></p>' +
          '<p class="program-schedule-calendar__hover-label">หัวข้อ</p>' +
          '<p class="program-schedule-calendar__hover-value program-schedule-calendar__hover-value--strong" data-field="topic"></p>' +
          '<p class="program-schedule-calendar__hover-label">คนสอน</p>' +
          '<ul class="program-schedule-calendar__hover-speakers" data-field="speakers"></ul>' +
          "</div>" +
          "</section>"
        );
      })
      .join("");
  }

  function attachCalendarInteractions(entriesByDate) {
    const triggers = calendarsTarget.querySelectorAll(".program-schedule-calendar__day-number--interactive");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("mouseenter", function () {
        showCalendarHoverCard(trigger, entriesByDate);
      });

      trigger.addEventListener("focus", function () {
        showCalendarHoverCard(trigger, entriesByDate);
      });

      trigger.addEventListener("mouseleave", function () {
        hideCalendarHoverCard(trigger);
      });

      trigger.addEventListener("blur", function () {
        hideCalendarHoverCard(trigger);
      });
    });
  }

  function buildLegendMarkup() {
    return categoryOrder
      .map(function (categoryKey) {
        const category = categoryConfig[categoryKey];

        return (
          '<div class="program-schedule-legend__item">' +
          '<span class="program-schedule-legend__dot program-schedule-legend__dot--' +
          category.color +
          '" aria-hidden="true"></span>' +
          '<span class="program-schedule-legend__label">' +
          escapeHtml(category.label) +
          "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function buildSpeakerCardsMarkup(speakerNames) {
    return speakerNames
      .map(function (speakerName) {
        return (
          '<article class="softex-speaker-card">' +
          '<div class="softex-speaker-card__portrait" aria-hidden="true"></div>' +
          '<h3 class="softex-speaker-card__name">' +
          escapeHtml(speakerName) +
          "</h3>" +
          "</article>"
        );
      })
      .join("");
  }

  function getUniqueSpeakerNames(entries) {
    const uniqueNames = [];
    const seen = new Set();

    entries.forEach(function (entry) {
      entry.speakers.forEach(function (speaker) {
        if (shouldSkipSpeakerLine(speaker)) {
          return;
        }

        const normalizedName = normalizeSpeakerName(speaker);

        if (!normalizedName || seen.has(normalizedName)) {
          return;
        }

        seen.add(normalizedName);
        uniqueNames.push(normalizedName);
      });
    });

    return uniqueNames;
  }

  function shouldSkipSpeakerLine(line) {
    return /^Panel Discussion:?$/i.test((line || "").trim());
  }

  function normalizeSpeakerName(line) {
    return (line || "").trim().replace(/^ดำเนินรายการโดย\s*/, "");
  }

  function showCalendarHoverCard(trigger, entriesByDate) {
    const dateKey = trigger.getAttribute("data-date-key");
    const entry = entriesByDate.get(dateKey);

    if (!entry) {
      return;
    }

    const calendar = trigger.closest(".program-schedule-calendar");
    const hoverCard = calendar.querySelector(".program-schedule-calendar__hover-card");
    const dateField = hoverCard.querySelector('[data-field="date"]');
    const topicField = hoverCard.querySelector('[data-field="topic"]');
    const speakersField = hoverCard.querySelector('[data-field="speakers"]');

    dateField.textContent = entry.dateLabel;
    topicField.textContent = entry.topic;
    speakersField.innerHTML = entry.speakers
      .map(function (speaker) {
        if (shouldSkipSpeakerLine(speaker)) {
          return "";
        }

        return "<li>" + escapeHtml(normalizeSpeakerName(speaker)) + "</li>";
      })
      .join("");

    hoverCard.hidden = false;
    hoverCard.classList.add("is-visible");
  }

  function hideCalendarHoverCard(trigger) {
    const calendar = trigger.closest(".program-schedule-calendar");
    const hoverCard = calendar.querySelector(".program-schedule-calendar__hover-card");

    hoverCard.classList.remove("is-visible");
    hoverCard.hidden = true;
  }

  function getCalendarCells(calendar) {
    const monthIndex = calendar.month - 1;
    const firstDayOfMonth = new Date(calendar.year, monthIndex, 1).getDay();
    const daysInMonth = new Date(calendar.year, monthIndex + 1, 0).getDate();
    const daysInPreviousMonth = new Date(calendar.year, monthIndex, 0).getDate();
    const minimumWeeks = Math.ceil((firstDayOfMonth + daysInMonth) / 7);
    const visibleWeeks = Math.max(calendar.visibleWeeks || minimumWeeks, 4);
    const totalCells = visibleWeeks * 7;
    const cells = [];

    for (let index = 0; index < totalCells; index += 1) {
      const dayValue = index - firstDayOfMonth + 1;

      if (dayValue < 1) {
        cells.push({
          day: daysInPreviousMonth + dayValue,
          isCurrentMonth: false
        });
        continue;
      }

      if (dayValue > daysInMonth) {
        cells.push({
          day: dayValue - daysInMonth,
          isCurrentMonth: false
        });
        continue;
      }

      cells.push({
        day: dayValue,
        isCurrentMonth: true
      });
    }

    return cells;
  }

  function formatDateKey(year, month, day) {
    return (
      String(year) +
      "-" +
      String(month).padStart(2, "0") +
      "-" +
      String(day).padStart(2, "0")
    );
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
