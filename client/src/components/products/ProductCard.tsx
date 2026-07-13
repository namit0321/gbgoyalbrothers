import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]">

        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
            Featured
          </div>
        )}

        {/* Product Image */}
        <div className="overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          <img
  src={product.image}
  alt={product.name}
  loading="lazy"
  decoding="async"
  draggable={false}
  width={400}
  height={400}
  className="h-80 w-full object-contain p-6 transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
/>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Brand */}
          <span className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
            {product.brand}
          </span>

          {/* Product Name */}
          <h3 className="mt-4 min-h-[64px] line-clamp-2 text-2xl font-black text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
            {product.name}
          </h3>

          {/* Category */}
          <div className="mt-3">
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {product.category}
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 min-h-[52px] line-clamp-2 text-[15px] leading-7 text-slate-600">
            {product.description}
          </p>

          {/* Button */}
          <Button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-blue-800">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

      </div>
    </Link>
  );
}