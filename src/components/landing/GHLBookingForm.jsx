import React, { useEffect } from "react";

const GHL_EMBED_SCRIPT_SRC =
  "https://link.msgsndr.com/js/form_embed.js";

export default function GHLBookingForm({
  height = 603,
  borderRadius = 8,
  className = "",
}) {
  useEffect(() => {
    // Load GHL embed script only once
    if (
      document.querySelector(
        `script[src="${GHL_EMBED_SCRIPT_SRC}"]`
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`ghl-form-wrapper ${className}`}
      style={{
        width: "100%",
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/fU0Wb9DqHB4dZy1YuUJa"
        className="ghl-form-iframe"
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
        scrolling="yes"

        style={{
          width: "100%",
          height: `${height}px`,
          border: "none",
          borderRadius: `${borderRadius}px`,
          overflowY: "auto",
          overflowX: "hidden",
          display: "block",
        }}
      />
    </div>
  );
}