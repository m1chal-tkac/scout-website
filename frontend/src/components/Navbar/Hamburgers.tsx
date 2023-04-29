interface Hamburger {
  onClick: () => void;
}

export default function Hamburger({ onClick }: Hamburger) {
  return (
    <button onClick={onClick} className="block lg:hidden py-4">
      <img src="/ikony/menu.svg" alt="Menu icon" className="w-8 h-8" />
    </button>
  );
}
