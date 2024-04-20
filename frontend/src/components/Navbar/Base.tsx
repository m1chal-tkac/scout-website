import { type ReactNode, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburgers";
import PrimaryMenu, { PrimaryMenuLink } from "./PrimaryMenu";

interface Base {
  Nazev: string;
  secondaryMenu: ReactNode | ReactNode[];
  organizace: ReactNode | ReactNode[];
  fotky: ReactNode | ReactNode[];
}

export default function Base({
  Nazev,
  secondaryMenu,
  organizace,
  fotky,
}: Base) {
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
          {secondaryMenu}
          <PrimaryMenu>
            <PrimaryMenuLink name="Domů" action="/" />
            <PrimaryMenuLink
              name="Organizace"
              action={{ menu: primaryMenu, setMenu: setPrimaryMenu }}
            >
              {organizace}
            </PrimaryMenuLink>
            <PrimaryMenuLink name="Novinky" action="/novinky" />
            <PrimaryMenuLink
              name="Fotky"
              action={{ menu: primaryMenu, setMenu: setPrimaryMenu }}
            >
              {fotky}
            </PrimaryMenuLink>
            <PrimaryMenuLink name="Kontakty" action="/kontakty" />
          </PrimaryMenu>
        </div>
      </div>
    </nav>
  );
}
