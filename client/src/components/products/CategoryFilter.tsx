const categories = [
  "All",
  "Buckets & Mugs",
  "Dustbins",
  "Packing Containers",
  "Storage Containers",
  "Lunch Boxes",

  "Fridge Bottles",
  "School Bottles",
  "Steel Bottles & Flasks",

  "Kitchenware",
  "Shopping & Laundry Baskets",
  "Utility Baskets",
  "Stools & Patla",
  "Drawers & Racks",
  "Bathroom Accessories",
  "Cleaning",
  "Masala & Dry Fruit Boxes",
  "Multi Utility Stands",
  "Borosilicate Glassware",
  "Cutlery & Kitchen Tools",
  "Kids Series",
  "Drums",
  "Planters",
  "Ice Boxes",
  "Crates",
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
      <div className="flex w-max gap-3 pb-2 md:w-full md:flex-wrap">

        {categories.map((category) => {
          const active = selected === category;

          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`group flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-blue-700 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                  : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition-all ${
                  active
                    ? "bg-white"
                    : "bg-slate-300 group-hover:bg-blue-600"
                }`}
              />

              {category}
            </button>
          );
        })}

      </div>
    </div>
  );
}