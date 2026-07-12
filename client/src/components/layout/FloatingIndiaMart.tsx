import { Store } from "lucide-react";

export default function FloatingIndiaMart() {
  return (
    <a
      href="https://www.indiamart.com/goyalbrothers-225358488/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[5.5rem] right-3 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 md:bottom-24 md:right-6 md:gap-3 md:px-5 md:py-3 md:text-base"
    >
      <Store className="h-4 w-4 md:h-5 md:w-5" />
      <span className="font-semibold">IndiaMART</span>
    </a>
  );
}