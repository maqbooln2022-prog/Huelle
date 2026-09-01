export type Product = {
  id: string;
  name: string;
  price: number;
  shade: string;
  swatch: string;
};

export const bestSellers: Product[] = [
  {
    id: "sleek-matte-tan",
    name: "Sleek matte case",
    price: 20,
    shade: "Tan",
    swatch: "#C9B79C",
  },
  {
    id: "sleek-matte-slate",
    name: "Sleek matte case",
    price: 20,
    shade: "Slate",
    swatch: "#6E7378",
  },
  {
    id: "sleek-matte-off-white",
    name: "Sleek matte case",
    price: 20,
    shade: "Off-White",
    swatch: "#EDE9E1",
  },
  {
    id: "sleek-matte-black",
    name: "Sleek matte case",
    price: 20,
    shade: "Black",
    swatch: "#1B1B1B",
  },
];
