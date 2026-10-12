import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

const LOGO = "/Al-bayan-logo-removebg.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-vellum/85 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center">
          <div className="h-10 sm:h-14 w-40 sm:w-56 overflow-hidden">
            <Image src={LOGO} alt="Al Bayan Learning Centre" className="h-full w-full" fittingType="fit" />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-ink font-medium">
          <Link to="/#how-it-works" className="hover:text-forest transition-colors">How It Works</Link>
          <Link to="/#reviews" className="hover:text-forest transition-colors">Reviews</Link>
          <Link to="/#faq" className="hover:text-forest transition-colors">FAQ</Link>
        </nav>
        {/* Plain <a> (not react-router's Link) so this does a full page reload,
            ensuring the booking calendar always mounts fresh. */}
        <a href="/booking" className="inline-flex items-center rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-vellum shadow-md hover:bg-forest-dark transition-colors">
          Quick Join Now
        </a>
      </div>
    </header>
  );
}