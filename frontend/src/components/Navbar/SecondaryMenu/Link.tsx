interface Link {
  link: string;
  image: {
    url: string;
    alt: string;
  };
}

export default function Link({ link, image }: Link) {
  return (
    <li className="mr-4 last:mx-0">
      <a href={link} target="_blank">
        <img className="w-5 h-5" src={image.url} alt={image.alt} />
      </a>
    </li>
  );
}
