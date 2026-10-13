import React, { useCallback, useEffect, useRef, useState } from "react";
import { BOOKING_COMPLETE_KEY } from "@/lib/bookingTracking";

const GHL_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

function loadEmbedScript(onReady) {
  if (window.iFrameResize) {
    onReady();
    return () => {};
  }

  let script = document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`);
  if (!script) {
    script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }
  script.addEventListener("load", onReady);
  return () => script.removeEventListener("load", onReady);
}

const CALENDAR_URL =
  "https://api.leadconnectorhq.com/widget/booking/fbbAUkB2yKVWqN7BvSKZ";

// prefill: optional { email, first_name, last_name, phone } for the booking form.
export default function GHLCalendar({ className = "", prefill = null }) {
  const iframeRef = useRef(null);
  const redirectingRef = useRef(false);

  const [iframeHeight, setIframeHeight] = useState(900);

  const params = new URLSearchParams();
  Object.entries(prefill || {}).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  const query = params.toString();
  const src = query ? `${CALENDAR_URL}?${query}` : CALENDAR_URL;

  const redirectAfterBooking = useCallback(() => {
    if (redirectingRef.current) return;
    redirectingRef.current = true;
    try {
      window.sessionStorage.setItem(BOOKING_COMPLETE_KEY, "1");
    } catch {
      // Storage can be disabled; the thank-you page should still open.
    }
    // A full navigation lets the Meta Pixel in index.html record this page view.
    window.location.assign("/thank-you");
  }, []);

  useEffect(() => {
    const handleBookingMessage = (event) => {
      if (event.origin !== "https://api.leadconnectorhq.com") return;
      if (event.source !== iframeRef.current?.contentWindow) return;

      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      // HighLevel sends this only once an appointment has been completed.
      if (Array.isArray(data) && data[0] === "msgsndr-booking-complete") {
        redirectAfterBooking();
      }
    };

    window.addEventListener("message", handleBookingMessage);
    return () => window.removeEventListener("message", handleBookingMessage);
  }, [redirectAfterBooking]);

  const handleCalendarLoad = () => {
    // If HighLevel has a custom confirmation URL configured, its redirect can
    // load our page inside the iframe. Move it into the main browser window.
    try {
      const url = new URL(iframeRef.current.contentWindow.location.href);
      if (url.origin === window.location.origin && url.pathname === "/thank-you") {
        redirectAfterBooking();
      }
    } catch {
      // The regular calendar is cross-origin, so its location is inaccessible.
    }
  };

  useEffect(() => {
    let resizer;

    // The calendar iframe only reports its content height once the parent
    // initializes iframe-resizer on it. The embed script does this at load
    // time, but this iframe mounts later, so do it ourselves.
    const cleanup = loadEmbedScript(() => {
      if (!iframeRef.current || !window.iFrameResize) return;
      resizer = window.iFrameResize(
        {
          log: false,
          checkOrigin: false,
          scrolling: false,
          heightCalculationMethod: "offset",
          resizedCallback: ({ height }) => {
            const next = Number(height);
            if (next > 0) setIframeHeight(next + 5);
          },
        },
        iframeRef.current
      );
    });

    return () => {
      cleanup();
      try {
        resizer?.[0]?.iFrameResizer?.close();
      } catch {
        // iframe already removed
      }
    };
  }, []);

  return (
    <div
      className={`ghl-calendar-wrapper overflow-hidden rounded-2xl ${className}`}
      style={{
        width: "100%",
      }}
    >
      <iframe
        ref={iframeRef}
        onLoad={handleCalendarLoad}
        src={src}
        id="fbbAUkB2yKVWqN7BvSKZ_1791636064334"
        scrolling="no"
        allow="payment"
        title="Book a class"
        // On mobile, widen past the wrapper so the widget's own side padding is clipped.
        className="block max-w-none w-[calc(100%+1.5rem)] -mx-3 sm:w-full sm:mx-0"
        style={{
          height: `${iframeHeight}px`,
          border: "none",
          display: "block",

          // Smooth height change
          transition: "height 0.4s ease-in-out",

          overflow: "hidden",
        }}
      />
    </div>
  );
}
