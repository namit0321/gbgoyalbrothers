import {
  Building2,
  School,
  Hospital,
  Factory,
  Hotel,
  ShoppingBag,
  Landmark,
  Warehouse,
} from "lucide-react";

const industries = [
  {
    icon: School,
    title: "Schools & Colleges",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
  },
  {
    icon: Factory,
    title: "Factories",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Malls",
  },
  {
    icon: Hospital,
    title: "Hospitals",
  },
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
  },
  {
    icon: Warehouse,
    title: "Modern Trade ",
  },
  {
    icon: Landmark,
    title: "Government Institutions",
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Trusted Across Every Industry
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We proudly supply premium plastic products to businesses,
            institutions and organizations across India.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}