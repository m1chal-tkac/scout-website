interface NavbarLogo {
  name: string;
}

export default function NavbarLogo({ name }: NavbarLogo) {
  return (
    <div className="flex-[2] flex items-center">
      <a href="/" className="flex items-center py-4 min-w-0">
        <img
          className="sm:w-16 sm:h-16 w-8 h-8 mr-4"
          src="/ikony/logo.svg"
          alt="logo Skautu"
        />
        <div className="hidden sm:block">
          <h1 className="font-skautbold text-4xl text-primary-300">Skaut</h1>
          <h2 className="text-base font-bold text-primary-300">
            středisko {name}
          </h2>
        </div>
      </a>
    </div>
  );
}
