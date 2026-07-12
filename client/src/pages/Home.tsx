import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Industries from "../components/home/Industries";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-blue-700">
              A UNIT OF DISTRIBUTIONS
            </p>

            <h1 className="text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
              GB GOYAL BROTHERS
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              Your One-Stop Destination for Household, Storage, Kitchen &
              Utility Products.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Houseware • Kitchenware • Storage Solutions • Dustbins • Ice Boxes
              • Containers • Cleaning Products
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/products">
                <Button className="bg-blue-700 px-8 hover:bg-blue-800">
                  Explore Products
                </Button>
              </Link>

              <Link to="/quote">
                <Button
                  variant="outline"
                  className="border-blue-700 px-8 text-blue-700 hover:bg-blue-700 hover:text-white"
                >
                  Request Quote
                </Button>
              </Link>

            </div>
          </div>

          {/* Right Side */}
          <div className="hidden justify-center lg:flex">
            <div className="flex h-[480px] w-[480px] items-center justify-center rounded-3xl bg-white p-10 shadow-2xl">
              <img
                src="/images/logo.png"
                alt="GB Goyal Brothers"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Homepage Sections */}
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Industries />
      <CTA />
    </MainLayout>
  );
}