import { type ReactNode } from "react";

interface Props {
  button?: string;
  url?: string;
  children: ReactNode | ReactNode[];
  noInnerPadding?: boolean;
}

export default function Section({
  button,
  url,
  children,
  noInnerPadding,
}: Props) {
  return (
    <section
      className={`max-w-7xl w-full mx-auto ${
        noInnerPadding ? "" : "px-10"
      } mb-24`}
    >
      {children}
      {button && (
        <a
          href={url}
          className="block mx-auto font-bold text-white bg-primary-100 px-4 py-2 rounded-md w-max"
        >
          {button}
        </a>
      )}
    </section>
  );
}
