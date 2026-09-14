import React, { useState } from "react";
import { Loader2 } from "lucide-react";

// TODO: point this at your third-party form/checkout endpoint (e.g. Formspree, Zapier, your own API).
const SUBMIT_ENDPOINT = "";

export default function BookingForm({ ctaLabel = "Continue to Checkout · $10" }) {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", teacherGender: "any", course: "Quran with Tajweed" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!SUBMIT_ENDPOINT) {
      setError("Booking submission isn't connected yet. Set SUBMIT_ENDPOINT in BookingForm.jsx.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Could not submit booking. Please try again.");
      window.location.href = "/thank-you";
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const inputCls = "w-full rounded-lg border border-border bg-card px-4 py-3 text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">Full Name</label>
        <input name="name" value={form.name} onChange={handleChange} required className={inputCls} placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">WhatsApp Number</label>
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required className={inputCls} placeholder="+971 50 000 0000" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">Choose Your Course</label>
        <select name="course" value={form.course} onChange={handleChange} className={inputCls}>
          <option>Quran with Tajweed</option>
          <option>Quran Memorisation</option>
          <option>Quran Translation / Tafseer</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">Preferred Teacher</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: "male", label: "Male" },
            { v: "female", label: "Female" },
            { v: "any", label: "No preference" }
          ].map((opt) => (
            <button
              type="button"
              key={opt.v}
              onClick={() => setForm({ ...form, teacherGender: opt.v })}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${form.teacherGender === opt.v ? "border-forest bg-forest text-vellum" : "border-border bg-card text-ink hover:border-forest/50"}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 text-lg font-semibold text-ink shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Preparing secure checkout…</>
        ) : (
          ctaLabel
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        You'll complete payment securely on the next screen. 100% refundable if you're not satisfied.
      </p>
    </form>
  );
}