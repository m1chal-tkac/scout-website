interface Unit {
  name: string;
  url: string;
  key: any;
}

export default function Unit({ name, url }: Unit) {
  return (
    <li className="mb-2">
      <a href={"/" + url}>{name}</a>
    </li>
  );
}
