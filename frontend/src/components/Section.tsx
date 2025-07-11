import { type ReactNode } from "react";

interface Props {
  id?: string;
  buttons?: {
    text: string;
    url: string;
  }[];
  children: ReactNode | ReactNode[];
  noInnerPadding?: boolean;
}

export default function Section({
  id,
  buttons,
  children,
  noInnerPadding,
}: Props) {
  return (
    <section
      className={`max-w-7xl w-full mx-auto ${
        noInnerPadding ? "" : "px-10"
      } mb-24 relative`}
    >
      {id && <div id={id} className="absolute -top-12" />}
      {children}
      {buttons && (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
          {buttons.map(({ text, url }) => (
            <a
              href={url}
              className="block font-bold text-white bg-primary-100 px-4 py-2 rounded-md"
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
