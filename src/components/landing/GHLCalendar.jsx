import React, { useEffect, useRef, useState } from "react";

const GHL_EMBED_SCRIPT_SRC =
  "https://api.leadconnectorhq.com/js/form_embed.js";

export default function GHLCalendar({ className = "" }) {
  const iframeRef = useRef(null);

  const [iframeHeight, setIframeHeight] = useState(900);

  useEffect(() => {
    // Load GHL script only once
    if (
      !document.querySelector(
        `script[src="${GHL_EMBED_SCRIPT_SRC}"]`
      )
    ) {
      const script = document.createElement("script");

      script.src = GHL_EMBED_SCRIPT_SRC;
      script.async = true;

      document.body.appendChild(script);
    }

    // Listen for iframe resize messages
    const handleMessage = (event) => {
      if (!event.origin.includes("leadconnectorhq.com")) {
        return;
      }

      let data = event.data;

      // Sometimes iframe messages come as JSON strings
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      console.log("GHL MESSAGE:", data);

      // Try common height properties
      const newHeight =
        data?.height ||
        data?.iframeHeight ||
        data?.contentHeight ||
        data?.data?.height;

      if (newHeight) {
        const parsedHeight = Number(newHeight);

        if (!Number.isNaN(parsedHeight)) {
          setIframeHeight(parsedHeight);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      className={`ghl-calendar-wrapper ${className}`}
      style={{
        width: "100%",
      }}
    >
      <iframe
        ref={iframeRef}
        src="https://api.leadconnectorhq.com/widget/booking/fbbAUkB2yKVWqN7BvSKZ"
        id="fbbAUkB2yKVWqN7BvSKZ_1789567222437"
        scrolling="no"
        allow="payment"
        title="Book a class"
        style={{
          width: "100%",
          height: `${iframeHeight}px`,
          border: "none",
          display: "block",

          // Smooth height change
          transition: "height 0.5s ease",

          // IMPORTANT
          overflow: "hidden",
        }}
      />
    </div>
  );
}