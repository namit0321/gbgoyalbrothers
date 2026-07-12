import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-5"
        >
          <img
            src="/images/logo.png"
            alt="GB Goyal Brothers"
            className="h-20 w-20 flex-shrink-0 object-contain"
          />

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold leading-none text-blue-800">
              GB GOYAL BROTHERS
            </h1>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              A UNIT OF DISTRIBUTIONS
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            to="/"
            className="text-[15px] font-semibold text-slate-700 transition hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-[15px] font-semibold text-slate-700 transition hover:text-blue-700"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-[15px] font-semibold text-slate-700 transition hover:text-blue-700"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-[15px] font-semibold text-slate-700 transition hover:text-blue-700"
          >
            Contact
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          <a href="tel:+919311226400">
            <Button
              variant="outline"
              className="rounded-xl border-blue-700 px-5 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>

          <Link to="/quote">
            <Button className="rounded-xl bg-blue-700 px-6 hover:bg-blue-800">
              Request Quote
            </Button>
          </Link>

        </div>

        {/* Mobile Menu */}
        <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">
          <Menu className="h-7 w-7 text-slate-700" />
        </button>

      </div>
    </header>
  );
}