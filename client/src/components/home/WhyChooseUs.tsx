import {
  ShieldCheck,
  Truck,
  PackageCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "We supply high-quality plastic products from trusted brands.",
  },
  {
    icon: PackageCheck,
    title: "Wide Product Range",
    description:
      "Houseware, commercial products, industrial plastic solutions and more.",
  },
  {
    icon: Truck,
    title: "Bulk Supply",
    description:
      "Reliable wholesale supply for retailers, institutions and businesses.",
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description:
      "Serving dealers, schools, hospitals, hotels, malls and industries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Why GB Goyal Brothers?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We are committed to providing premium products,
            competitive pricing and dependable service for every customer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}