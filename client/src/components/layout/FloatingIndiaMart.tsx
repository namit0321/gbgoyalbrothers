import { Store } from "lucide-react";

export default function FloatingIndiaMart() {
  return (
    <a
      href="https://www.indiamart.com/goyalbrothers-225358488/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700"
    >
      <Store className="h-5 w-5" />
      <span className="font-semibold">IndiaMART</span>
    </a>
  );
}