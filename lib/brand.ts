import {
  ADDRESS,
  COMPANY_NAME,
  EMAIL,
  PHONE,
  PHONE_DIGITS,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_URL,
} from "@/lib/constants";

export function getBrand() {
  const COLORS = {
    accent: "#0EA5A6",
    dark: "#0B0F13",
    panel: "#11151B",
    ink: "#E7E9EC",
  };

  return {
    subject: "We received your 1031 exchange inquiry",
    preheader:
      "Thanks for your note. Our San Diego intake desk will follow up within one business day.",
    company_name: COMPANY_NAME,
    logo_url: `${SITE_URL}/1031-exchange-of-san-diego-ca-logo.png`,
    city_state: `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
    brand_accent: COLORS.accent,
    cta_dark_bg: COLORS.dark,
    bg_color: COLORS.panel,
    text_dark: COLORS.dark,
    text_muted: "#94A3B8",
    text_body: COLORS.ink,
    text_faint: "#64748B",
    border_color: "#1F2937",
    card_header_bg: "#111827",
    hero_title: "We received your 1031 exchange intake request.",
    hero_subtitle:
      "Expect a follow-up within one business day with a secure intake workspace and immediate property matches.",
    details_title: "Your project details",
    call_cta_label: "Call Now",
    call_phone: PHONE,
    call_phone_plain: PHONE_DIGITS,
    site_cta_label: "Visit Website",
    site_url: SITE_URL,
    address_line: ADDRESS,
    footer_note:
      "This message is a transactional confirmation related to your 1031 exchange request.",
    brand_title: COMPANY_NAME,
    brand_tagline:
      "Single tenant NNN identification, ground lease sourcing, and 45/180 coordination.",
    brand_dark_bg: COLORS.dark,
    brand_gold: COLORS.accent,
    supportPhone: PHONE,
    supportEmail: EMAIL,
    service_area: `${PRIMARY_CITY} and nationwide exchanges`,
    portfolio_url: SITE_URL,
    portfolio_blurb:
      "1031 Exchange of San Diego sources single tenant retail, medical, industrial, and specialty assets across all 50 states.",
    intro_copy:
      "We coordinate secure intake, curated property lists, and advisor communication for timeline-sensitive exchange buyers.",
  };
}

