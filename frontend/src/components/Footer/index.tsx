import Copyright from "./Copyright";
import Address from "./PrimaryMenu/Address";
import Logo from "./PrimaryMenu/Logo";
import Units, { PrimaryMenuUnit } from "./PrimaryMenu/Units";
import SocialMedia from "./SecondaryMenu/SocialMedia";

interface Footer {
  CelyNazev: string;
  Sidlo: string;
  CisloStrediska: string;
  Ico: string;
  CisloUctu: string;
  oddily: {
    Nazev: string;
    Url: string;
  }[];
  SocialniSite: {
    Typ: "Instagram" | "Facebook";
    Odkaz: string;
  }[];
}

export default function Footer({
  CelyNazev,
  Sidlo,
  CisloStrediska,
  Ico,
  CisloUctu,
  oddily,
  SocialniSite,
}: Footer) {
  return (
    <footer className="bg-primary-200 pb-4 pt-16 text-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row">
          <Address
            name={CelyNazev}
            address={Sidlo}
            unitNumber={CisloStrediska}
            ICO={Ico}
            bankAccountNumber={CisloUctu}
          />
          <Logo />
          <Units>
            {oddily.map((x) => (
              <PrimaryMenuUnit url={x.Url} name={x.Nazev} />
            ))}
          </Units>
        </div>
        <SocialMedia SocialniSite={SocialniSite} />
        <hr className="border-white my-4" />
        <Copyright name={CelyNazev} />
      </div>
    </footer>
  );
}
