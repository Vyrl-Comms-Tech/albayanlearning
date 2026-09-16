import React, { useEffect } from "react";

const GHL_EMBED_SCRIPT_SRC = "https://api.leadconnectorhq.com/js/form_embed.js";

/**
 * Embeds the GoHighLevel (GHL) booking calendar widget.
 *
 * Styling knobs:
 * - height: iframe height in px (calendar widget height is fixed, adjust to match your calendar's real height)
 * - className: extra classes for the wrapping container (e.g. spacing, max-width, background)
 */
export default function GHLCalendar({ height = 800, className = "" }) {
  useEffect(() => {
    // Load the GHL embed script once, even if this component mounts multiple times.
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`ghl-calendar-wrapper ${className}`}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/fbbAUkB2yKVWqN7BvSKZ"
        className="ghl-calendar-iframe"
        style={{ width: "100%", height, border: "none", overflow: "hidden" }}
        scrolling="no"
        id="fbbAUkB2yKVWqN7BvSKZ_1789567222437"
        allow="payment"
        title="Book a class"
      />
    </div>
  );
}
