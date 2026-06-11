export type Faq = {
  question: string;
  answer: string;
  /** Links to a related blog article for a "Read more" CTA. */
  blogSlug?: string;
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
      'We serve Ocala and the surrounding Marion County area within roughly a 20-mile radius, including Belleview, Dunnellon, Silver Springs Shores, Summerfield, Anthony, The Villages, On Top of the World, Stone Creek, Calesa Township, Citra, McIntosh, Reddick, Sparr, Fort McCoy, Weirsdale, and nearby communities.'
  },
  {
    question: 'Do you offer financing?',
    answer:
      "We're putting together financing options for larger jobs and will share details as soon as they're ready. In the meantime, call us for upfront flat-rate pricing and we'll help you plan the work."
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
      'Most Florida utilities require annual backflow assembly testing, though some jurisdictions allow every 2 years for certain low-hazard installations. We handle the test, the paperwork, and file with your utility on your behalf.',
    blogSlug: 'florida-backflow-testing-guide'
  },

  // Water shut-off (blog: how-to-shut-off-your-water-ocala)
  {
    question: 'Where is my main water shut-off valve in an Ocala home?',
    answer:
      'Most city water homes in Ocala have a main shut-off near where the supply line enters the house. Check the garage wall, a utility or laundry closet, or the exterior wall closest to your water meter. Well homes usually have a valve at the pressure tank. If you cannot find it, call us before an emergency and we will walk you through it.',
    blogSlug: 'how-to-shut-off-your-water-ocala'
  },
  {
    question: 'Should I shut off water at the meter box or inside my house?',
    answer:
      'Start with your house shut-off. It is faster and you control it. Use the meter box at the curb only if the house valve fails or you cannot reach it. You will need a meter key to open the box. We recommend keeping one in the garage.',
    blogSlug: 'how-to-shut-off-your-water-ocala'
  },
  {
    question: 'Do toilets, sinks, and washing machines have their own shut-off valves?',
    answer:
      'Yes. Toilets and sinks have small oval handles on the supply lines. Washing machines have two valves behind the unit. Using a fixture shut-off can stop a localized leak without killing water to the whole house.',
    blogSlug: 'how-to-shut-off-your-water-ocala'
  },

  // Repipe (blog: signs-you-need-a-repipe)
  {
    question: 'How do I know if my home needs a whole-home repipe?',
    answer:
      'Common signs include repeated pinhole leaks in copper, rust-colored water, dropping pressure throughout the house, and more than two leak repairs in a year. Gray plastic pipe from homes built between 1978 and 1995 is polybutylene and should be replaced before it fails. We offer free repipe estimates with a written scope and firm price.',
    blogSlug: 'signs-you-need-a-repipe'
  },
  {
    question: 'What is polybutylene pipe and do I need to replace it?',
    answer:
      'Polybutylene, often called poly-B, is gray or blue-gray plastic pipe installed heavily from the late 1970s through the mid-1990s. It fails suddenly at fittings and elbows. Some insurers will not cover homes that still have it. If your Marion County home has poly-B, we recommend planning a repipe on your schedule, not after a burst.',
    blogSlug: 'signs-you-need-a-repipe'
  },
  {
    question: 'How long does a whole-home repipe take in Ocala?',
    answer:
      'Most residential repipes in Ocala take 2 to 4 days. We restore water every night so you are not without it overnight. We run new PEX lines through attics, crawlspaces, and existing access points, pull permits, and patch drywall only where necessary.',
    blogSlug: 'signs-you-need-a-repipe'
  },

  // Backflow (blog: florida-backflow-testing-guide)
  {
    question: 'Who needs backflow testing in Marion County?',
    answer:
      'You likely need annual testing if you have an in-ground irrigation system, a commercial water connection, a fire sprinkler system, a boiler, or a dual-supply setup with city water and a well backup. The assembly is usually near your meter, irrigation box, or mechanical room.',
    blogSlug: 'florida-backflow-testing-guide'
  },
  {
    question: 'What happens if my backflow assembly fails the test?',
    answer:
      'Most failures are repairable with a rebuild kit for worn seals and springs. We carry kits for common models like Watts, Wilkins, Febco, and Zurn. If the body is corroded, we replace the assembly and retest. We file all paperwork with your utility after the repair.',
    blogSlug: 'florida-backflow-testing-guide'
  },
  {
    question: 'How much does backflow testing cost in Ocala?',
    answer:
      'Expect $75 to $150 per assembly per year for the test, report, and filing with your utility. Rebuilds typically add $50 to $120 if needed. Full replacement runs $350 to $800 depending on the assembly type and location. We offer annual contracts for commercial properties with multiple devices.',
    blogSlug: 'florida-backflow-testing-guide'
  },

  // Hard water (blog: hard-water-marion-county)
  {
    question: 'How hard is the water in Ocala and Marion County?',
    answer:
      'Most city connections in Ocala test between 15 and 20 grains per gallon, which is classified as very hard. The national average is about 5 gpg. Well water in rural Marion County is often harder still and may include iron or sulfur. We offer free on-site water testing.',
    blogSlug: 'hard-water-marion-county'
  },
  {
    question: 'Is a water softener worth it in Ocala?',
    answer:
      'For most homeowners, yes. Hard water scales up water heaters, clogs fixtures, and shortens appliance life. A properly sized whole-home softener typically costs $1,800 to $2,800 installed. Most families see a return within 3 to 5 years through lower energy bills, fewer repairs, and longer equipment life.',
    blogSlug: 'hard-water-marion-county'
  },
  {
    question: 'Do I need different water treatment for city water vs. a well in Marion County?',
    answer:
      'City of Ocala water is treated for bacteria and chlorine but not softened, so a standard ion-exchange softener handles most hardness. Well water often needs testing first because iron, sulfur, and higher hardness may require pre-treatment before a softener. We size systems based on your actual water, not a one-size-fits-all chart.',
    blogSlug: 'hard-water-marion-county'
  },

  // Water heater & hard water (blog: hard-water-water-heater-ocala)
  {
    question: 'How does hard water affect my water heater?',
    answer:
      'Calcium and magnesium settle at the bottom of the tank every time water is heated. That sediment insulates the burner, raises energy bills, causes popping sounds, and can lead to overheating and tank failure. In Ocala, an untreated water heater often fails years earlier than its rated lifespan.',
    blogSlug: 'hard-water-water-heater-ocala'
  },
  {
    question: 'How often should I flush my water heater in Ocala?',
    answer:
      'We recommend flushing 5 to 10 gallons from the drain valve every 6 to 12 months in Marion County. Homes without a water softener may need flushing more often. If you hear popping or rumbling from the tank, schedule a flush right away.',
    blogSlug: 'hard-water-water-heater-ocala'
  },
  {
    question: 'How long should a water heater last in Marion County?',
    answer:
      'Tank units are rated for 8 to 12 years, but hard water and missed maintenance often push Ocala homes toward the lower end. A softener plus annual flushing and anode rod checks can get you to the full rated life. Tankless units need annual descaling in our water or scale can destroy the heat exchanger in just a few years.',
    blogSlug: 'hard-water-water-heater-ocala'
  }
];
