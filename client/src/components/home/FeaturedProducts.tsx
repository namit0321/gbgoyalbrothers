import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 8);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
            FEATURED PRODUCTS
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Featured Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our premium collection of household, kitchenware,
            storage, commercial and utility plastic products from
            India's leading brands.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-6">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {product.brand}
                  </span>

                  <h3 className="mt-4 line-clamp-2 min-h-[64px] text-xl font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-slate-600">
                    {product.description}
                  </p>

                  <Button className="mt-6 w-full bg-blue-700 text-white hover:bg-blue-800 hover:text-white">
                    View Details
                  </Button>

                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <Link to="/products">
            <Button
              variant="outline"
              className="border-blue-700 px-8 py-6 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              View All Products
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}