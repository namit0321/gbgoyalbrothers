import { products } from "@/data/products";

const brands = [
  "All",
  ...new Set(products.map((product) => product.brand)),
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function BrandFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelect(brand)}
          className={`rounded-full px-5 py-2 transition ${
            selected === brand
              ? "bg-blue-700 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}