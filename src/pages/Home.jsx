import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import OfferBox from "@/components/landing/OfferBox";
import WhyNow from "@/components/landing/WhyNow";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
// import VideoTestimonials from "@/components/landing/VideoTestimonials";
import Gallery from "@/components/landing/Gallery";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import BookingFormSection from "@/components/landing/BookingFormSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-vellum">
      <div className="fixed left-0 top-0 bottom-0 hidden lg:block w-px gold-thread z-40" />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <OfferBox />
        <WhyNow />
        <HowItWorks />
        <SocialProof />
        {/* <VideoTestimonials /> */}
        <Gallery />
        <FAQ />
        <FinalCTA />
        <BookingFormSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}