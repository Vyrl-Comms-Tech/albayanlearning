import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, CalendarCheck2, Check, Mail, Sparkles } from "lucide-react";
import Footer from "@/components/landing/Footer";
import { BOOKING_COMPLETE_KEY } from "@/lib/bookingTracking";

const nextSteps = [
  {
    icon: Mail,
    title: "Check your inbox",
    description: "Look for your booking confirmation and class details in your email.",
  },
  {
    icon: BookOpen,
    title: "Get ready to learn",
    description: "Have a quiet space and a device with an internet connection ready for your class.",
  },
  {
    icon: CalendarCheck2,
    title: "Join your class",
    description: "Meet your teacher at the scheduled time and start your Quran learning journey.",
  },
];

export default function ThankYou() {
  const navigate = useNavigate();

  const handleBack = () => {
    try {
      const previousPage = new URL(document.referrer);
      if (
        window.history.length > 1 &&
        previousPage.origin === window.location.origin &&
        previousPage.pathname !== "/thank-you"
      ) {
        navigate(-1);
        return;
      }
    } catch {
      // A direct visit has no referrer.
    }
    navigate("/");
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Thank You | Al Bayan Learning Centre";

    // The global pixel records PageView on the full-page redirect. Count a
    // Schedule conversion only after the calendar reported a completed booking.
    try {
      if (window.sessionStorage.getItem(BOOKING_COMPLETE_KEY) === "1") {
        window.sessionStorage.removeItem(BOOKING_COMPLETE_KEY);
        const pixel = /** @type {{ fbq?: (method: string, event: string) => void }} */ (window);
        pixel.fbq?.("track", "Schedule");
      }
    } catch {
      // Pixel blockers and disabled storage must not affect the page.
    }
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-vellum text-ink">
      <header className="border-b border-border bg-vellum">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Al Bayan Learning Centre home" className="block h-11 w-32 shrink-0 overflow-hidden sm:h-14 sm:w-56">
            <img src="/Al-bayan-logo-removebg.png" alt="Al Bayan Learning Centre" className="h-full w-full object-contain" />
          </Link>
          <button type="button" onClick={handleBack} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-forest/20 px-3 py-2 text-xs font-semibold text-forest transition-colors hover:bg-forest/10 sm:gap-2 sm:px-4 sm:text-sm">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
          </button>
        </div>
      </header>

      <main className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-gold/50 bg-forest shadow-lg shadow-forest/20 sm:h-20 sm:w-20">
              <Check className="h-8 w-8 text-vellum sm:h-10 sm:w-10" strokeWidth={2.5} />
            </div>
            <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-forest-dark sm:mt-7 sm:px-4 sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-gold" /> Your next step starts here
            </div>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-forest-dark sm:text-5xl">
              Thank you for scheduling your class!
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Your free trial class with Al Bayan Learning Centre is booked. We look forward to learning with you.
            </p>
          </div>

          <section className="mt-10 overflow-hidden rounded-2xl border border-forest/10 bg-card shadow-xl shadow-forest/5 sm:mt-16 sm:rounded-3xl" aria-labelledby="next-steps-title">
            <div className="bg-forest-dark px-5 py-6 text-vellum sm:px-10 sm:py-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">What happens next</p>
              <h2 id="next-steps-title" className="mt-2 font-heading text-xl font-bold leading-snug sm:text-3xl">
                A simple start to your learning journey
              </h2>
            </div>
            <div className="grid gap-0 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {nextSteps.map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="flex items-start gap-4 px-5 py-6 sm:px-8 md:relative md:block md:py-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest md:h-12 md:w-12">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </span>
                  <div className="min-w-0 md:mt-5">
                    <h3 className="font-heading text-base font-bold text-forest-dark sm:text-lg">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:mt-2">{description}</p>
                  </div>
                  <span className="hidden font-heading text-2xl font-bold text-gold/70 md:absolute md:right-8 md:top-8 md:block">0{index + 1}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer compactMobile />
    </div>
  );
}
