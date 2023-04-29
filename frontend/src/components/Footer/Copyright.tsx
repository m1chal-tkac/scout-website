interface Copyright {
  name: string;
}

export default function Copyright({ name }: Copyright) {
  return (
    <small className="text-base text-center block">
      {new Date().getFullYear()} &copy; {name}
    </small>
  );
}
