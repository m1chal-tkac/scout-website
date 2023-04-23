import qs from "qs";

interface StrediskoBase {
  data: {
    attributes: {
      Nazev: string;
      CelyNazev: string;
      Sidlo: string;
      CisloStrediska: string;
      Ico: string;
      CisloUctu: string;
    };
  };
}

export async function strediskoBase() {
  const response = await fetch(`https://strapi.nashuro.cz/api/stredisko`);
  const data = (await response.json()) as StrediskoBase;

  return { ...data.data.attributes };
}

interface StrediskoFull {
  data: {
    attributes: {
      Nazev: string;
      CelyNazev: string;
      Sidlo: string;
      CisloStrediska: string;
      Ico: string;
      CisloUctu: string;
      SocialniSite: {
        Typ: "Instagram" | "Facebook";
        Odkaz: string;
      }[];
      Fotky: {
        Nazev: string;
        Odkaz: string;
      }[];
    };
  };
}

export async function strediskoFull() {
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(
    `https://strapi.nashuro.cz/api/stredisko?${query}`
  );
  const data = (await response.json()) as StrediskoFull;

  return { ...data.data.attributes };
}
