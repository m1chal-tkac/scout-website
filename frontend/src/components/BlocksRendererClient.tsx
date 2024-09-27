import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { h2, h3, h4, h5 } from "./typography";

export default function BlockRendererClient({
  Text,
}: {
  readonly Text: BlocksContent;
}) {
  if (!Text) return null;
  return (
    <BlocksRenderer
      content={Text}
      blocks={{
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className={h2}>{children}</h1>;
            case 2:
              return <h2 className={h3}>{children}</h2>;
            case 3:
              return <h3 className={h4}>{children}</h3>;
            default:
              return <h5 className={h5}>{children}</h5>;
          }
        },
        paragraph: ({ children }) => (
          <p className="mb-2 leading-8 whitespace-pre-wrap break-words">
            {children}
          </p>
        ),
        list: ({ format, children }) =>
          format === "ordered" ? (
            <ol className="-mt-2 mb-4 list-decimal pl-6">{children}</ol>
          ) : (
            <ul className="-mt-2 mb-4 list-disc pl-6">{children}</ul>
          ),
        "list-item": ({ children }) => (
          <li>
            <span className="relative left-2">{children}</span>
          </li>
        ),
        quote: ({ children }) => (
          <div className="bg-gray-200 rounded-md px-3 py-4 mb-4 border-l-4 border-gray-300">
            {children}
          </div>
        ),
        link: ({ children, url }) => (
          <a href={url} target="_blank" className="text-primary-200 underline">
            {children}
          </a>
        ),
        image: ({ image }) => (
          <img alt={image.alternativeText} src={image.url} className="my-6" />
        ),
      }}
    />
  );
}
