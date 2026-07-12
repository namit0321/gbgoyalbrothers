import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
            OUR PRODUCT CATALOGUE
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Explore 200+ Premium Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Browse our extensive collection of household products, kitchenware,
            borosilicate glassware, storage solutions and commercial utility
            products from India's leading brands.
          </p>
        </div>

        {/* No Products */}
        {products.length === 0 && (
          <div className="rounded-2xl bg-white py-20 text-center shadow">
            <h3 className="text-3xl font-bold">
              No Products Found
            </h3>

            <p className="mt-3 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}

        {/* Product Grid */}
        {products.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}