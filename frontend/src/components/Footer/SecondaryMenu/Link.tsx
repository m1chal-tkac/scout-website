interface Link {
  Typ: "Instagram" | "Facebook";
  Odkaz: string;
  key: any;
}

export default function Link({ Typ, Odkaz }: Link) {
  return (
    <li>
      <a href={Odkaz} target="_blank">
        {Typ}
      </a>
    </li>
  );
}
