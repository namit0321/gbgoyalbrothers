import { MapPin } from "lucide-react";

export default function FloatingMaps() {
  return (
    <a
      href="https://www.google.com/maps?daddr=28.612867,77.047516"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-6 z-50 flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-700"
    >
      <MapPin className="h-5 w-5" />
      <span className="font-semibold">Directions</span>
    </a>
  );
}