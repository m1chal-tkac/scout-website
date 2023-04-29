import { ReactNode } from "react";

interface Link {
  action: string | { setMenu: (name: string | null) => void; menu?: string };
  name: string;
  children?: ReactNode | ReactNode[];
}

export default function Link({ action, name, children }: Link) {
  if (typeof action === "string")
    return (
      <li className="mb-1">
        <a href={action}>{name}</a>
      </li>
    );
  else
    return (
      <li className="mb-1">
        <button
          onClick={() => action.setMenu(action.menu === name ? null : name)}
        >
          {name}
        </button>
        <ul
          id="menu-fotky"
          className={`lg:absolute left-0 top-full bg-white w-full lg:mt-0 mt-2 ${
            action.menu === name ? "" : "hidden"
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap px-10 mt-2 lg:pb-8 lg:max-h-96 max-h-40 content-start overflow-y-auto">
            {children}
          </div>
        </ul>
      </li>
    );
}
