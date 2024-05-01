interface CalendarDate {
  day: string | number;
  events?: ("Primary" | "Zelena" | "Cervena" | "Hneda" | "Zluta" | "Fialova")[];
}

export function CalendarDate({ day, events }: CalendarDate) {
  return (
    <div className="w-10 h-10 flex flex-col items-center">
      <p
        className={`${day === "So" || day === "Ne" ? "text-primary-100" : ""} ${
          isNaN(+day) ? "font-bold" : ""
        }`}
      >
        {day}
      </p>
      <div className="flex space-x-1 mt-1">
        {(events || []).map((color) => (
          <div
            className={`${
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
            } w-1 h-1 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}
