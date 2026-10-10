import React, { useEffect, useState } from "react";
import GHLCalendar from "./GHLCalendar";

const FORM_ID = "qRo7BHrGoghvVm0WyUby";
const GHL_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const FORM_HEIGHT = 700;

// form_embed.js messages are arrays like ["set-sticky-contacts", ...]; the form
// sends this once the contact has been created, i.e. on a successful submit.
// The regex is a fallback for other payload shapes.
function isSubmitMessage(data) {
  if (data == null) return false;
  if (Array.isArray(data) && data[0] === "set-sticky-contacts") return true;
  let text;
  try {
    text = typeof data === "string" ? data : JSON.stringify(data);
  } catch {
    return false;
  }
  return /submitted|form[-_ ]?submit|survey[-_ ]?submit/i.test(text);
}

// The form stores the submitted contact as JSON in the third slot of
// ["set-sticky-contacts", "_ud", "<json>", ...]. Pull out the fields the
// booking widget can prefill from the URL.
function extractContact(data) {
  if (!Array.isArray(data) || data[0] !== "set-sticky-contacts") return null;
  if (typeof data[2] !== "string") return null;
  try {
    const c = JSON.parse(data[2]);
    const contact = {
      email: c.email,
      first_name: c.first_name ?? c.firstName,
      last_name: c.last_name ?? c.lastName,
      phone: c.phone,
    };
    return Object.values(contact).some(Boolean) ? contact : null;
  } catch {
    return null;
  }
}

export default function GHLBookingFlow() {
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (!document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = GHL_EMBED_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const handleMessage = (event) => {
      if (!/leadconnectorhq\.com|msgsndr\.com/.test(event.origin)) return;
      console.log("GHL form message:", event.origin, event.data);
      const found = extractContact(event.data);
      if (found) setContact((prev) => ({ ...prev, ...found }));
      if (isSubmitMessage(event.data)) {
        console.log("GHL form submit detected, showing calendar");
        setSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (submitted) return <GHLCalendar prefill={contact} />;

  return (
    <div className="overflow-hidden rounded-2xl" style={{ width: "100%" }}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Al Bayan Form"
        data-height={FORM_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Al Bayan Form"
        style={{
          width: "100%",
          height: `${FORM_HEIGHT}px`,
          border: "none",
          borderRadius: "8px",
          display: "block",
        }}
      />
    </div>
  );
}
