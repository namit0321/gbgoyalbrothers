import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductGrid from "../components/products/ProductGrid";
import ProductSearch from "../components/products/ProductSearch";
import CategoryFilter from "../components/products/CategoryFilter";
import { products } from "../data/products";
import BrandFilter from "../components/products/BrandFilter";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Products() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [openFilter, setOpenFilter] = useState<"categories" | "brands" | null>(null);

  useEffect(() => {
    const selectedCategory = searchParams.get("category") || "All";
    setCategory(selectedCategory);
  }, [searchParams]);

  // Filter Products
 // Filter Products
const filteredProducts = useMemo(() => {
  return products.filter((product) => {
   const matchesSearch =
  product.name.toLowerCase().includes(search.toLowerCase()) ||
  product.brand.toLowerCase().includes(search.toLowerCase()) ||
  product.category.toLowerCase().includes(search.toLowerCase()) ||
  product.description.toLowerCase().includes(search.toLowerCase());
  
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesBrand =
      brand === "All" || product.brand === brand;

    return matchesSearch && matchesCategory && matchesBrand;
  });
}, [search, category, brand]);

  // Stats
  const totalProducts = filteredProducts.length;

  const totalCategories = [
    ...new Set(filteredProducts.map((product) => product.category)),
  ].length;

  const totalBrands = [
    ...new Set(filteredProducts.map((product) => product.brand)),
  ].length;

  // Dynamic Hero
  const pageTitle =
    category === "All"
      ? `Explore ${totalProducts}+ Premium Products`
      : `Explore ${category}`;

  const pageDescription =
    category === "All"
      ? "Browse our complete collection of premium household products, kitchenware, borosilicate glassware, storage solutions, commercial dustbins and utility products from India's leading brands."
      : `Browse our premium collection of ${category.toLowerCase()} from India's leading brands.`;

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-16 md:py-20 text-white">
<div className="mx-auto max-w-7xl px-6 text-center">
         <p className="font-semibold uppercase tracking-[0.35em] text-blue-200">
            PRODUCT CATALOGUE
          </p>

         <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            {pageTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-blue-100">
            {pageDescription}
          </p>

         <div className="mt-12 flex flex-wrap justify-center gap-6">

            <div className="rounded-3xl border border-white/20 bg-white/10 px-8 py-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/15">
              <p className="text-3xl font-black">
                {totalProducts}
              </p>
              <p className="text-blue-100">
                {category === "All" ? "Products" : "Products Found"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <p className="text-3xl font-black">
                {totalCategories}
              </p>
              <p className="text-blue-100">
                Categories
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <p className="text-3xl font-black">
                {totalBrands}
              </p>
              <p className="text-blue-100">
                Brands
              </p>
            </div>

          </div>

        </div>
      </section>

     {/* Search + Filters */}
<section className="border-b border-slate-200 bg-white py-10">
    <div className="mx-auto max-w-7xl px-6">

    <div className="space-y-8">

      {/* Search */}
      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      {/* Categories */}
    {/* Categories */}

<div className="rounded-2xl border border-slate-200">

  <button
    onClick={() =>
  setOpenFilter(
    openFilter === "categories" ? null : "categories"
  )
}
    className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50"
  >
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
        Categories
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Browse by product category
      </p>
    </div>

   {openFilter === "categories" ? (
      <ChevronUp className="h-5 w-5 text-slate-500" />
    ) : (
      <ChevronDown className="h-5 w-5 text-slate-500" />
    )}
  </button>

   {openFilter === "categories" && (
    <div className="border-t border-slate-200 p-5">
      <CategoryFilter
        selected={category}
        onSelect={(value) => {
          setCategory(value);
          setBrand("All");
        }}
      />
    </div>
  )}

</div>
      {/* Brands */}
     {/* Brands */}

<div className="rounded-2xl border border-slate-200">

  <button
    onClick={() =>
  setOpenFilter(
    openFilter === "brands" ? null : "brands"
  )
}
    className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50"
  >
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
        Brands
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Browse by manufacturer
      </p>
    </div>

   {openFilter === "brands" ? (
      <ChevronUp className="h-5 w-5 text-slate-500" />
    ) : (
      <ChevronDown className="h-5 w-5 text-slate-500" />
    )}
  </button>

   {openFilter === "brands" && (
    <div className="border-t border-slate-200 p-5">
      <BrandFilter
        selected={brand}
        onSelect={setBrand}
      />
    </div>
  )}

</div>

      {/* Product Count */}
     

    </div>

  </div>
</section>

      {/* Products */}
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <ProductGrid
            products={filteredProducts}
          />

        </div>
      </section>

    </MainLayout>
  );
}