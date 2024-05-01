import { useEffect, useState } from "react";
import { Calendar } from "../components/Calendar/Calendar";
import Section from "../components/Section";
import { h1_center } from "../components/typography";
import ICAL from "ical.js";
import { CalendarEvent } from "../components/Calendar/Event";

interface Events {
  oddily: {
    data: {
      attributes: {
        Nazev: string;
        CalendarColor: "Zelena" | "Cervena" | "Hneda" | "Zluta" | "Fialova";
      };
    }[];
  };
}

export default function Events({ oddily }: Events) {
  const [data, setData] = useState<
    | {
        summary: string;
        start: Date;
        end: Date;
        color?: "Zelena" | "Cervena" | "Hneda" | "Zluta" | "Fialova";
      }[]
    | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        import.meta.env.PUBLIC_STRAPI + "/api/calendar"
      );
      const _data = await response.text();

      const jcalData = ICAL.parse(_data);

      setData(
        new ICAL.Component(jcalData).getAllSubcomponents("vevent").map((x) => {
          const event = new ICAL.Event(x);

          const color = oddily.data.find((oddil) =>
            event.summary
              .toLowerCase()
              .includes(oddil.attributes.Nazev.toLowerCase())
          )?.attributes.CalendarColor;

          return {
            summary: event.summary,
            start: event.startDate.toJSDate(),
            end: event.endDate.toJSDate(),
            color,
          };
        })
      );
    })();
  }, []);

  const [selected, setSelected] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const handleChange = (future?: boolean) => {
    if (future) {
      setSelected((x) => {
        return {
          month: x.month === 11 ? 0 : x.month + 1,
          year: x.month === 11 ? x.year + 1 : x.year,
        };
      });
    } else if (
      !(
        selected.month === new Date().getMonth() &&
        selected.year === new Date().getFullYear()
      )
    ) {
      setSelected((x) => {
        return {
          month: x.month === 0 ? 11 : x.month - 1,
          year: x.month === 0 ? x.year - 1 : x.year,
        };
      });
    }
  };

  return (
    <Section>
      <h1 className={h1_center}>Kalendář</h1>
      <div className="flex flex-col md:flex-row md:mt-10 justify-center">
        <Calendar
          data={data || []}
          month={selected.month}
          year={selected.year}
          onChange={handleChange}
        />
        <div className="flex flex-col space-y-4 max-w-sm w-full mx-auto md:mx-0 pt-8 md:pt-0">
          {data ? (
            (() => {
              const events = data.filter(
                (x) =>
                  x.start >= new Date(selected.year, selected.month, 1) ||
                  x.end >= new Date(selected.year, selected.month, 1)
              );

              if (events.length === 0) {
                return (
                  <p className="text-center my-auto py-24">
                    Žádné události v tomto měsíci
                  </p>
                );
              }

              return events.map((event, index) => (
                <CalendarEvent
                  key={index}
                  summary={event.summary}
                  start={event.start}
                  end={event.end}
                  color={event.color}
                />
              ));
            })()
          ) : (
            <p className="text-center my-auto py-24">Načítání...</p>
          )}
        </div>
      </div>
    </Section>
  );
}
