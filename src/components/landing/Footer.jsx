import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";

const LOGO = "/Al-bayan-logo-white-text.png";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-vellum/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-28 sm:pb-14">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <div>
            <a href="/" aria-label="Al Bayan Academy home" className="block h-12 w-48 rounded-lg overflow-hidden">
              <Image src={LOGO} alt="Al Bayan Academy" className="h-full w-full" fittingType="fit" />
            </a>
            <p className="mt-4 text-sm text-vellum/60 max-w-xs">
              Al Bayan Learning Centre — bringing qualified, one-on-one Quran teaching to families worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-vellum">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/#how-it-works" className="hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link to="/#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/#reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link to="/#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><a href="/booking" className="hover:text-gold transition-colors">Book Free Trial</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-vellum">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:info@albayanlearning.com" className="hover:text-gold transition-colors">info@albayanlearning.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+971507862526" className="hover:text-gold transition-colors">+971 50 786 2526</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="https://www.google.com/maps/search/?api=1&query=SRTIP%2C+Wing+C+-+University+City+-+Sharjah+-+United+Arab+Emirates" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">SRTIP, Wing C - University City - Sharjah - United Arab Emirates</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-12 pt-6 border-t border-vellum/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-vellum/50">
          <p>© {new Date().getFullYear()} Al Bayan Learning Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
