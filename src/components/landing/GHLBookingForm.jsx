import React, { useEffect } from "react";

const GHL_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * Embeds the "Al bayan Form 1" GoHighLevel (GHL) form.
 *
 * Styling knobs:
 * - height: iframe height in px (GHL form height is fixed, adjust to match your form's real height)
 * - borderRadius: corner rounding in px
 * - className: extra classes for the wrapping container (e.g. spacing, max-width, background)
 */
export default function GHLBookingForm({
  height = 603,
  borderRadius = 8,
  className = "",
}) {
  useEffect(() => {
    // Load the GHL embed script once, even if this component mounts multiple times.
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`ghl-form-wrapper ${className}`}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/fU0Wb9DqHB4dZy1YuUJa"
        className="ghl-form-iframe"
        style={{ height, borderRadius }}
        id="inline-fU0Wb9DqHB4dZy1YuUJa"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Al bayan Form 1"
        data-height={height}
        data-layout-iframe-id="inline-fU0Wb9DqHB4dZy1YuUJa"
        data-form-id="fU0Wb9DqHB4dZy1YuUJa"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Al bayan Form 1"
      />
    </div>
  );
}
