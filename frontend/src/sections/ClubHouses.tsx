import { useEffect, useState } from "react";
import Section from "../components/Section";
import SwitchMenuButton, {
  SwitchMenuButtonWrapper,
} from "../components/SwitchMenu/Button";
import { h1_cards_section } from "../components/typography";
import { StrapiImages } from "../customTypes";

interface ClubHouse {
  data: {
    Nazev: string;
    Adresa: string;
    Kod: string;
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

  return (
    <Section>
      <h1 className={h1_cards_section}>Naše klubovna</h1>
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
          <div className="lg:max-w-lg w-full min-h-80 lg:mr-8 lg:mb-0 mb-4 aspect-[3/2]">
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
            ) : cookies === Cookies.loading ? (
              <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center">
                <p className="mb-4">Načítání...</p>
              </div>
            ) : cookies === Cookies.true ? (
              <iframe
                src={`https://frame.mapy.cz/s/${x.Kod}`}
                className="border-0"
                width="100%"
                height="100%"
              />
            ) : (
              <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center">
                <p className="mb-4">Mapy.cz používá Cookies.</p>
                <button
                  className="font-bold text-white bg-primary-100 px-4 py-2 rounded-md"
                  onClick={() => {
                    setCookies(Cookies.true);
                    localStorage.setItem("MapyCzCookies", "1");
                  }}
                >
                  Povolit
                </button>
              </div>
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
