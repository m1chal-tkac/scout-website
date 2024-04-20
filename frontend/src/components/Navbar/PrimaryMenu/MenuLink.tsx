import { Children, type ReactNode } from "react";

interface MenuLink {
  href: string;
  name: string;
  parent?: boolean;
  child?: boolean;
  children?: ReactNode | ReactNode[];
  key: any;
}

export default function MenuLink({
  href,
  name,
  parent,
  child,
  children,
}: MenuLink) {
  return (
    <li className={`${child ? "" : "mr-20"} mb-2`}>
      <a
        href={href}
        className={`${parent ? "font-bold text-2xl" : ""}`}
        target={href.startsWith("http") ? "_blank" : "_self"}
      >
        {name}
      </a>
      {parent && <ul className="mt-2">{children}</ul>}
    </li>
  );
}
