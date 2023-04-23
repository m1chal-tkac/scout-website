export default function SecondaryMenu(props) {
  return (
    <ul className="flex lg:justify-end justify-center items-center mt-6">
      {props.children}
    </ul>
  );
}

import SecondaryMenuLink from "./Link";

export { SecondaryMenuLink };
