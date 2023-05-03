import Section from "../components/Section";
import { h1_cards_section } from "../components/typography";

export default function ClubHouse() {
  return (
    <Section>
      <h1 className={h1_cards_section}>Naše klubovna</h1>
      <article className="flex justify-center lg:flex-row flex-col">
        <div className="lg:max-w-lg w-full min-h-80 lg:mr-8 lg:mb-0 mb-4 aspect-[3/2]">
          <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center">
            <p className="mb-4">Mapy.cz používá Cookies.</p>
            <button className="font-bold text-white bg-primary-100 px-4 py-2 rounded-md">
              Povolit
            </button>
          </div>
        </div>
        <div className="max-w-lg w-full">
          <div className="flex lg:flex-col flex-col-reverse h-full">
            <address className="not-italic flex-1">
              <h1 className="font-skautbold text-xl mb-2">Kozlovice</h1>
              <p className="mb-4">Kozlovice 1000</p>
              <h2 className="font-bold text-lg mb-2">Správce klubovny:</h2>
              <p className="mb-1">Jméno Příjmení</p>
              <p className="mb-1">777 777 777</p>
              <p className="mb-1">email@nashuro.cz</p>
            </address>
            <div className="flex overflow-x-auto lg:mb-0 mb-4">
              <button className="last:mr-0 mr-4 shrink-0">
                <img
                  data-fresh-disable-lock
                  loading="lazy"
                  src="/obrazky/mapy-cz.webp"
                  alt="Mapy.cz"
                  className="w-28 h-20 object-cover mr-4"
                />
              </button>
              <button className="last:mr-0 mr-4 shrink-0">
                <img
                  loading="lazy"
                  src={"/uloziste/"}
                  alt="obrázek klubovny"
                  className={`w-28 h-20 object-cover`}
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
