export type Location = {
  slug: string;
  city: string;
  county: string;
  /** Used in copy ("plumbers in Belleview, FL"). */
  displayName: string;
  shortDescription: string;
  metaDescription: string;
  /** Nearby neighborhoods / subdivisions for internal linking and SEO. */
  neighborhoods: string[];
  /** 2-3 paragraphs describing service + local relevance. */
  paragraphs: string[];
  /** Represented in hero bullets / quick facts. */
  highlights: string[];
};

export const locations: Location[] = [
  {
    slug: 'ocala',
    city: 'Ocala',
    county: 'Marion County',
    displayName: 'Ocala, FL',
    shortDescription:
      'Your local Ocala plumbers. Family-owned since 2008, serving every neighborhood from downtown to SW 60th.',
    metaDescription:
      "Plumbers in Ocala, FL. Floyd's Plumbing offers 24/7 emergency service, water heaters, repipes, drain cleaning, and backflow testing. Licensed & insured since 2008.",
    neighborhoods: [
      'Downtown Ocala',
      'Stone Creek',
      'On Top of the World',
      'Colessa',
      'Marion Oaks',
      'Ocala Palms',
      'Silver Springs',
      'Fore Ranch'
    ],
    paragraphs: [
      "Floyd's Plumbing has been the go-to local plumber in Ocala since 2008. From historic homes near Tuscawilla Park to new builds in Stone Creek and Colessa, we know the quirks of Ocala plumbing, from hard-water fixtures to aging polybutylene in 1980s neighborhoods.",
      'Our trucks are based in Ocala and we typically reach any address within city limits in under 45 minutes. 24/7 emergency service means a real plumber answers, not a call center.',
      'Whether you need a same-day water heater swap, a whole-home repipe, or backflow testing for your irrigation, we show up on time, price it straight, and clean up after.'
    ],
    highlights: [
      'Under-45-minute response within city limits',
      '24/7 emergency dispatch',
      'Experienced with Stone Creek, On Top of the World, Colessa',
      'Florida Certified Plumbing Contractor'
    ]
  },
  {
    slug: 'belleview',
    city: 'Belleview',
    county: 'Marion County',
    displayName: 'Belleview, FL',
    shortDescription:
      'Belleview plumbers for homes and businesses off US-441. Fast response, upfront pricing.',
    metaDescription:
      "Plumbers in Belleview, FL. Water heaters, leak detection, drain cleaning, and 24/7 emergency service from Floyd's Plumbing.",
    neighborhoods: ['Lake Lillian', 'Belleview Heights', 'Spruce Creek Country Club', 'US-441 corridor'],
    paragraphs: [
      "Belleview sits right in our service sweet spot, and we cover every neighborhood from Lake Lillian down through Spruce Creek. Many homes here were built between the 70s and 90s, which means we spend a lot of time on polybutylene replacement, cast-iron sewer repair, and aging water heater swaps.",
      "Well water is common outside the city limits. We service well pumps, pressure tanks, and whole-home filtration for the parts of Belleview that are not on municipal water.",
      "Call us for anything from a slow bathroom drain to a full repipe. We treat Belleview calls the same as our Ocala neighbors."
    ],
    highlights: [
      'Well pump and pressure tank specialists',
      'Experienced with Spruce Creek plumbing',
      'Polybutylene and cast iron replacement',
      '24/7 emergency response'
    ]
  },
  {
    slug: 'dunnellon',
    city: 'Dunnellon',
    county: 'Marion County',
    displayName: 'Dunnellon, FL',
    shortDescription:
      'Dunnellon plumbers for Rainbow Springs, Rainbow Lakes Estates, and older homes along the Withlacoochee.',
    metaDescription:
      "Plumbers in Dunnellon, FL. Floyd's Plumbing services Rainbow Springs, Rainbow Lakes Estates, and the greater Dunnellon area.",
    neighborhoods: ['Rainbow Springs', 'Rainbow Lakes Estates', 'Juliette Falls', 'Vogt Springs'],
    paragraphs: [
      "Dunnellon has some of our favorite customers: homeowners who care about their property and appreciate work that lasts. From the beautiful homes in Rainbow Springs to the more rural Rainbow Lakes Estates, we know this area well.",
      "Many Dunnellon homes run on well water, and we are the local experts on well pumps, pressure tanks, softeners, and iron removal. We also handle plenty of septic-adjacent plumbing (though we do not service the tanks themselves).",
      "We do not charge extra for the drive. Dunnellon customers get the same pricing as Ocala."
    ],
    highlights: [
      'Rainbow Springs and RLE specialists',
      'Well pump and iron filtration expertise',
      'No extra drive fee from Ocala',
      '24/7 emergency response'
    ]
  },
  {
    slug: 'silver-springs-shores',
    city: 'Silver Springs Shores',
    county: 'Marion County',
    displayName: 'Silver Springs Shores, FL',
    shortDescription:
      'Plumbers serving Silver Springs Shores with fast response times for repairs, water heaters, and repipes.',
    metaDescription:
      "Plumbers in Silver Springs Shores, FL. Floyd's Plumbing handles repairs, water heaters, drain cleaning, and backflow testing.",
    neighborhoods: ['Baseline Rd corridor', 'SE 95th Street', 'Silver Springs Shores North', 'Silver Springs Shores South'],
    paragraphs: [
      "Silver Springs Shores is close to home for us, typically 20-30 minutes from our Ocala dispatch even during rush hour. The mix of 70s/80s tract homes and newer construction keeps us busy with everything from fixture upgrades to full repipes.",
      "Pressure-reducing valves tend to fail around the 15-year mark here, and that is the single biggest cause of pinhole leaks in copper. Ask us to check yours while we are on site for any other service."
    ],
    highlights: [
      'Fast 20-30 minute response',
      'Pressure regulator and PRV specialists',
      'Experienced with 70s-90s tract homes',
      'Upfront flat-rate pricing'
    ]
  },
  {
    slug: 'summerfield',
    city: 'Summerfield',
    county: 'Marion County',
    displayName: 'Summerfield, FL',
    shortDescription:
      'Summerfield plumbers serving Stonecrest, Del Webb Spruce Creek, and the 55+ communities along CR-484.',
    metaDescription:
      "Plumbers in Summerfield, FL. Serving Stonecrest, Del Webb Spruce Creek, and surrounding communities. Floyd's Plumbing.",
    neighborhoods: ['Stonecrest', 'Del Webb Spruce Creek', 'Summerfield Highlands', 'Spruce Creek South'],
    paragraphs: [
      "Summerfield and the 55+ communities in this corridor are a big part of our week. We know the typical plumbing setups in Stonecrest and Del Webb Spruce Creek, and we have opened more under-sink cabinets in these neighborhoods than we can count.",
      "Senior discounts apply here automatically: 10% off labor, no asking required. We explain work in plain language, we do not upsell unnecessary equipment, and we respect the fact that you have probably dealt with less-than-honest tradespeople before."
    ],
    highlights: [
      'Stonecrest & Del Webb specialists',
      'Automatic 10% senior discount on labor',
      'Straight-talk pricing, no upselling',
      'Clean, respectful technicians'
    ]
  },
  {
    slug: 'anthony',
    city: 'Anthony',
    county: 'Marion County',
    displayName: 'Anthony, FL',
    shortDescription:
      'Plumbers serving Anthony, Sparr, and the north Marion County farmland: well pumps, repipes, and more.',
    metaDescription:
      "Plumbers in Anthony, FL. Well pump service, repipes, water heaters, and 24/7 emergency plumbing. Floyd's Plumbing.",
    neighborhoods: ['Anthony', 'Sparr', 'Reddick corridor'],
    paragraphs: [
      "North of Ocala we cover Anthony, Sparr, and the Reddick corridor. Plenty of rural properties on well systems and older farmhouse plumbing up here.",
      "Big-tank water heaters, twin-softener systems, and constant-pressure well upgrades are our bread and butter in this area."
    ],
    highlights: [
      'Rural well system specialists',
      'Large-tank water heater install',
      'Constant-pressure VFD upgrades',
      '24/7 emergency response'
    ]
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
