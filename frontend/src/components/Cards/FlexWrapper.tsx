interface Props {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function FlexWrapper(props: Props) {
  return (
    <div className={`flex flex-wrap justify-center ${props.className || ""}`}>
      {props.children}
    </div>
  );
}
