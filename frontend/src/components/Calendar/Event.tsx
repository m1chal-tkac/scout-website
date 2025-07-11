interface EventProps {
  summary: string;
  start: Date;
  end: Date;
  color?: "Zelena" | "Cervena" | "Hneda" | "Zluta" | "Fialova";
}

export function CalendarEvent({ summary, start, end, color }: EventProps) {
  const startDate = `${start.getDate()}.${
    start.getMonth() + 1
  }. ${start.getFullYear()}`;
  const endDate = `${end.getDate()}.${
    end.getMonth() + 1
  }. ${end.getFullYear()}`;

  const _endTime = new Date(+end + 1);

  const startTime = `${start.getHours()}:${("0" + start.getMinutes()).slice(
    -2
  )}`;
  const endTime = `${_endTime.getHours()}:${("0" + _endTime.getMinutes()).slice(
    -2
  )}`;

  const date =
    startDate === endDate
      ? startTime !== "0:00"
        ? `${startDate}\u00A0\u00A0 (${startTime} - ${endTime})`
        : startDate
      : `${startDate}\u00A0 - \u00A0${endDate}`;

  return (
    <div className="flex">
      <div
        className={`w-2 ${
          color === "Zelena"
            ? "bg-calendar-green"
            : color === "Cervena"
            ? "bg-calendar-red"
            : color === "Hneda"
            ? "bg-calendar-brown"
            : color === "Zluta"
            ? "bg-calendar-yellow"
            : color === "Fialova"
            ? "bg-calendar-purple"
            : "bg-primary-100"
        } rounded-lg mr-4`}
      />
      <div>
        <h2 className="font-skautbold mb-1">{summary}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
}
