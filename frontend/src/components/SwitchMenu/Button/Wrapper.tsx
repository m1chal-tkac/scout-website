export default function SwitchMenu(props) {
  return (
    <div className="mx-auto flex max-w-full w-max overflow-x-auto mb-4">
      {props.children}
    </div>
  );
}
