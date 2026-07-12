import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import FloatingWhatsApp from "../components/layout/FloatingWhatsApp";
import FloatingIndiaMart from "../components/layout/FloatingIndiaMart";
import FloatingMaps from "../components/layout/FloatingMaps";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Floating Buttons */}
      <FloatingMaps />
      <FloatingIndiaMart />
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}