export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">

        <h2 className="text-2xl font-bold">
          GB GOYAL BROTHERS
        </h2>

        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">
          A Unit of Distributions
        </p>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <p className="text-slate-400">
            © 2026 GB Goyal Brothers. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
  Website Designed &amp; Developed by{" "}
  <a
    href="https://www.linkedin.com/in/namit-goyal-4a05773b9/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-white transition-colors duration-300 hover:text-blue-400"
  >
    Namit Goyal
  </a>
</p>
        </div>

      </div>
    </footer>
  );
}