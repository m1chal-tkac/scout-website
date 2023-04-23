export default function Units(props) {
  return (
    <div className="flex-1 md:text-right">
      <strong className="mb-4 block">Oddíly</strong>
      <ul>{props.children}</ul>
    </div>
  );
}

import PrimaryMenuUnit from "./Unit";

export { PrimaryMenuUnit };
