export default function Logo() {
  return (
    <div className="flex-1 hidden lg:flex items-center justify-center">
      <img
        loading="lazy"
        className="w-16 h-16 mr-4"
        src="/ikony/logo-bile.svg"
        alt="logo Skautu"
      />
      <h1 className="font-skautbold text-4xl">Skaut</h1>
    </div>
  );
}
