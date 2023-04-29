export default function PrimaryMenu(props) {
  return (
    <ul className="flex lg:justify-between lg:flex-row flex-col lg:my-8 text-xl">
      {props.children}
    </ul>
  );
}

import PrimaryMenuLink, {
  MenuChildrenWrapper as PrimaryMenuChildrenWrapper,
} from "./Link";
import PrimaryMenuMenuLink from "./MenuLink";

export { PrimaryMenuLink, PrimaryMenuMenuLink, PrimaryMenuChildrenWrapper };
