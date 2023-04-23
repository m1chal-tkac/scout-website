import { useState } from "react";
import Logo from "./Logo";
import SecondaryMenu, { SecondaryMenuLink } from "./SecondaryMenu";
import Hamburger from "./Hamburgers";
import PrimaryMenu, { PrimaryMenuLink } from "./PrimaryMenu";
import { PrimaryMenuMenuLink } from "./PrimaryMenu";

interface Navbar {
  Nazev: string;
  SocialniSite: { Typ: "Instagram" | "Facebook"; Odkaz: string }[];
  oddily: {
    Nazev: string;
    Url: string;
    druziny: { Nazev: string; Url: string }[];
  }[];
  fotky: { Nazev: string; Odkaz: string }[];
}

export default function Navbar({ Nazev, SocialniSite, oddily, fotky }: Navbar) {
  const [menu, setMenu] = useState(false);
  const [primaryMenu, setPrimaryMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white sticky top-0 left-0 w-screen z-40">
      <div className="max-w-7xl mx-auto flex px-10">
        <Logo name={Nazev} />
        <Hamburger onClick={() => setMenu((x) => !x)} />
        <div
          className={`lg:ml-auto flex-[3] lg:block lg:static absolute left-0 top-full px-10 lg:pb-0 pb-4 bg-white w-full flex flex-col-reverse ${
            menu ? "" : "hidden"
          }`}
        >
          <SecondaryMenu>
            {SocialniSite.map((x, i) => (
              <SecondaryMenuLink
                key={i}
                image={{
                  alt: x.Typ,
                  url:
                    x.Typ === "Instagram"
                      ? "/ikony/instagram.svg"
                      : "/ikony/facebook.svg",
                }}
                link={x.Odkaz}
              />
            ))}
          </SecondaryMenu>
          <PrimaryMenu>
            <PrimaryMenuLink name="Domů" action="/" />
            <PrimaryMenuLink
              name="Organizace"
              action={{ menu: primaryMenu, setMenu: setPrimaryMenu }}
            >
              {oddily.map((x, i) => (
                <PrimaryMenuMenuLink
                  name={x.Nazev}
                  href={"/" + x.Url}
                  parent
                  key={i}
                >
                  {x.druziny.map((y, j) => (
                    <PrimaryMenuMenuLink
                      name={y.Nazev}
                      href={"/" + x.Url + "/" + y.Url}
                      child
                      key={j}
                    />
                  ))}
                </PrimaryMenuMenuLink>
              ))}
            </PrimaryMenuLink>
            <PrimaryMenuLink name="Novinky" action="/novinky" />
            <PrimaryMenuLink
              name="Fotky"
              action={{ menu: primaryMenu, setMenu: setPrimaryMenu }}
            >
              {fotky.map((x, i) => (
                <PrimaryMenuMenuLink name={x.Nazev} href={x.Odkaz} key={i} />
              ))}
            </PrimaryMenuLink>
            <PrimaryMenuLink name="Kontakty" action="/kontakty" />
          </PrimaryMenu>
        </div>
      </div>
    </nav>
  );
}
