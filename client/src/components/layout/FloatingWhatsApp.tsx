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
      aria-label="Chat with GB Goyal Brothers on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-2 rounded-full bg-green-700 px-4 py-3 text-sm font-medium text-white shadow-2xl transition hover:scale-105 hover:bg-green-800 md:gap-3 md:px-5 md:py-4 md:text-base">
        <MessageCircle
          className="h-5 w-5 md:h-6 md:w-6"
          aria-hidden="true"
        />
        <span>WhatsApp</span>
      </div>
    </a>
  );
}