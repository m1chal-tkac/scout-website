import { StrapiImage } from "../../customTypes";

interface Article {
  Url: string;
  Obrazek: StrapiImage;
  Nazev: string;
  Popis: string;
}

export default function ArticlePreview({
  Url,
  Obrazek,
  Nazev,
  Popis,
}: Article) {
  return (
    <a href={"/novinky/" + Url} className="flex-[0_1_15rem]">
      <article className="flex items-center mx-4 mt-4 mb-8 flex-col">
        <img
          loading="lazy"
          src={
            import.meta.env.PUBLIC_STRAPI +
            (Obrazek.data.attributes.formats.small?.url ||
              Obrazek.data.attributes.url)
          }
          alt={Nazev}
          className="object-cover w-full aspect-[3/2]"
        />
        <div className="w-full">
          <h1 className="font-skautbold text-base my-4 overflow-hidden">
            {Nazev}
          </h1>
          <p className="line-clamp-3">{Popis}</p>
        </div>
      </article>
    </a>
  );
}
