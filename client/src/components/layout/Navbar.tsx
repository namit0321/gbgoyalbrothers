import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:h-24 md:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="GB Goyal Brothers"
            className="h-14 w-14 object-contain md:h-20 md:w-20"
          />

          <div>
            <h1 className="text-lg font-extrabold leading-none text-blue-800 md:text-3xl">
              GB GOYAL BROTHERS
            </h1>

            <p className="mt-1 hidden text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 md:block">
              A UNIT OF DISTRIBUTIONS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link to="/" className="font-semibold text-slate-700 hover:text-blue-700">
            Home
          </Link>

          <Link to="/products" className="font-semibold text-slate-700 hover:text-blue-700">
            Products
          </Link>

          <Link to="/about" className="font-semibold text-slate-700 hover:text-blue-700">
            About
          </Link>

          <Link to="/contact" className="font-semibold text-slate-700 hover:text-blue-700">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919311226400">
            <Button
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>

          <Link to="/quote">
            <Button className="bg-blue-700 text-white hover:bg-blue-800">
              Request Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
           <button
  onClick={() => setMenuOpen(true)}
  className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
>
  <Menu className="h-7 w-7 text-slate-700" />
</button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="mb-6 text-2xl font-bold text-blue-700">
              GB GOYAL BROTHERS
            </SheetTitle>

            <div className="flex flex-col gap-5">

              <Link to="/" className="text-lg font-semibold">
                Home
              </Link>

              <Link to="/products" className="text-lg font-semibold">
                Products
              </Link>

              <Link to="/about" className="text-lg font-semibold">
                About
              </Link>

              <Link to="/contact" className="text-lg font-semibold">
                Contact
              </Link>

              <hr />

              <a href="tel:+919311226400">
                <Button
                  variant="outline"
                  className="w-full border-blue-700 text-blue-700"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

              <Link to="/quote">
                <Button className="w-full bg-blue-700 text-white">
                  Request Quote
                </Button>
              </Link>

            </div>
          </SheetContent>
        </Sheet>

      </div>
      {menuOpen && (
  <div className="fixed inset-0 z-[100] lg:hidden">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setMenuOpen(false)}
    />

    {/* Drawer */}
    <div className="absolute right-0 top-0 h-full w-72 border-l border-slate-200 bg-[#ffffff] shadow-2xl">

      <div className="flex items-center justify-between border-b p-5">
        <h2 className="text-xl font-bold text-blue-700">
          GB GOYAL BROTHERS
        </h2>

        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl"
        >
          ×
        </button>
      </div>

      <div className="flex flex-col p-6">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="border-b py-4 text-lg font-semibold"
        >
          Home
        </Link>

        <Link
          to="/products"
          onClick={() => setMenuOpen(false)}
          className="border-b py-4 text-lg font-semibold"
        >
          Products
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="border-b py-4 text-lg font-semibold"
        >
          About
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="border-b py-4 text-lg font-semibold"
        >
          Contact
        </Link>

        <a href="tel:+919311226400" className="mt-8">
          <Button
            variant="outline"
            className="w-full border-blue-700 text-blue-700"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </a>

        <Link
          to="/quote"
          onClick={() => setMenuOpen(false)}
          className="mt-4"
        >
          <Button className="w-full bg-blue-700 text-white">
            Request Quote
          </Button>
        </Link>

      </div>
    </div>
  </div>
)}
    </header>
  );
}