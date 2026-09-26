// Utility for Google Analytics 4 (GA4) event tracking across Next.js components

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID ||
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  "G-XXXXXXXXXX";

export function isGAActive(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function sendGAEvent(action: string, params: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, params);
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: action,
        ...params,
      });
    }
  } catch (err) {
    // Silent fail to prevent any UI interruption
    console.debug("Analytics event dispatch error:", err);
  }
}

/**
 * Standard GA4 conversion event for Lead Generation
 */
export function trackLeadSubmission(params: {
  courseTitle?: string;
  locationName?: string;
  source?: string;
  mode?: string;
}): void {
  sendGAEvent("generate_lead", {
    event_category: "Engagement",
    event_label: params.courseTitle || "General Enquiry",
    course_name: params.courseTitle || "General Training",
    lead_location: params.locationName || "Bangalore",
    lead_source: params.source || "Website Form",
    learning_mode: params.mode || "Classroom",
    value: 1,
  });
}

/**
 * Custom telemetry for telephone click-to-call
 */
export function trackClickToCall(phone: string, placement: string = "Header"): void {
  sendGAEvent("click_to_call", {
    event_category: "Contact",
    event_label: `Phone: ${phone}`,
    phone_number: phone,
    cta_placement: placement,
  });
}

/**
 * Custom telemetry for WhatsApp chat click
 */
export function trackClickToWhatsApp(phone: string, context: string = "Direct Chat"): void {
  sendGAEvent("click_to_whatsapp", {
    event_category: "Contact",
    event_label: `WhatsApp: ${phone}`,
    phone_number: phone,
    chat_context: context,
  });
}
