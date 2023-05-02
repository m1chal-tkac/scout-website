import { useState } from "react";
import Section from "../components/Section";
import SwitchMenuButton, {
  SwitchMenuButtonWrapper,
} from "../components/SwitchMenu/Button";
import { StrapiImage } from "../customTypes";
import { h1_cards_section } from "../components/typography";
import FlexWrapper from "../components/Cards/FlexWrapper";
import ArticlePreview from "../components/Cards/ArticlePreview";

interface NewsWithSwitchMenu {
  data: {
    [name: string]: {
      data: {
        attributes: {
          Nazev: string;
          Obrazek: StrapiImage;
          Popis: string;
          Url: string;
        };
      }[];
    };
  };
}

export default function NewsWithSwitchMenu({ data }: NewsWithSwitchMenu) {
  const [selected, setSelected] = useState(Object.keys(data)[0]);
  return (
    <Section button="Všechny Novinky" url="/novinky">
      <h1 className={h1_cards_section}>Novinky</h1>
      <SwitchMenuButtonWrapper>
        {Object.keys(data).map((x, i) => (
          <>
            {data[x].data.length > 0 && (
              <SwitchMenuButton
                key={i}
                text={x}
                onClick={() => setSelected(x)}
                selected={x === selected}
              />
            )}
          </>
        ))}
      </SwitchMenuButtonWrapper>
      {Object.keys(data).map((x, i) => (
        <div key={i} className={`${x === selected ? "" : "hidden"}`}>
          <FlexWrapper>
            {data[x].data.map((y, j) => (
              <ArticlePreview
                key={i}
                Nazev={y.attributes.Nazev}
                Url={y.attributes.Url}
                Obrazek={y.attributes.Obrazek}
                Popis={y.attributes.Popis}
              />
            ))}
          </FlexWrapper>
        </div>
      ))}
    </Section>
  );
}
