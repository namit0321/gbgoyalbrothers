import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-12 text-white shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>
              <p className="font-semibold uppercase tracking-[0.35em] text-blue-200">
                REQUEST A QUOTE
              </p>

              <h2 className="mt-4 text-5xl font-black leading-tight">
                Need Plastic Products in Bulk?
              </h2>

              <p className="mt-6 text-lg text-blue-100">
                We supply premium household, commercial and industrial plastic
                products to retailers, schools, hospitals, hotels, offices,
                malls and factories across India.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2">
                  ✔ Bulk Orders
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                  ✔ Wholesale Supply
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                  ✔ PAN India Delivery
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">

              {/* Request Quote */}
              <Link to="/quote">
                <Button
                  size="lg"
                  className="w-full bg-white text-blue-800 hover:bg-slate-100"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
              </Link>

              {/* Call Now */}
              <a href="tel:+919311226400">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>

              {/* Email */}
              <a href="mailto:goyalbrothers43@yahoo.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}