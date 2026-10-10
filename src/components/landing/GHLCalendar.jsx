import React, { useEffect, useRef, useState } from "react";

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

  const [iframeHeight, setIframeHeight] = useState(900);

  const params = new URLSearchParams();
  Object.entries(prefill || {}).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  const query = params.toString();
  const src = query ? `${CALENDAR_URL}?${query}` : CALENDAR_URL;

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
