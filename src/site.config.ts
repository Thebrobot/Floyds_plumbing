/**
 * Business / SEO configuration. Update NAP, phone, and form endpoint before launch.
 * Keep `astro.config.mjs` `site` aligned with production URL for sitemap + OG URLs.
 *
 * LAUNCH CHECKLIST (values marked with // TODO: must be filled in before going live):
 *   - address.streetAddress  (Florida DBPR advertising rule: plumbing ads should include contractor address or license #)
 *   - license.cfc            (Florida CFC# is required on all contractor advertising)
 *   - googleBusinessUrl      (replace search URL with claimed GBP / g.page URL)
 *   - social.facebook        (real FB URL)
 *   - contactFormActionUrl   (Formspree / Basin / Netlify Forms endpoint)
 *   - rating.value/count     (once Google reviews are claimed)
 */
export const siteConfig = {
  businessName: "Floyd's Plumbing",
  tagline: 'Honest Work. Fair Prices. No Surprises.',
  foundingYear: 2008,
  /** E.164 for tel: / JSON-LD */
  phoneTel: '+13523046404',
  phoneDisplay: '(352) 304-6404',
  email: 'info@floydsplumbing.com',
  /** Public path under /public (WebP; run `npm run optimize-images` after replacing source JPG/PNG) */
  logoPath: '/images/floyds-plumbing-logo.webp',
  /** Homepage hero (full-bleed). Optimized WebP in public/images */
  heroImagePath: '/images/floyd-hero.webp',
  /** Google Business Profile or reviews URL - update when available */
  googleBusinessUrl: 'https://www.google.com/maps/search/?api=1&query=Floyd%27s+Plumbing+Ocala+FL',
  /** POST endpoint (Formspree, Basin, etc.). Empty = submit offers call-to-action fallback via client script. */
  contactFormActionUrl: '',
  /** Florida Certified Plumbing Contractor number. REQUIRED on all advertising per DBPR. */
  license: {
    cfc: 'CFC#######', // TODO: replace with real Florida CFC license number before launch
    insured: true,
    bonded: true
  },
  address: {
    /** Leave empty if not displaying street address (service-area business). */
    streetAddress: '', // TODO: add street address (or leave '' and rely on service radius)
    addressLocality: 'Ocala',
    addressRegion: 'FL',
    postalCode: '34471',
    addressCountry: 'US'
  },
  /** Approximate Ocala center; ~20 miles ≈ 32,187 m (tightened from 25 mi to match actual coverage) */
  serviceGeo: {
    latitude: 29.1872,
    longitude: -82.1401,
    radiusMeters: 32187
  },
  /** Google Reviews rating aggregate (displayed in hero + schema.org aggregateRating). */
  rating: {
    value: 4.9, // TODO: sync with real Google rating
    count: 87   // TODO: sync with real Google review count
  },
  /** Business hours for JSON-LD + footer display. 24/7 emergency handled separately. */
  hours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '07:00', closes: '17:00' },
    { days: ['Sa'], opens: '08:00', closes: '14:00' }
  ] as ReadonlyArray<{ days: readonly string[]; opens: string; closes: string }>,
  emergency24_7: true,
  /** Payment methods accepted (shown in footer + schema). */
  paymentMethods: ['Visa', 'Mastercard', 'American Express', 'Discover', 'Cash', 'Check', 'ACH'],
  /** Financing partner copy. Set to null to hide financing callouts. */
  financing: {
    partner: 'Wisetack',
    minApr: '0%',
    maxMonths: 60,
    blurb: 'Pay over time with affordable monthly plans. Soft credit check, no impact on your score.'
  },
  /** Guarantee / warranty displayed on site. */
  guarantee: {
    satisfaction: '100% Satisfaction Guarantee',
    laborWarrantyMonths: 12
  },
  /** Social links. Use '' to hide a social icon. */
  social: {
    facebook: '', // TODO: real Facebook URL
    instagram: '',
    nextdoor: ''
  },
  /** Professional affiliations / trust badges. */
  affiliations: ['Licensed & Insured', 'Florida CFC Certified', 'BBB Accredited', 'Google Guaranteed'],
  defaultTitle: "Floyd's Plumbing | Ocala Plumbers | Licensed, Insured, 24/7",
  defaultDescription:
    "Licensed Ocala plumbers since 2008. 24/7 emergency service, upfront pricing, 100% satisfaction guaranteed. Water heaters, repipes, backflow testing, drain cleaning & more. Serving Marion County."
} as const;
