import { CalendarDate } from "./Date";

interface Calendar {
  data: {
    summary: string;
    start: Date;
    end: Date;
    color?: "Zelena" | "Cervena" | "Hneda" | "Zluta" | "Fialova";
  }[];
  month: number;
  year: number;
  onChange: (future?: boolean) => void;
}

const months = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];

const getCalendarData = (
  data: Calendar["data"],
  month: number,
  year: number
) => {
  const spacesFromStart =
    new Date(year, month, 1).getDay() === 0
      ? 6
      : new Date(year, month, 1).getDay() - 1;

  const result = [Array(spacesFromStart).fill(null)];

  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    if (result[result.length - 1].length === 7) {
      result.push([]);
    }

    result[result.length - 1].push({
      day: i,
      events: data
        .filter((x) => {
          const date = new Date(year, month, i);
          const start = new Date(x.start.toDateString());
          const end = new Date(x.end.toDateString());
          return date >= start && date <= end;
        })
        .reduce((acc, x) => {
          const color = x.color || "Primary";

          if (acc.find((y) => y === x.color)) {
            return acc;
          }

          return [...acc, color];
        }, []),
    });
  }

  return result as ({
    day: number;
    events: (
      | "Primary"
      | "Zelena"
      | "Cervena"
      | "Hneda"
      | "Zluta"
      | "Fialova"
    )[];
  } | null)[][];
};

export function Calendar({ data, year, month, onChange }: Calendar) {
  const calendarData = getCalendarData(data, month, year);

  return (
    <div className="flex flex-col items-center py-4 md:py-0 md:mr-16 sticky top-0 md:top-8 min-h-0 h-full bg-gray-100">
      <div className="flex mb-6">
        <button className="px-4" onClick={() => onChange()}>
          <img
            src="/ikony/sipka-vlevo.svg"
            alt="minulý měsíc"
            className="w-6 h-6"
          />
        </button>
        <p className="font-bold text-primary-100 w-28 text-center">
          {months[month]} - {year}
        </p>
        <button className="px-4" onClick={() => onChange(true)}>
          <img
            src="/ikony/sipka-vpravo.svg"
            alt="následující měsíc"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div>
        <div className="flex">
          <CalendarDate day="Po" />
          <CalendarDate day="Út" />
          <CalendarDate day="St" />
          <CalendarDate day="Čt" />
          <CalendarDate day="Pá" />
          <CalendarDate day="So" />
          <CalendarDate day="Ne" />
        </div>
        {calendarData.map((week, i) => (
          <div key={i} className="flex">
            {week.map((day, j) =>
              day ? (
                <CalendarDate key={j} {...day} />
              ) : (
                <div key={j} className="w-10 h-10" />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
