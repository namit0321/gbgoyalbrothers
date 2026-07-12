import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "919311226400";

  const message = encodeURIComponent(
    `Hello GB Goyal Brothers,

I am interested in your products.

Please share your catalogue and price list.

Thank you.`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-green-700">
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold">
          WhatsApp
        </span>
      </div>
    </a>
  );
}