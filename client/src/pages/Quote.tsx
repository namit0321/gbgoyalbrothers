import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";

export default function Quote() {
  const [searchParams] = useSearchParams();

  const productName = searchParams.get("product") || "";

  const [form, setForm] = useState({
    company: "",
    person: "",
    mobile: "",
    email: "",
    product: productName,
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const whatsappMessage = encodeURIComponent(
`Hello GB Goyal Brothers,

*New Quote Request*

🏢 Company: ${form.company}

👤 Contact Person: ${form.person}

📞 Mobile: ${form.mobile}

📧 Email: ${form.email}

📦 Product Required: ${form.product}

🔢 Quantity: ${form.quantity}

📝 Message:
${form.message}`
    );

    window.open(
      `https://wa.me/919311226400?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black">
            Request a Quote
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Looking for bulk products? Fill out the form below and we'll get
            back to you with our best quotation.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Company Name
                </label>

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="ABC Pvt Ltd"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Contact Person
                </label>

                <input
                  name="person"
                  value={form.person}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
                />
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Mobile Number
                </label>

                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="company@email.com"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Product Required
              </label>

              <input
                name="product"
                value={form.product}
                onChange={handleChange}
                type="text"
                placeholder="Select Product"
                className="w-full rounded-xl border bg-slate-50 p-4 outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Quantity Required
              </label>

              <input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                type="text"
                placeholder="100 Pieces"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Please share your best quotation..."
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-700"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-700 py-6 text-lg hover:bg-blue-800"
            >
              Submit Quote Request
            </Button>

          </form>

        </div>
      </section>
    </MainLayout>
  );
}