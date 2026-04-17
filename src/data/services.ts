export type Service = {
  slug: string;
  title: string;
  /** Short name for nav/lists (e.g. "Water Heaters"). */
  navTitle?: string;
  /** Group the service under a parent category for nav/listings. */
  category: 'main' | 'sub';
  shortDescription: string;
  metaDescription: string;
  keywords: string[];
  paragraphs: string[];
  checklist: string[];
  /** Related slugs for "You may also need" internal linking. */
  related?: string[];
  /** Hero/card image path under /public. Optional; falls back to a branded gradient. */
  heroImage?: string;
  /** Alt text for the hero image. */
  heroImageAlt?: string;
};

export const services: Service[] = [
  {
    slug: 'new-construction',
    title: 'New Construction & Custom Homes',
    navTitle: 'New Construction',
    category: 'main',
    heroImage: '/images/services/service-new-construction.jpg',
    heroImageAlt: 'Plumber roughing in PEX and PVC drain lines during new construction of a Florida home',
    shortDescription:
      'Rough-in to trim for custom homes: detail-driven work for builders who care about fit, finish, and long-term reliability.',
    metaDescription:
      "Custom home plumber in Ocala, FL. Floyd's Plumbing handles new construction plumbing with old-school quality and modern code compliance.",
    keywords: ['Custom Home Plumber Florida', 'new construction plumbing Ocala'],
    paragraphs: [
      'Custom homes demand more than speed; they demand sequencing, coordination, and pride in the small details. Our crews work with builders and homeowners who want plumbing that disappears into the architecture until you need it.',
      'From underground to trim-out, we prioritize clean layouts, accessible shutoffs, and long-term serviceability so future maintenance does not turn into demolition.',
      'If you are planning a new build in Ocala, Stone Creek, Colessa, or elsewhere in Marion County, bring us in early. We will help you avoid expensive rework before drywall goes up.'
    ],
    checklist: [
      'Rough-in layout reviews with your superintendent or builder',
      'Fixture schedules aligned with interior selections',
      'Pressure testing and documentation for inspections',
      'Trim coordination that respects finish carpentry timelines'
    ],
    related: ['remodels-repipes', 'residential', 'gas-lines']
  },
  {
    slug: 'residential',
    title: 'Residential Plumbing',
    navTitle: 'Residential',
    category: 'main',
    heroImage: '/images/services/service-residential.jpg',
    heroImageAlt: 'Plumber servicing a supply line under a residential kitchen sink',
    shortDescription:
      'Whole-home plumbing for Ocala families: leaks, fixtures, water heaters, and upgrades done right the first time.',
    metaDescription:
      "Residential plumbing in Ocala, FL. Floyd's Plumbing provides honest diagnostics, quality parts, and workmanship you can trust.",
    keywords: ['Ocala residential plumber', 'home plumbing Ocala'],
    paragraphs: [
      'Your home should feel predictable: steady pressure, quiet lines, and fixtures that work every day without drama. When something feels off (a rumble in the wall, a warm spot on the slab, a slow drain), we diagnose first and quote clearly.',
      'Whether it is a water heater swap, a toilet rebuild, or a hidden leak, we treat your floors, walls, and schedules with respect.',
      'Serving families across our Marion County service radius, including Stone Creek and Colessa.'
    ],
    checklist: [
      'Leak detection and repair',
      'Water heater repair and replacement',
      'Fixture upgrades and valve replacements',
      'Whole-home pressure and safety checks when needed'
    ],
    related: ['water-heaters', 'leak-detection', 'repairs']
  },
  {
    slug: 'commercial',
    title: 'Commercial Plumbing & Maintenance Plans',
    navTitle: 'Commercial',
    category: 'main',
    heroImage: '/images/services/service-commercial.jpg',
    heroImageAlt: 'Plumber working on commercial kitchen drain lines in a Florida restaurant',
    shortDescription:
      'Restaurants, retail, and light commercial: proactive maintenance plans that keep your business open and code-ready.',
    metaDescription:
      "Commercial plumbing maintenance for Ocala restaurants and retail. Floyd's Plumbing plans tailored to your hours and equipment.",
    keywords: ['commercial plumber Ocala', 'restaurant plumbing maintenance'],
    paragraphs: [
      'Restaurants and retail never get a night off, and neither do your grease interceptors, floor sinks, or water heaters. We build maintenance plans around your hours so you are not fighting emergencies during the service rush.',
      'From back-of-house drains to public restrooms, we keep work neat, documented, and ready for inspectors and insurers.',
      'Ask about recurring walk-throughs for high-traffic locations in Marion County.'
    ],
    checklist: [
      'Scheduled maintenance for kitchens and restrooms',
      'Emergency response prioritized for account customers',
      'Grease and solids handling coordination with your vendors',
      'Fixture and flush valve programs for retail traffic'
    ],
    related: ['backflow', 'drain-cleaning', 'repairs']
  },
  {
    slug: 'repairs',
    title: 'General Service & Repairs',
    navTitle: 'Repairs',
    category: 'main',
    heroImage: '/images/services/service-repairs.jpg',
    heroImageAlt: 'Close-up of plumber tightening a brass pressure-reducing valve on a copper water line',
    shortDescription:
      'Same-day priorities when possible, clear options, and repairs built to last. No quick patches that fail next season.',
    metaDescription:
      "General plumbing repairs in Ocala and Marion County. Floyd's Plumbing fixes leaks, clogs, pressure issues, and more.",
    keywords: ['Ocala plumbing repairs', 'emergency plumber Ocala'],
    paragraphs: [
      'Not every job needs a sales pitch; sometimes you need a skilled plumber, a fair price, and a fix that holds. We carry common parts, work efficiently, and explain what failed and why.',
      'If a repair is not the right long-term answer, we will tell you before we touch a wrench. That is the old-school standard we have kept since 2008.',
      'Call for service across Ocala and the surrounding Marion County area.'
    ],
    checklist: [
      'Drain cleaning and jetting when appropriate',
      'Supply line and angle stop replacements',
      'Slab and wall leak coordination',
      'Pressure-reducing valve and expansion tank service'
    ],
    related: ['emergency-plumber', 'drain-cleaning', 'leak-detection']
  },
  {
    slug: 'backflow',
    title: 'Backflow Installation & Inspection',
    navTitle: 'Backflow Testing',
    category: 'main',
    heroImage: '/images/services/service-backflow.jpg',
    heroImageAlt: 'Certified plumber testing a brass backflow prevention assembly outside a Florida home',
    shortDescription:
      'Certified backflow assembly installation, testing, and paperwork handled so you stay compliant without the headache.',
    metaDescription:
      "Backflow testing in Ocala, FL. Floyd's Plumbing installs, inspects, and services backflow preventers for homes and businesses.",
    keywords: ['Backflow testing Ocala', 'backflow prevention Ocala'],
    paragraphs: [
      'Backflow prevention protects drinking water, and local jurisdictions expect assemblies to be installed, tested, and renewed on schedule. We handle the mechanical work and help you stay ahead of deadlines.',
      'Whether you are a homeowner with an irrigation connection or a business with multiple domestic lines, we document what we find and what we fixed.',
      'If you are searching specifically for backflow testing in Ocala, call us with your assembly type and due date; we will get you on the calendar.'
    ],
    checklist: [
      'New assembly installation and orientation',
      'Annual or required testing intervals',
      'Repairs and rebuild kits when assemblies fail criteria',
      'Paperwork support for utility or municipal requirements'
    ],
    related: ['commercial', 'water-softeners', 'repairs']
  },
  {
    slug: 'remodels-repipes',
    title: 'Remodels & Repipes',
    navTitle: 'Remodels & Repipes',
    category: 'main',
    heroImage: '/images/services/service-remodels-repipes.jpg',
    heroImageAlt: 'Neat PEX manifold installation with blue and red PEX lines during a whole-home repipe',
    shortDescription:
      'Bath and kitchen remodels, polybutylene or aging pipe replacement, and whole-home repipes with minimal disruption.',
    metaDescription:
      "Repipes and remodel plumbing in Ocala, FL. Floyd's Plumbing specializes in careful demolition coordination and clean installs.",
    keywords: ['repipe Ocala', 'kitchen bath remodel plumbing'],
    paragraphs: [
      'Remodels are where plumbing meets design, and where small mistakes become expensive tile repairs. We coordinate with your contractor on rough heights, valve locations, and access panels before finishes go in.',
      'Whole-home repipes are a specialty: we sequence walls, attic, and crawl paths to keep your family comfortable while water is restored every night when possible.',
      'Serving Ocala and nearby Marion County neighborhoods including Stone Creek and Colessa.'
    ],
    checklist: [
      'Kitchen and bath rough-in and trim',
      'Whole-home repipes (copper, PEX, or hybrid per plan)',
      'Polybutylene replacement assessments',
      'Shutoff modernization and manifold planning when it helps'
    ],
    related: ['new-construction', 'water-heaters', 'gas-lines']
  },
  // ------------------------------------------------------------------
  // SUB-SERVICES (long-tail SEO pages)
  // ------------------------------------------------------------------
  {
    slug: 'water-heaters',
    title: 'Water Heater Repair & Installation',
    navTitle: 'Water Heaters',
    category: 'sub',
    shortDescription:
      'Same-day water heater repair and replacement for tank and tankless units. Gas, electric, and heat-pump models.',
    metaDescription:
      "Water heater repair & installation in Ocala, FL. Tank, tankless, gas, electric. Same-day service and flat-rate pricing from Floyd's Plumbing.",
    keywords: ['water heater repair Ocala', 'water heater installation Ocala', 'tankless water heater Ocala'],
    paragraphs: [
      'A cold shower on a workday is no way to start the morning. We stock the most common residential tank sizes on our trucks and can often replace a failed water heater the same day you call.',
      'Not sure whether to repair or replace? We will show you the age, sediment condition, anode wear, and expected remaining life before you spend money on either option.',
      'We install and service AO Smith, Rheem, Bradford White, Rinnai, Navien, and more. Permits, pans, expansion tanks, and code-required upgrades included in every quote.'
    ],
    checklist: [
      'Tank water heater repair and replacement (30–80 gal)',
      'Tankless install, descale, and flow sensor service',
      'T&P valve, expansion tank, and drain pan upgrades',
      'Gas line sizing verification for BTU upgrades',
      'Old unit haul-away and manufacturer warranty registration'
    ],
    related: ['tankless-water-heaters', 'gas-lines', 'residential']
  },
  {
    slug: 'tankless-water-heaters',
    title: 'Tankless Water Heater Installation',
    navTitle: 'Tankless Heaters',
    category: 'sub',
    shortDescription:
      'Endless hot water, lower energy bills, and a smaller footprint. Proper sizing and gas upgrades done right.',
    metaDescription:
      "Tankless water heater installation in Ocala, FL. Rinnai, Navien, Rheem. Proper sizing, gas/vent upgrades. Floyd's Plumbing.",
    keywords: ['tankless water heater Ocala', 'Rinnai Ocala', 'Navien Ocala'],
    paragraphs: [
      'Tankless is the right answer for plenty of homes, but the wrong answer for some. We look at your hot-water demand, gas meter capacity, venting path, and existing water chemistry before we recommend a model.',
      'Done right, a tankless unit gives you 20+ years of service with annual descaling. Done wrong, you end up with lukewarm showers and constant error codes. We do it right.',
      'Hard water is real in Marion County. We recommend pairing tankless installs with a softener or a service valve kit to protect your investment.'
    ],
    checklist: [
      'Gas meter and line sizing analysis',
      'Direct-vent and concentric vent installation',
      'Condensate neutralizer and drain routing',
      'Service valve kits for annual descaling',
      'Wi-Fi / recirc pump integration when specified'
    ],
    related: ['water-heaters', 'gas-lines', 'water-softeners']
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro Jetting',
    navTitle: 'Drain Cleaning',
    category: 'sub',
    shortDescription:
      'Clogged kitchen, bathroom, or main line? Cable cleaning, hydro jetting, and camera inspection. No surprises.',
    metaDescription:
      "Drain cleaning and hydro jetting in Ocala, FL. Camera inspection, same-day unclogs, main line clearing. Floyd's Plumbing.",
    keywords: ['drain cleaning Ocala', 'hydro jetting Ocala', 'clogged drain Ocala'],
    paragraphs: [
      'Slow drains are rarely just hair. We pull the trap, run a camera when it helps, and tell you whether this is a quick cable clean or a symptom of a bigger line issue.',
      'Hydro jetting uses high-pressure water to scour the inside of your drain line. It is the gold standard for grease, roots, and years of buildup, and we use it where it makes sense rather than as an upsell on every call.',
      'All drain work comes with a clear explanation of what we found, what we cleared, and whether anything else deserves attention.'
    ],
    checklist: [
      'Kitchen, bath, and laundry drain cable cleaning',
      'Main sewer line clearing with full-size cable',
      'Hydro jet service for grease, scale, and roots',
      'Sewer camera inspection with recorded footage',
      'Cleanout installation when access is blocked'
    ],
    related: ['sewer-line', 'leak-detection', 'emergency-plumber']
  },
  {
    slug: 'sewer-line',
    title: 'Sewer Line Repair & Replacement',
    navTitle: 'Sewer Lines',
    category: 'sub',
    shortDescription:
      'Broken, collapsed, or root-choked sewer line? Camera diagnosis, spot repair, or trenchless replacement options.',
    metaDescription:
      "Sewer line repair and replacement in Ocala, FL. Camera inspection, trenchless options, full replacements. Floyd's Plumbing.",
    keywords: ['sewer line repair Ocala', 'trenchless sewer Ocala', 'sewer replacement Ocala'],
    paragraphs: [
      'A failing sewer line is disruptive no matter how you slice it. We locate the failure with a camera and locator, then walk you through every option: spot repair, pipe bursting, pipe lining, or traditional open-trench replacement.',
      'Roots in clay tile, bellies in old cast iron, and separated joints in Orangeburg are all common in older Marion County homes. We handle them all.',
      'We pull permits, coordinate with locates (811), and restore landscaping the right way.'
    ],
    checklist: [
      'Camera and locate diagnosis with recorded footage',
      'Trenchless pipe bursting and lining where conditions allow',
      'Open-trench replacement with PVC or HDPE',
      'Cleanout and backflow device installation',
      'Permit coordination with Marion County or City of Ocala'
    ],
    related: ['drain-cleaning', 'repairs', 'backflow']
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection & Slab Leak Repair',
    navTitle: 'Leak Detection',
    category: 'sub',
    shortDescription:
      'High water bill or warm spot on the slab? Non-invasive leak detection and targeted repair, with no demo hunting.',
    metaDescription:
      "Leak detection and slab leak repair in Ocala, FL. Acoustic, thermal, and pressure testing. Floyd's Plumbing.",
    keywords: ['leak detection Ocala', 'slab leak Ocala', 'water leak Ocala'],
    paragraphs: [
      'Hidden leaks cost more than the water bill. They warp floors, rot cabinets, and breed mold, and we find them without tearing up your house on a guess.',
      'Acoustic equipment, pressure isolation, and thermal imaging tell us where the leak is before a saw touches a slab. Then we fix just the section that failed or reroute overhead if that makes more sense.',
      'Most insurance policies cover the access and repair but not the plumbing fix itself; we write our invoice in a way that makes your claim easier.'
    ],
    checklist: [
      'Acoustic and pressure-based leak isolation',
      'Slab leak spot repair or overhead rerouting',
      'Pinhole leak and pinhole cluster assessment',
      'Documentation suitable for insurance claims',
      'Pressure-reducing valve check (the #1 cause of pinholes)'
    ],
    related: ['remodels-repipes', 'water-heaters', 'repairs']
  },
  {
    slug: 'gas-lines',
    title: 'Gas Line Installation & Repair',
    navTitle: 'Gas Lines',
    category: 'sub',
    shortDescription:
      'Natural gas and LP line installation, repair, and pressure testing. Appliance hookups, outdoor kitchens, pool heaters.',
    metaDescription:
      "Gas line plumber in Ocala, FL. Black iron and CSST, pressure testing, appliance hookups. Permitted & inspected. Floyd's Plumbing.",
    keywords: ['gas line Ocala', 'gas plumber Ocala', 'CSST Ocala'],
    paragraphs: [
      'Gas work is not a DIY zone. Every joint, sizing calculation, and bond we install is done to code and pressure-tested before your meter is ever re-lit.',
      'We work with natural gas and LP, black iron and CSST, and coordinate with your utility on meter upgrades when BTU demand requires it.',
      'Common projects: tankless water heater conversion, gas range install, pool heater, outdoor kitchen, generator, firepit.'
    ],
    checklist: [
      'Appliance hookup and sediment trap installation',
      'Line sizing and BTU demand calculation',
      'Pressure testing and leak verification',
      'Permit pulling and inspection coordination',
      'CSST bonding per NEC 250.104(B)'
    ],
    related: ['tankless-water-heaters', 'water-heaters', 'new-construction']
  },
  {
    slug: 'water-softeners',
    title: 'Water Softeners & Whole-Home Filtration',
    navTitle: 'Water Softeners',
    category: 'sub',
    shortDescription:
      'Central Florida hard water is hard on fixtures, skin, and appliances. Softeners, carbon filters, and RO systems.',
    metaDescription:
      "Water softener and whole-home filtration in Ocala, FL. Softeners, carbon, RO. Floyd's Plumbing installs and services.",
    keywords: ['water softener Ocala', 'water filtration Ocala', 'whole home filter Ocala'],
    paragraphs: [
      'Marion County sits on the Floridan Aquifer, so that clean-looking well or city water is often loaded with calcium, magnesium, and sometimes sulfur. A properly sized softener protects your water heater, fixtures, and skin.',
      'We test your water, size the system to your household, and install drain and bypass properly. No upsized units that waste salt.',
      'Ask about twin-tank softeners, catalytic carbon for chlorine removal, and reverse-osmosis drinking water systems at the kitchen sink.'
    ],
    checklist: [
      'On-site water hardness and iron test',
      'Single- and twin-tank softener installation',
      'Catalytic carbon and sediment pre-filters',
      'Under-sink reverse osmosis with dedicated faucet',
      'Bypass valves and drain routing done to code'
    ],
    related: ['tankless-water-heaters', 'residential', 'well-pumps']
  },
  {
    slug: 'well-pumps',
    title: 'Well Pumps & Pressure Tanks',
    navTitle: 'Well Pumps',
    category: 'sub',
    shortDescription:
      'No water at the tap? Pressure switch, pressure tank, jet pump, and submersible pump service across Marion County.',
    metaDescription:
      "Well pump service in Ocala and Marion County, FL. Pressure tanks, switches, jet and submersible pumps. Floyd's Plumbing.",
    keywords: ['well pump Ocala', 'well pump repair Marion County', 'pressure tank Ocala'],
    paragraphs: [
      'Well systems are everywhere in rural Marion County, and they fail in predictable ways: waterlogged tanks, worn pressure switches, or a submersible pump that has finally given up after 15 years of service.',
      'We diagnose first. A pump pulled unnecessarily is an expensive mistake. When replacement is the right call, we size the pump and tank to your well depth, yield, and household demand.',
      'We handle constant-pressure (VFD) upgrades for homeowners who want city-like pressure without a giant tank.'
    ],
    checklist: [
      'Pressure switch and gauge diagnosis',
      'Pressure tank air charge / replacement',
      'Jet pump and submersible pump replacement',
      'Constant-pressure (VFD) system upgrades',
      'Pitless adapter and wellhead service'
    ],
    related: ['water-softeners', 'residential', 'repairs']
  },
  {
    slug: 'sump-pumps',
    title: 'Sump Pumps & Sewage Ejector Pumps',
    navTitle: 'Sump Pumps',
    category: 'sub',
    shortDescription:
      'Basement, crawlspace, and below-grade fixture pumping. Primary, battery backup, and sewage ejector systems.',
    metaDescription:
      "Sump pump and sewage ejector installation in Ocala, FL. Primary and battery-backup units. Floyd's Plumbing.",
    keywords: ['sump pump Ocala', 'sewage ejector Ocala'],
    paragraphs: [
      'Central Florida does not have many basements, but below-grade laundry, crawlspace sumps, and below-sewer bathrooms all need reliable pumps. We install primaries, backups, and sewage ejector packages.',
      'Battery backup is not optional on a finished remodel. A single thunderstorm outage can cost more than the backup pump twice over.'
    ],
    checklist: [
      'Primary sump and sewage ejector pump replacement',
      'Battery backup and alarm systems',
      'Check valve and discharge piping',
      'Basin cleaning and sizing upgrades'
    ],
    related: ['drain-cleaning', 'repairs', 'remodels-repipes']
  },
  {
    slug: 'emergency-plumber',
    title: '24/7 Emergency Plumber',
    navTitle: 'Emergency Service',
    category: 'sub',
    shortDescription:
      'Burst pipe, no water, sewer backup? We answer nights and weekends. Shut off the main and call us now.',
    metaDescription:
      "24/7 emergency plumber in Ocala, FL. Burst pipes, sewer backups, no hot water. Floyd's Plumbing answers after hours.",
    keywords: ['emergency plumber Ocala', '24/7 plumber Ocala', 'after hours plumber Ocala'],
    paragraphs: [
      "When water is where it should not be, every minute matters. Our dispatch answers 24/7 and our on-call technician can usually be rolling within an hour.",
      'Before we arrive: shut off the main water supply at the meter or the street valve, and kill power to the water heater if the leak is near it. Snap photos for your insurance.',
      "We will give you a straight price over the phone before we dispatch, with no bait-and-switch once the truck is in your driveway."
    ],
    checklist: [
      'Burst pipe isolation and repair',
      'Main line backup clearing',
      'Water heater failure (leaks and floods)',
      'After-hours sump/ejector pump failures',
      'Gas leak response and line isolation'
    ],
    related: ['repairs', 'drain-cleaning', 'leak-detection']
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const mainServices = services.filter((s) => s.category === 'main');
export const subServices = services.filter((s) => s.category === 'sub');
