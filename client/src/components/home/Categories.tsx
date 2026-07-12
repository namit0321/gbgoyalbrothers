import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: "🪣",
    title: "Buckets & Mugs",
    description:
      "Premium plastic buckets, mugs and bathroom essentials for household and commercial use.",
  },
  {
    icon: "🗑️",
    title: "Dustbins",
    description:
      "Commercial and household dustbins, pedal bins, swing bins and waste management solutions.",
  },
  {
    icon: "🧳",
    title: "Packing Containers",
    description:
      "Heavy-duty plastic packing containers for storage, logistics and commercial applications.",
  },
  {
    icon: "📦",
    title: "Storage Containers",
    description:
      "Food storage containers, utility boxes and plastic storage solutions for every need.",
  },
  {
    icon: "🍱",
    title: "Lunch Boxes",
    description:
      "Insulated lunch boxes with steel inner and premium food storage solutions.",
  },
  {
  icon: "🥤",
  title: "Fridge Bottles",
  description:
    "Plastic water bottles, fridge bottles and reusable everyday hydration solutions.",
},
{
  icon: "🎒",
  title: "School Bottles",
  description:
    "Kids water bottles, school bottles, sippers and leak-proof hydration bottles.",
},
{
  icon: "🌡️",
  title: "Steel Bottles & Flasks",
  description:
    "Premium stainless steel bottles, insulated bottles, vacuum flasks and thermal drinkware.",
},
  {
    icon: "🍽️",
    title: "Kitchenware",
    description:
      "Casseroles, trays, bowls, jugs, shakers and premium kitchen accessories.",
  },
  {
    icon: "🛒",
    title: "Shopping & Laundry Baskets",
    description:
      "Shopping baskets and laundry baskets for home, retail stores and commercial use.",
  },
  {
    icon: "🧺",
    title: "Utility Baskets",
    description:
      "Multi-purpose plastic baskets for storage, organization and daily household use.",
  },
  {
    icon: "🪑",
    title: "Stools & Patla",
    description:
      "Plastic stools and bathroom patlas designed for strength and durability.",
  },
  {
    icon: "🗄️",
    title: "Drawers & Racks",
    description:
      "Plastic drawers, storage racks and organizers for home and office.",
  },
  {
    icon: "🛁",
    title: "Bathroom Accessories",
    description:
      "Soap cases, soap dispensers and essential bathroom utility products.",
  },
  {
  icon: "🧹",
  title: "Cleaning",
  description:
    "Cleaning brushes, dustpans, floor cleaning accessories and household cleaning essentials.",
},
  {
    icon: "🌶️",
    title: "Masala & Dry Fruit Boxes",
    description:
      "Masala boxes, dry fruit containers, candy boxes and thread boxes.",
  },
  {
    icon: "🧴",
    title: "Multi Utility Stands",
    description:
      "Multi-purpose stands and organizers for bathrooms, kitchens and homes.",
  },
  {
    icon: "🥣",
    title: "Borosilicate Glassware",
    description:
      "Premium borosilicate glass kitchenware, storage containers, lunch boxes and cookware for modern kitchens.",
  },
{
  icon: "🍴",
  title: "Cutlery & Kitchen Tools",
  description:
    "Premium cutlery, kitchen tools, serving accessories and cooking essentials for everyday use.",
},
{
  icon: "🧸",
  title: "Kids Series",
  description:
    "Kids chairs, baby stools, piggy banks and children's utility products.",
},

{
  icon: "🛢️",
  title: "Drums",
  description:
    "Heavy-duty plastic storage drums with lids for household and commercial use.",
},

{
  icon: "🪴",
  title: "Planters",
  description:
    "Decorative plastic planters and flower pots for homes, offices and gardens.",
},

{
  icon: "🧊",
  title: "Ice Boxes",
  description:
    "Insulated ice boxes and coolers for travel, outdoor activities and commercial applications.",
},
{
  icon: "🗃️",
  title: "Crates",
  description:
    "Commercial plastic crates for dairy, beverages, agriculture, logistics, warehousing and industrial applications.",
},
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
            OUR PRODUCTS
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Product Categories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Discover our extensive range of household, commercial, kitchenware
            and borosilicate glass products designed to meet every requirement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/products?category=${encodeURIComponent(category.title)}`}
              className="group"
            >
              <div className="flex min-h-[420px] flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-700 hover:shadow-2xl">

                {/* Icon */}
                <div className="mb-6 text-6xl">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {category.description}
                </p>

                {/* Button */}
                <Button
                  className="mt-8 w-full bg-blue-700 hover:bg-blue-800"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}