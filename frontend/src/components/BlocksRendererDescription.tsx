import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { h1, h2, h3, h4, h5 } from "./typography";
import Section from "./Section";

export default function BlockRendererDescription({
  Text,
  hideButton,
}: {
  readonly Text: BlocksContent;
  hideButton?: boolean;
}) {
  if (!Text) return null;
  return (
    <Section
      buttons={
        !hideButton && [{ text: "Rozpis schůzek", url: "/rozpis-schuzek" }]
      }
    >
      <div className="max-w-xl w-full mx-auto flex flex-col items-center mb-8">
        <BlocksRenderer
          content={Text}
          blocks={{
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <h1 className={h1}>{children}</h1>;
                case 2:
                  return <h2 className={h2}>{children}</h2>;
                case 3:
                  return <h3 className={h3}>{children}</h3>;
                case 4:
                  return <h4 className={h4}>{children}</h4>;
                default:
                  return <h5 className={h5}>{children}</h5>;
              }
            },
            paragraph: ({ children }) => (
              <p className="mb-4 text-center last:mb-0 leading-8 whitespace-pre-wrap break-words">
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
              <a
                href={url}
                target={url.startsWith("http") ? "_blank" : "_self"}
                className="text-primary-200 underline"
              >
                {children}
              </a>
            ),
            image: ({ image }) => (
              <img
                alt={image.alternativeText}
                src={image.url}
                className="my-6"
              />
            ),
          }}
        />
      </div>
    </Section>
  );
}
