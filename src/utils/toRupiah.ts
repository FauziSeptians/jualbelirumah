export function toRupiah(currency: string) {
  const number = parseFloat(currency);
  return `${number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  })}`;
}
