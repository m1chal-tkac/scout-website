interface SocialMedia {
  SocialniSite: { Typ: "Instagram" | "Facebook"; Odkaz: string }[];
}

export default function SocialMedia({ SocialniSite }: SocialMedia) {
  return (
    <ul className="font-bold flex max-w-[15rem] mx-auto justify-around mt-8">
      {SocialniSite.map((x) => (
        <li>
          <a href={x.Odkaz}>{x.Typ}</a>
        </li>
      ))}
    </ul>
  );
}
