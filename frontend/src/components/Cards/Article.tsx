import { type StrapiImage } from "../../customTypes";
import { h1_center } from "../typography";

interface Article {
  Url: string;
  Obrazek: StrapiImage;
  Nazev: string;
  Popis: string;
  Big?: boolean;
  Published?: string;
}

export default function Article({
  Url,
  Obrazek,
  Nazev,
  Popis,
  Big,
  Published,
}: Article) {
  const date = Date ? new Date(Published) : undefined;

  return (
    <a
      href={"/novinky/" + Url}
      className={`${
        Big ? "max-w-2xl w-full mb-12 last:mb-0" : "flex-[0_1_15rem] mb-8"
      } block`}
    >
      <article className={`flex items-center mx-4 mt-4 flex-col`}>
        {Big && <h1 className={h1_center}>{Nazev}</h1>}
        {Big && date && (
          <p className="mb-3 mx-auto">
            {date.getDate()}.{date.getMonth() + 1}. {date.getFullYear()}
          </p>
        )}
        <img
          loading="lazy"
          src={
            import.meta.env.PUBLIC_STRAPI +
            ((Big
              ? Obrazek.data.attributes.formats.large?.url
              : Obrazek.data.attributes.formats.small?.url) ||
              Obrazek.data.attributes.url)
          }
          alt={Nazev}
          className="object-cover max-w-2xl w-full aspect-[3/2] mb-4"
        />
        <div className="w-full">
          {!Big && (
            <h1 className="font-skautbold text-base mb-4 overflow-hidden">
              {Nazev}
            </h1>
          )}
          <p className="line-clamp-3 max-w-lg mx-auto">{Popis}</p>
        </div>
      </article>
    </a>
  );
}
