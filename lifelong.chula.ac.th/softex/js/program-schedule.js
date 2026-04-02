(function () {
  const target = document.getElementById("program-schedule-calendars");

  if (!target) {
    return;
  }

  // Update the months and highlighted dates here.
  // `month` uses 1-12, and `visibleWeeks` lets you keep the same card height as the original design.
  const programScheduleConfig = {
    weekdayLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calendars: [
      {
        year: 2025,
        month: 11,
        visibleWeeks: 5,
        highlightedDates: [
          { day: 7, color: "orange" },
          { day: 14, color: "orange" },
          { day: 15, color: "pink" },
          { day: 21, color: "pink" },
          { day: 22, color: "orange" },
          { day: 28, color: "orange" },
          { day: 29, color: "pink" }
        ]
      },
      {
        year: 2025,
        month: 12,
        visibleWeeks: 5,
        highlightedDates: [
          { day: 12, color: "blue" },
          { day: 13, color: "blue" }
        ]
      }
    ]
  };

  const allowedHighlightColors = new Set(["orange", "pink", "blue"]);
  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });

  window.programScheduleConfig = programScheduleConfig;

  target.innerHTML = programScheduleConfig.calendars
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
          const highlightColor = cell.isCurrentMonth ? highlightMap.get(cell.day) : "";

          if (!cell.isCurrentMonth) {
            cellClasses.push("program-schedule-calendar__cell--outside");
          }

          if (highlightColor) {
            dayClasses.push("program-schedule-calendar__day-number--highlight");
            dayClasses.push("program-schedule-calendar__day-number--" + highlightColor);
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

      const weekdayMarkup = programScheduleConfig.weekdayLabels
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
        "</section>"
      );
    })
    .join("");

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
})();
