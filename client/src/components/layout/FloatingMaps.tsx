import { MapPin } from "lucide-react";

export default function FloatingMaps() {
  return (
    <a
      href="https://www.google.com/maps?daddr=28.612867,77.047516"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-36 right-3 z-50 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-700 md:bottom-40 md:right-6 md:gap-3 md:px-5 md:py-3 md:text-base"
    >
      <MapPin className="h-4 w-4 md:h-5 md:w-5" />
      <span className="font-semibold">Directions</span>
    </a>
  );
}