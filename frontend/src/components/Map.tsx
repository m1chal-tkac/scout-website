import { useEffect, useState } from "react";

interface Map {
  code: string;
}

enum Cookies {
  loading,
  true,
  false,
}

export default function Map({ code }: Map) {
  const [cookies, setCookies] = useState(Cookies.loading);

  useEffect(() => {
    const cookiesValue = localStorage.getItem("MapyCzCookies");
    setTimeout(() => {
      if (cookiesValue === "1") setCookies(Cookies.true);
      else setCookies(Cookies.false);
    }, 1000);
  }, []);

  return (
    <>
      {cookies === Cookies.loading ? (
        <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center">
          <p className="mb-4">Načítání...</p>
        </div>
      ) : cookies === Cookies.true ? (
        <iframe
          src={`https://frame.mapy.cz/s/${code}`}
          className="border-0"
          width="100%"
          height="100%"
        />
      ) : (
        <div className="bg-gray-300 w-full h-full flex flex-col justify-center items-center">
          <p className="mb-4">Mapy.cz používá Cookies.</p>
          <button
            className="font-bold text-white bg-primary-100 px-4 py-2 rounded-md"
            onClick={() => {
              setCookies(Cookies.true);
              localStorage.setItem("MapyCzCookies", "1");
            }}
          >
            Povolit
          </button>
        </div>
      )}
    </>
  );
}
