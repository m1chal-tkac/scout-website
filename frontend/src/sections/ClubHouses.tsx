import { useEffect, useState } from "react";
import Section from "../components/Section";
import SwitchMenuButton, {
  SwitchMenuButtonWrapper,
} from "../components/SwitchMenu/Button";
import { h1_cards_section, h1_center } from "../components/typography";
import { type StrapiImages } from "../customTypes";
import Map from "../components/Map";

interface ClubHouse {
  data: {
    Nazev: string;
    Adresa: string;
    MapyCzKod: string;
    Obrazky: StrapiImages;
    spravce: {
      data: {
        attributes: {
          Jmeno: string;
          Telefon: string;
          Email: string;
        };
      };
    };
  }[];
}

enum Cookies {
  loading,
  true,
  false,
}

export default function ClubHouse({ data }: ClubHouse) {
  const [selected, setSelected] = useState(0);
  const [cookies, setCookies] = useState(Cookies.loading);
  const [preview, setPreview] = useState(-1);

  useEffect(() => {
    const cookiesValue = localStorage.getItem("MapyCzCookies");
    setTimeout(() => {
      if (cookiesValue === "1") setCookies(Cookies.true);
      else setCookies(Cookies.false);
    }, 1000);
  }, []);

  if (data.length === 0) return null;

  return (
    <Section>
      <h1 className={data.length > 1 ? h1_center : h1_cards_section}>
        {data.length > 1 ? "Naše klubovny" : "Naše klubovna"}
      </h1>
      {data.length > 1 && (
        <SwitchMenuButtonWrapper>
          {data.map((x, i) => (
            <SwitchMenuButton
              key={i}
              text={x.Nazev}
              onClick={() => {
                setSelected(i);
                setPreview(-1);
              }}
              selected={i === selected}
            />
          ))}
        </SwitchMenuButtonWrapper>
      )}
      {data.map((x, i) => (
        <article
          key={i}
          className={`flex justify-center lg:flex-row flex-col ${
            i === selected ? "" : "hidden"
          }`}
        >
          <div className="lg:max-w-lg w-full lg:mr-8 lg:mb-0 mb-4 aspect-[3/2]">
            {preview !== -1 ? (
              <img
                src={
                  import.meta.env.PUBLIC_STRAPI +
                  (x.Obrazky.data[preview].attributes.formats.large?.url ||
                    x.Obrazky.data[preview].attributes.url)
                }
                alt={x.Nazev}
                className="h-full w-full object-cover"
              />
            ) : (
              <Map code={x.MapyCzKod} />
            )}
          </div>
          <div className="max-w-lg w-full">
            <div className="flex lg:flex-col flex-col-reverse h-full">
              <address className="not-italic flex-1">
                <h1 className="font-skautbold text-xl mb-2">{x.Nazev}</h1>
                <p className="mb-4">{x.Adresa}</p>
                <h2 className="font-bold text-lg mb-2">Správce klubovny:</h2>
                <p className="mb-1">{x.spravce.data.attributes.Jmeno}</p>
                <p className="mb-1">{x.spravce.data.attributes.Telefon}</p>
                <p className="mb-1">{x.spravce.data.attributes.Email}</p>
              </address>
              <div className="flex overflow-x-auto lg:mb-0 mb-4">
                <button
                  className="last:mr-0 mr-4 shrink-0"
                  onClick={() => setPreview(-1)}
                >
                  <img
                    loading="lazy"
                    src="/obrazky/mapy-cz.webp"
                    alt="Mapy.cz"
                    className="w-28 h-20 object-cover"
                  />
                </button>
                {x.Obrazky.data.map((y, j) => (
                  <button
                    className="last:mr-0 mr-4 shrink-0"
                    key={j}
                    onClick={() => setPreview(j)}
                  >
                    <img
                      loading="lazy"
                      src={
                        import.meta.env.PUBLIC_STRAPI +
                        (y.attributes.formats.thumbnail?.url ||
                          y.attributes.url)
                      }
                      alt={x.Nazev + " " + j}
                      className="w-28 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
