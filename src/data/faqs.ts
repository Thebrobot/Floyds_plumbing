export type Faq = {
  question: string;
  answer: string;
};

/** Used on homepage FAQ section and /faq/ page. Emitted as FAQPage JSON-LD. */
export const faqs: Faq[] = [
  {
    question: 'Are you licensed and insured in Florida?',
    answer:
      "Yes. Floyd's Plumbing is a Florida Certified Plumbing Contractor (CFC), fully insured, and bonded. Our license number is displayed in the footer and on every invoice."
  },
  {
    question: 'Do you charge for estimates?',
    answer:
      'Estimates for installations, remodels, and repipes are always free. For service and diagnostic calls, we charge a flat dispatch fee that is credited back toward any approved repair.'
  },
  {
    question: 'How fast can you respond to an emergency?',
    answer:
      'We answer 24/7 and our on-call technician is typically rolling within an hour of your call. Before we arrive, shut off the main water valve and, if safe to do so, kill power to any appliance that is leaking.'
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Ocala and the surrounding Marion County area within roughly a 20-mile radius, including Belleview, Dunnellon, Silver Springs Shores, Anthony, Citra, Summerfield, Stone Creek, and Colessa.'
  },
  {
    question: 'Do you offer financing?',
    answer:
      'Yes. We partner with Wisetack to offer flexible monthly payments on larger jobs like repipes, tankless conversions, and sewer replacements. The pre-qualification is a soft credit check that does not affect your score.'
  },
  {
    question: 'Is your pricing upfront or hourly?',
    answer:
      'Upfront, flat-rate pricing on repairs and installations. You get the full price in writing before we pick up a wrench. No hidden fees, no clock-watching.'
  },
  {
    question: 'Do you warranty your work?',
    answer:
      'Every repair and installation includes a 1-year labor warranty, plus the manufacturer warranty on any parts we install. Our 100% satisfaction guarantee means if something is not right, we make it right.'
  },
  {
    question: 'Do you work on manufactured homes and older houses?',
    answer:
      'Absolutely. We are experienced with manufactured-home plumbing, polybutylene replacement, cast iron sewer repairs, and older copper systems that need pinhole attention.'
  },
  {
    question: 'Do you offer discounts for military, veterans, or seniors?',
    answer:
      'Yes, 10% off labor for veterans, active-duty military, and seniors 65+. Mention it when you book.'
  },
  {
    question: 'How often does backflow need to be tested in Florida?',
    answer:
      'Most Florida utilities require annual backflow assembly testing, though some jurisdictions allow every 2 years for certain low-hazard installations. We handle the test, the paperwork, and file with your utility on your behalf.'
  }
];
