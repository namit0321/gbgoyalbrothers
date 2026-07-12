import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, X } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";

export default function ProductDetails() {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <MainLayout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The product you're looking for doesn't exist.
          </p>

          <Link to="/products">
            <Button className="mt-8 bg-blue-700 hover:bg-blue-800">
              Back to Products
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const whatsappMessage = encodeURIComponent(
`Hello GB Goyal Brothers,

I am interested in:

${product.name}

Please share the price, MOQ and availability.

Thank you.`
  );

  const emailSubject = encodeURIComponent(
    `Enquiry for ${product.name}`
  );

  const emailBody = encodeURIComponent(
`Hello GB Goyal Brothers,

I am interested in:

${product.name}

Please share the price, MOQ and availability.

Thank you.`
  );

  return (
    <MainLayout>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          {/* Product Image */}
         <div className="flex items-center justify-center rounded-3xl bg-white p-8 shadow-lg">
          <img
  src={product.image}
  alt={product.name}
  onClick={() => setShowImage(true)}
  className="max-h-[550px] w-auto max-w-full cursor-zoom-in object-contain transition duration-300 hover:scale-105"
/>
          </div>
          {/* Product Details */}
<div>

<nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">

  <Link to="/" className="hover:text-blue-700">
    Home
  </Link>

  <span>/</span>

  <Link to="/products" className="hover:text-blue-700">
    Products
  </Link>

  <span>/</span>

  <Link
    to={`/products?category=${encodeURIComponent(product.category)}`}
    className="hover:text-blue-700"
  >
    {product.category}
  </Link>

  <span>/</span>

  <span className="font-semibold text-slate-800">
    {product.name}
  </span>

</nav>
            <h1 className="mt-6 text-5xl font-black text-slate-900">
              {product.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  <h3 className="text-xl font-bold text-slate-900">
    Product Features
  </h3>

  <div className="mt-5 grid gap-4 md:grid-cols-2">

    <div className="flex items-center gap-3">
      ✅ <span>Premium Quality</span>
    </div>

    <div className="flex items-center gap-3">
      ✅ <span>Durable Construction</span>
    </div>

    <div className="flex items-center gap-3">
      ✅ <span>Easy to Clean</span>
    </div>

    <div className="flex items-center gap-3">
      ✅ <span>Long Lasting</span>
    </div>

    <div className="flex items-center gap-3">
      ✅ <span>Reliable Performance</span>
    </div>

    <div className="flex items-center gap-3">
      ✅ <span>Suitable for Daily Use</span>
    </div>

  </div>

</div>

<div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  <h3 className="text-xl font-bold text-slate-900">
    Ideal For
  </h3>

  <div className="mt-5 flex flex-wrap gap-3">

    <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
      Home
    </span>

    <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
      Kitchen
    </span>

    <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
      Office
    </span>

    <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
      Commercial
    </span>

  </div>

</div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="mt-8 rounded-2xl bg-blue-700 p-6 text-white">

  <h3 className="text-2xl font-black">
    Need Bulk Orders?
  </h3>

  <p className="mt-2 text-blue-100">
    Contact GB Goyal Brothers for wholesale pricing,
    dealership enquiries and bulk purchase requirements.
  </p>

</div>

              {/* Updated Quote Button */}

              <Link
                to={`/quote?product=${encodeURIComponent(
                  product.name
                )}&brand=${encodeURIComponent(
                  product.brand
                )}&category=${encodeURIComponent(
                  product.category
                )}`}
              >
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Request Quote
                </Button>
              </Link>

              <a
                href={`mailto:goyalbrothers43@yahoo.com?subject=${emailSubject}&body=${emailBody}`}
              >
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </a>

              <a href="tel:+919311226400">
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

              <a
                href={`https://wa.me/919311226400?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>

            </div>

          </div>

        </div>
        </section>

      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white p-2 shadow-lg"
          >
            <X className="h-6 w-6" />
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-6 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </MainLayout>
  );
}