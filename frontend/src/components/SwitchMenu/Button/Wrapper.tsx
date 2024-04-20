import { type ReactNode } from "react";

interface SwitchMenu {
  children: ReactNode | ReactNode[];
  bigMarginBottom?: boolean;
}

export default function SwitchMenu({ children, bigMarginBottom }: SwitchMenu) {
  return (
    <div
      className={`mx-auto flex max-w-full w-max overflow-x-auto ${
        bigMarginBottom ? "mb-8" : "mb-4"
      }`}
    >
      {children}
    </div>
  );
}
