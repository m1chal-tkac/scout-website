import qs from "qs";

interface OddilyBase {
  data: {
    attributes: {
      Nazev: string;
      CelyNazev: string;
      Sidlo: string;
      CisloStrediska: string;
      Ico: string;
      CisloUctu: string;
    };
  }[];
}

export async function oddilyBase() {
  const response = await fetch(`https://strapi.nashuro.cz/api/oddily`);
  const data = (await response.json()) as OddilyBase;

  return [...data.data.map((x) => x.attributes)];
}

interface OddilyDruziny {
  data: {
    attributes: {
      Nazev: string;
      Url: string;
      Typ: string;
      Popis: string;
      druziny: {
        data: {
          attributes: {
            Nazev: string;
            Url: string;
            Typ: string;
            Popis: string;
          };
        }[];
      };
    };
  }[];
}

export async function oddilyDruziny() {
  const query = qs.stringify(
    {
      populate: "druziny",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`https://strapi.nashuro.cz/api/oddily?${query}`);
  const data = (await response.json()) as OddilyDruziny;

  return [
    ...data.data.map((x) => {
      return {
        ...x.attributes,
        druziny: [...x.attributes.druziny.data.map((y) => y.attributes)],
      };
    }),
  ];
}
