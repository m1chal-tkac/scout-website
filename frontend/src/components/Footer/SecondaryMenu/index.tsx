import { ReactNode } from "react";

interface SocialMedia {
  children: ReactNode | ReactNode[];
}

export default function SocialMedia({ children }: SocialMedia) {
  return (
    <ul className="font-bold flex max-w-[15rem] mx-auto justify-around mt-8">
      {children}
    </ul>
  );
}

import SocialMediaLink from "./Link";
export { SocialMediaLink };
