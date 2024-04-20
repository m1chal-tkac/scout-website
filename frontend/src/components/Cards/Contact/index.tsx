import { type StrapiImage } from "../../../customTypes";
import { h5 } from "../../typography";

interface Contact {
  Jmeno: string;
  Funkce: string;
  Telefon: string;
  Email: string;
  Obrazek: StrapiImage;
}

export default function Contact({
  Jmeno,
  Funkce,
  Telefon,
  Email,
  Obrazek,
}: Contact) {
  return (
    <article className="flex flex-col items-center text-center w-full mb-8 max-w-xs">
      <img
        loading="lazy"
        src={
          import.meta.env.PUBLIC_STRAPI +
          (Obrazek.data.attributes.formats.thumbnail?.url ||
            Obrazek.data.attributes.url)
        }
        alt={Jmeno}
        className="h-28 w-28 rounded-full"
      />
      <h1 className={h5}>{Jmeno}</h1>
      <h2 className="mb-2">{Funkce}</h2>
      <address className="not-italic">
        <p className="mb-1">{Telefon}</p>
        <p>{Email}</p>
      </address>
    </article>
  );
}
