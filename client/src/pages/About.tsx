import MainLayout from "../layouts/MainLayout";

const brands = [
  "Aristo",
  "Nakoda",
  "Mastercook",
  "Jai Pet",
  "Plasto craft",
  "Lineo",
  "Excel",
  "Ruchi",
  "Ruby",
  "Cielo",
  "Saaj",
];

export default function About() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-6xl font-black tracking-tight">
            About GB Goyal Brothers
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Trusted Distributor of Household & Commercial  Products Since 2011.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
  WHO WE ARE
</p>

<h2 className="mt-3 text-5xl font-black text-slate-900">
  About GB Goyal Brothers
</h2>

<div className="mt-4 h-1 w-24 rounded-full bg-blue-700"></div>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                GB Goyal Brothers is a Delhi-based distributor and wholesale
                supplier of premium household, kitchenware, storage and
                commercial plastic products.

                Since 2011, we have been supplying quality products to
                retailers, wholesalers, institutions, schools, hotels,
                hospitals, offices and businesses across India.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-3xl font-black text-blue-700">
                    2011
                  </h3>

                  <p>Established</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-3xl font-black text-blue-700">
                    GST
                  </h3>

                  <p>Registered Business</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-3xl font-black text-blue-700">
                    11+
                  </h3>

                  <p>Trusted Brands</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-3xl font-black text-blue-700">
                    PAN India
                  </h3>

                  <p>Supply Network</p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-50 p-10">

              <h2 className="text-3xl font-black">
                Company Information
              </h2>

              <div className="mt-8 space-y-5">

                <div>
                  <strong>Firm Name:</strong><br />
                  Goyal Brothers
                </div>

                <div>
                  <strong>Nature of Business:</strong><br />
                  Distributor & Wholesale Supplier
                </div>

                <div>
                  <strong>Established:</strong><br />
                  2011
                </div>

                <div>
                  <strong>Partners:</strong><br />
                  Manish Goyal<br />
                  Pramod Goyal
                </div>

                <div>
                  <strong>GSTIN:</strong><br />
                  07AAJFG9258K1ZS
                </div>

                <div>
                  <strong>Address:</strong><br />
                  Plot No. 45A,<br />
                  Khasra No. 22/7,<br />
                  Matiala Extension,<br />
                  Delhi – 110059
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Brands */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-blue-700">
              OUR BRANDS
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Brands We Deal In
            </h2>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl bg-white p-6 text-center shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  {brand}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>
    </MainLayout>
  );
}