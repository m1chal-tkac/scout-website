import { useEffect, useState } from "react";
import type { StrapiImages } from "../customTypes";

interface Props {
  Slogan: string;
  Obrazky: StrapiImages;
}

export default function Hero({ Slogan, Obrazky }: Props) {
  const [cur, setCur] = useState(-1);
  const [shuffledImages, setShuffledImages] = useState(Obrazky.data);

  useEffect(() => {
    const shuffled = [...Obrazky.data].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    setCur(0);
    const interval = setInterval(() => {
      setCur((prev) => (prev + 1) % shuffled.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full w-full relative mb-24">
      <div className="max-w-[100vw] w-[96rem] absolute left-1/2 -translate-x-1/2 h-full md:px-10">
        {shuffledImages.map((img, i) => (
          <div
            className={`absolute w-full h-full top-0 left-0 transition-opacity duration-[2000ms] ${
              i === cur ? "opacity-100" : "opacity-0"
            }`}
            key={i}
            style={{
              background: `center / cover no-repeat url("${
                import.meta.env.PUBLIC_STRAPI + img.attributes.url
              }")`,
            }}
          />
        ))}
        <div className="w-full h-full bg-primary-300 opacity-70 absolute top-0 left-0"></div>
      </div>
      <h1 className="font-skautbold lg:text-6xl md:text-5xl text-4xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-full">
        {Slogan}
      </h1>
      <div className="w-max flex items-center absolute left-1/2 bottom-8 -translate-x-1/2">
        <img
          src="/ikony/sipka-dolu.svg"
          alt="šipka dolů"
          className="mr-4 h-8 w-8"
        />
        <p className="font-bold text-white text-lg">Posuňtě dolů</p>
      </div>
    </div>
  );
}
