import MainLayout from "../layouts/MainLayout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Have a question or need a quotation? Get in touch with our team.
            We're here to help you with all your plastic product requirements.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-slate-600">
              Contact us for wholesale orders, product enquiries,
              dealership opportunities and bulk quotations.
            </p>

            <div className="mt-10 space-y-8">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-blue-700" />

                <div>
                  <h3 className="font-bold">Phone</h3>

                  <a
                    href="tel:+919311226400"
                    className="text-slate-600 hover:text-blue-700"
                  >
                    +91 9311226400
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-blue-700" />

                <div>
                  <h3 className="font-bold">Email</h3>

                  <a
                    href="mailto:goyalbrothers43@yahoo.com"
                    className="text-slate-600 hover:text-blue-700"
                  >
                    goyalbrothers43@yahoo.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-blue-700" />

                <div>
                  <h3 className="font-bold">Office Address</h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Plot No. 45A,<br />
                    Khasra No. 22/7,<br />
                    Matiala Extension,<br />
                    New Delhi – 110059,<br />
                    Delhi, India
                  </p>
                </div>
              </div>

              {/* GST */}
              <div>
                <h3 className="font-bold text-slate-900">
                  GSTIN
                </h3>

                <p className="mt-2 text-slate-600">
                  07AAJFG9258K1ZS
                </p>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/919311226400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>

              <a href="tel:+919311226400">
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

              <a
                href="https://www.google.com/maps?daddr=28.612867,77.047516"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-black">
              Send us a Message
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />

              <Button className="w-full bg-blue-700 py-6 hover:bg-blue-800">
                Send Message
              </Button>

            </form>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}