import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";

const LOGO = "https://media.base44.com/images/public/user_695dfd2a456dcd53282e2719/f11f38df6_image.png";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-vellum/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-28 sm:pb-14">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <div>
            <div className="h-12 w-48 rounded-lg overflow-hidden bg-black ring-1 ring-vellum/10">
              <Image src={LOGO} alt="Al Bayan Learning Centre" className="h-full w-full" fittingType="fit" />
            </div>
            <p className="mt-4 text-sm text-vellum/60 max-w-xs">
              Al Bayan Learning Centre — bringing qualified, one-on-one Quran teaching to families worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-vellum">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-vellum">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@albayanlearning.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +971 00 000 0000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-12 pt-6 border-t border-vellum/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-vellum/50">
          <p>© {new Date().getFullYear()} Al Bayan Learning Centre. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}