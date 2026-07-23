// Single source of truth for RemedyEngine contact details.
// Import from here — never hardcode phone/email/WhatsApp in components.

export const contact = {
  email: "info@remedyengine.com",
  // E.164 without the "+" for wa.me / tel building
  phoneDigits: "918861650666",
  // Display form
  phoneDisplay: "+91 88616 50666",
} as const;

export const mailtoHref = `mailto:${contact.email}`;
export const telHref = `tel:+${contact.phoneDigits}`;
export const whatsappHref = `https://wa.me/${contact.phoneDigits}`;

// The live product app (separate deployment from this marketing site).
export const appLoginUrl = "https://core.remedyengine.com/login";
