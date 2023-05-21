import { useEffect, useState } from "react";
import Section from "../components/Section";
import SwitchMenuButton, {
  SwitchMenuButtonWrapper,
} from "../components/SwitchMenu/Button";
import { h1_center } from "../components/typography";
import { StrapiImage, StrapiImages } from "../customTypes";
import FlexWrapper from "../components/Cards/FlexWrapper";
import Contact from "../components/Cards/Contact";

interface ContactsWithTwoSubmenus {
  data: {
    [oddil: string]: {
      [druzina: string]: {
        data: {
          Funkce: string;
          vedouci: {
            data: {
              attributes: {
                Jmeno: string;
                Telefon: string;
                Email: string;
                Fotka: StrapiImage;
              };
            };
          };
        }[];
      };
    };
  };
}

export default function ContactsWithTwoSubmenus({
  data,
}: ContactsWithTwoSubmenus) {
  const [menu, setMenu] = useState(Object.keys(data)[0]);
  const [subMenu, setSubMenu] = useState(
    Object.keys(data[Object.keys(data)[0]])[0]
  );

  if (
    Object.keys(data).reduce(
      (acu, cur) =>
        acu +
        Object.keys(data[cur]).reduce(
          (_acu, _cur) => _acu + data[cur][_cur].data.length,
          0
        ),
      0
    ) === 0
  )
    return null;

  return (
    <Section>
      <h1 className={h1_center}>Kontakty na rádce</h1>
      <SwitchMenuButtonWrapper>
        {Object.keys(data).map((x, i) => (
          <SwitchMenuButton
            key={i}
            text={x}
            onClick={() => {
              setMenu(x);
              setSubMenu(Object.keys(data[x])[0]);
            }}
            selected={x === menu}
          />
        ))}
      </SwitchMenuButtonWrapper>
      <SwitchMenuButtonWrapper bigMarginBottom>
        {Object.keys(data[menu]).map((x, i) => (
          <SwitchMenuButton
            key={i}
            text={x}
            onClick={() => {
              setSubMenu(x);
            }}
            selected={x === subMenu}
          />
        ))}
      </SwitchMenuButtonWrapper>
      {Object.keys(data).map((x, i) => (
        <div key={i}>
          {Object.keys(data[x]).map((y, j) => (
            <div
              key={j}
              className={`${x === menu && y === subMenu ? "" : "hidden"}`}
            >
              <FlexWrapper>
                {data[x][y].data.map((z, k) => (
                  <Contact
                    key={k}
                    Jmeno={z.vedouci.data.attributes.Jmeno}
                    Funkce={z.Funkce}
                    Telefon={z.vedouci.data.attributes.Telefon}
                    Email={z.vedouci.data.attributes.Email}
                    Obrazek={z.vedouci.data.attributes.Fotka}
                  />
                ))}
              </FlexWrapper>
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
}
