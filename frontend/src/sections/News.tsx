import { useState } from "react";
import Section from "../components/Section";
import SwitchMenuButton, {
  SwitchMenuButtonWrapper,
} from "../components/SwitchMenu/Button";
import { StrapiImage } from "../customTypes";
import { h1_center } from "../components/typography";
import FlexWrapper from "../components/Cards/FlexWrapper";
import ArticlePreview from "../components/Cards/Article";

interface NewsWithSwitchMenu {
  data: {
    [name: string]: {
      data: {
        attributes: {
          Nazev: string;
          Obrazek: StrapiImage;
          Popis: string;
          Url: string;
          publishedAt?: string;
        };
      }[];
    };
  };
  Big?: boolean;
}

export default function News({ data, Big }: NewsWithSwitchMenu) {
  const [selected, setSelected] = useState(Object.keys(data)[0]);
  return (
    <Section
      button={Big ? undefined : "Všechny Novinky"}
      url="/novinky"
      noInnerPadding
    >
      <h1 className={h1_center}>Novinky</h1>
      {Object.keys(data).length > 1 && (
        <SwitchMenuButtonWrapper bigMarginBottom={Big}>
          {Object.keys(data).map((x, i) =>
            data[x].data.length > 0 ? (
              <SwitchMenuButton
                key={i}
                text={x}
                onClick={() => setSelected(x)}
                selected={x === selected}
              />
            ) : null
          )}
        </SwitchMenuButtonWrapper>
      )}
      {Object.keys(data).map((x, i) => (
        <div
          key={i}
          className={`${
            x === selected ? "flex flex-col items-center" : "hidden"
          }`}
        >
          {Big ? (
            <>
              {data[x].data.map((y, j) => (
                <ArticlePreview
                  Big
                  key={i}
                  Nazev={y.attributes.Nazev}
                  Url={y.attributes.Url}
                  Obrazek={y.attributes.Obrazek}
                  Popis={y.attributes.Popis}
                  Published={y.attributes.publishedAt}
                />
              ))}
            </>
          ) : (
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
          )}
        </div>
      ))}
    </Section>
  );
}
