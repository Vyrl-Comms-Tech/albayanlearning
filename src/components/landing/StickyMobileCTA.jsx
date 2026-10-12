import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

const LOGO = "/Al-bayan-logo-removebg.png";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sm:hidden fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-vellum/85 backdrop-blur-lg border-t border-border shadow-2xl">
        <div className="h-9 w-32 rounded-md overflow-hidden shrink-0">
          <Image src={LOGO} alt="Al Bayan" className="h-full w-full" fittingType="fit" />
        </div>
        <Link to="/booking" className="text-center rounded-lg bg-gold px-3 py-2 text-xs font-semibold text-ink shadow-md">
          Book My Free Trial Class
        </Link>
      </div>
    </div>
  );
}