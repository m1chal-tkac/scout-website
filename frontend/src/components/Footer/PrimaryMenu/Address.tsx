interface Address {
  name: string;
  address: string;
  unitNumber: string;
  ICO: string;
  bankAccountNumber: string;
}

export default function Address({
  name,
  address,
  unitNumber,
  ICO,
  bankAccountNumber,
}: Address) {
  return (
    <address className="flex-1 not-italic mb-6 md:mb-0">
      <strong className="mb-4 block">{name}</strong>
      <p className="mb-2">sídlo: {address}</p>
      <p className="mb-2">číslo střediska: {unitNumber}</p>
      <p className="mb-2">ičo: {ICO}</p>
      <p className="mb-2">číslo účtu: {bankAccountNumber}</p>
    </address>
  );
}
