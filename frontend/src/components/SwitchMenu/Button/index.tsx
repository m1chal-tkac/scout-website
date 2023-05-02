interface Button {
  onClick: () => void;
  selected: boolean;
  text: string;
}

export default function SwitchMenuButton({ onClick, selected, text }: Button) {
  return (
    <button
      className={`font-bold rounded-full last:mr-0 mr-4 px-2 py-1 border-2 border-primary-100 ${
        selected ? "text-primary-100" : "text-white bg-primary-100"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

import SwitchMenuButtonWrapper from "./Wrapper";
export { SwitchMenuButtonWrapper };
