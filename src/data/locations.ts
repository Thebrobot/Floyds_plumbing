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
      'The Villages',
      'Stone Creek',
      'On Top of the World',
      'Calesa Township',
      'Marion Oaks',
      'Ocala Palms',
      'Silver Springs',
      'Fore Ranch'
    ],
    paragraphs: [
      "Floyd's Plumbing has been the go-to local plumber in Ocala since 2008. From historic homes near Tuscawilla Park to new builds in On Top of the World, The Villages area, Stone Creek, and Calesa Township, we know the quirks of Ocala plumbing, from hard-water fixtures to aging polybutylene in 1980s neighborhoods.",
      'Our trucks are based in Ocala and we typically reach any address within city limits in under 45 minutes. 24/7 emergency service means a real plumber answers, not a call center.',
      'Whether you need a same-day water heater swap, a whole-home repipe, or backflow testing for your irrigation, we show up on time, price it straight, and clean up after.'
    ],
    highlights: [
      'Under-45-minute response within city limits',
      '24/7 emergency dispatch',
      'Experienced with On Top of the World, The Villages area, Stone Creek, and Calesa Township',
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
      "Plumbers in Belleview, FL. Water heaters, drain cleaning, repairs, and 24/7 emergency service from Floyd's Plumbing.",
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
    neighborhoods: ['US-301 north corridor', 'Marion County farmland', 'Acreage & well systems'],
    paragraphs: [
      "North of Ocala we cover Anthony and the wider north Marion corridor, including many rural properties on well systems and older farmhouse plumbing.",
      "Big-tank water heaters, twin-softener systems, and constant-pressure well upgrades are our bread and butter in this area."
    ],
    highlights: [
      'Rural well system specialists',
      'Large-tank water heater install',
      'Constant-pressure VFD upgrades',
      '24/7 emergency response'
    ]
  },
  {
    slug: 'the-villages',
    city: 'The Villages',
    county: 'Marion, Lake & Sumter Counties',
    displayName: 'The Villages, FL',
    shortDescription:
      'Plumbers serving The Villages from our Ocala base: water heaters, repipes, backflow, remodels, and 24/7 emergency service.',
    metaDescription:
      "Plumbers in The Villages, FL. Floyd's Plumbing serves Marion, Lake, and Sumter portions of The Villages with licensed, insured service since 2008.",
    neighborhoods: [
      'Spanish Springs',
      'Lake Sumter Landing',
      'Brownwood',
      'Southern Oaks',
      'Marsh Bend'
    ],
    paragraphs: [
      "The Villages is one of the busiest plumbing markets in Central Florida, and we treat Villages homeowners with the same flat-rate honesty we are known for in Ocala. Whether you are in the Marion County side near CR-466 or farther toward Lake and Sumter County villages, we plan drive time realistically and show up when we say we will.",
      "We handle the work you see most in active-adult communities: tank and tankless water heater changeouts, whole-home repipes where polybutylene or galvanized is failing, kitchen and bath remodels, irrigation backflow testing, and emergency leak response when a supply line lets go behind a cabinet.",
      "Senior-friendly service is automatic: we explain options in plain language, we do not upsell equipment you do not need, and we clean up like guests in your home."
    ],
    highlights: [
      'Active-adult community experience',
      'Tankless & standard water heater installs',
      'Backflow testing for irrigation',
      '24/7 emergency dispatch'
    ]
  },
  {
    slug: 'on-top-of-the-world',
    city: 'On Top of the World',
    county: 'Marion County',
    displayName: 'On Top of the World, FL',
    shortDescription:
      'On Top of the World plumbers for golf-course homes, villas, and condos: repairs, water heaters, repipes, and remodel coordination.',
    metaDescription:
      "Plumbers in On Top of the World, Ocala FL. Floyd's Plumbing serves OTOW with 24/7 emergency service, repipes, water heaters, and remodel support.",
    neighborhoods: ['Indigo East', 'Indigo West', 'Candler Hills', 'Paddock Square area', 'Ocala SW corridor'],
    paragraphs: [
      "On Top of the World is a major part of our weekly routes. We know the typical builder packages, clubhouse-adjacent villas, and the fixture schedules common in newer construction here, as well as the maintenance calls that show up after the first decade of ownership.",
      "From under-slab leak investigation to visible repipes before you sell, we coordinate with your HOA rules of entry, schedule around golf traffic, and keep dust mats down in entryways.",
      "If you are comparing quotes, ask us about our written flat-rate pricing and Florida CFC licensing. We answer the phone ourselves, not a call center."
    ],
    highlights: [
      'Frequent OTOW service calls',
      'HOA-conscious scheduling & cleanup',
      'Repipe & polybutylene experience',
      'Written flat-rate pricing before work starts'
    ]
  },
  {
    slug: 'citra',
    city: 'Citra',
    county: 'Marion County',
    displayName: 'Citra, FL',
    shortDescription:
      'Citra plumbers for well systems, rural homes, and US-301 corridor properties. No mileage surcharges for Marion County neighbors.',
    metaDescription:
      "Plumbers in Citra, FL. Well pumps, water softeners, repipes, and emergency plumbing from Floyd's Plumbing, Ocala-based since 2008.",
    neighborhoods: ['Orange Lake area', 'US-301 corridor', 'Cross Creek', 'Citra northeast Marion'],
    paragraphs: [
      "Citra and the surrounding farmland are classic north Marion County: well water, pressure tanks, iron staining, and older supply lines that finally give out during a cold snap.",
      "We install and repair constant-pressure systems, twin-tank softeners, whole-home filtration, and traditional large-tank water heaters sized for big families on acreage.",
      "Emergency service still means a real plumber on the line. Call us for burst lines, dead well pumps, or backed-up drains."
    ],
    highlights: [
      'Well pump & pressure tank experts',
      'Iron filtration & softener sizing',
      'Same pricing as in-town Ocala',
      '24/7 emergency response'
    ]
  },
  {
    slug: 'mcintosh',
    city: 'McIntosh',
    county: 'Marion County',
    displayName: 'McIntosh, FL',
    shortDescription:
      'McIntosh plumbers for historic homes, lake-area properties, and rural Marion County plumbing near Orange Lake.',
    metaDescription:
      "Plumbers in McIntosh, FL. Floyd's Plumbing repairs vintage supply lines, drains, water heaters, and well-related plumbing throughout the McIntosh area.",
    neighborhoods: ['McIntosh Historic District', 'Orange Lake vicinity', 'Anton Road area', 'Marion County lake homes'],
    paragraphs: [
      "McIntosh is one of Marion County's most charming small towns, and many homes here still have original galvanized or early copper that benefits from careful repair planning rather than quick patches.",
      "We respect older slab layouts, crawlspaces where they exist, and the tree-root patterns that affect sewer laterals toward the lake.",
      "Whether you need a tasteful bath remodel that preserves character or an emergency Saturday repair before guests arrive, we treat McIntosh customers like neighbors, because you are."
    ],
    highlights: [
      'Historic home plumbing experience',
      'Sewer lateral & root intrusion work',
      'Water heater & fixture upgrades',
      '24/7 emergency service'
    ]
  },
  {
    slug: 'reddick',
    city: 'Reddick',
    county: 'Marion County',
    displayName: 'Reddick, FL',
    shortDescription:
      'Reddick plumbers for farms, ranchettes, and US-441/US-301 crossroads properties. Well systems and large-family plumbing.',
    metaDescription:
      "Plumbers in Reddick, FL. Floyd's Plumbing serves Reddick and north Marion County with wells, repipes, water heaters, and 24/7 emergency plumbing.",
    neighborhoods: ['Reddick town center', 'US-441 corridor', 'North Marion farmland', 'Orange Blossom Hills area'],
    paragraphs: [
      "Reddick sits where a lot of Marion County traffic passes through, but the plumbing stories here are rural: long runs to barns, irrigation tees, softeners fighting tannin-stained water, and water heaters that finally die after a houseful of teenagers.",
      "We stock common well fittings and pressure switches on our trucks so the first trip fixes more jobs without a parts run.",
      "Call us for anything from a leaking yard hydrant to a full kitchen relocation during a barndominium build."
    ],
    highlights: [
      'Well & irrigation tie-in experience',
      'Large-capacity water heater installs',
      'Fast drive times from Ocala dispatch',
      '24/7 emergency line'
    ]
  },
  {
    slug: 'sparr',
    city: 'Sparr',
    county: 'Marion County',
    displayName: 'Sparr, FL',
    shortDescription:
      'Sparr plumbers for country homes, well water, and north Marion County. Honest flat-rate pricing from a family-owned crew.',
    metaDescription:
      "Plumbers in Sparr, FL. Well pumps, softeners, repipes, and emergency plumbing from Floyd's Plumbing. Ocala-based, licensed, and insured.",
    neighborhoods: ['Sparr community', 'NE Marion County', 'Farmland east of Anthony', 'CR-200 corridor'],
    paragraphs: [
      "Sparr customers usually share two traits: they are on well water, and they want a plumber who will not invent problems to pad a ticket. We built our reputation on straight answers.",
      "We handle constant-pressure pump controllers, big softeners, whole-house re-pipes when polybutylene shows pinholes, and the occasional septic-adjacent drain work (tanks themselves excluded).",
      "If you are unsure whether you are in our radius, call. We are honest about drive time too."
    ],
    highlights: [
      'Well system troubleshooting',
      'Polybutylene repipe experience',
      'Straight flat-rate estimates',
      '24/7 emergency dispatch'
    ]
  },
  {
    slug: 'fort-mccoy',
    city: 'Fort McCoy',
    county: 'Marion County',
    displayName: 'Fort McCoy, FL',
    shortDescription:
      'Fort McCoy plumbers for east Marion homes, rural lots, and Ocala National Forest-area properties: wells, repairs, and water heaters.',
    metaDescription:
      "Plumbers in Fort McCoy, FL. Floyd's Plumbing offers well-related plumbing, repairs, repipes, and 24/7 emergency service throughout Fort McCoy.",
    neighborhoods: ['Fort McCoy CDP', 'East Marion County', 'CR-316 corridor', 'Rural acreage'],
    paragraphs: [
      "Fort McCoy blends long-time residents, newer rural builds, and weekend retreats. That mix means we see everything from simple PRV replacements to full PEX repipes after freeze damage or insurance claims.",
      "Well pressure and constant-pressure upgrades are common here; we size pumps and tanks for real household demand, not textbook guesses.",
      "We carry Marion County on our trucks every day, with no 'out of area' surcharge games."
    ],
    highlights: [
      'Well pressure & PRV specialists',
      'PEX repipe & insurance coordination',
      'Rural Marion experience',
      '24/7 emergency plumbing'
    ]
  },
  {
    slug: 'weirsdale',
    city: 'Weirsdale',
    county: 'Marion County',
    displayName: 'Weirsdale, FL',
    shortDescription:
      'Weirsdale plumbers along US-27 between The Villages and Ocala: fast response, upfront pricing, licensed Florida plumbing contractor.',
    metaDescription:
      "Plumbers in Weirsdale, FL. Floyd's Plumbing serves Weirsdale with water heaters, drains, repipes, remodels, and 24/7 emergency service.",
    neighborhoods: ['Weirsdale community', 'US-27 corridor', 'Lake Weir area', 'Marion south toward Fruitland Park'],
    paragraphs: [
      "Weirsdale sits on the busy US-27 spine connecting Ocala to The Villages, and we route trucks through here daily for scheduled work and emergencies alike.",
      "Lake-area humidity and hard water chew through fixtures faster than inland Florida averages, so we recommend quality valve cartridges and anode checks during any water heater service.",
      "Remodels, guest-bath additions, and outdoor-kitchen gas lines are all in our wheelhouse."
    ],
    highlights: [
      'Daily US-27 corridor coverage',
      'Lake-area hard-water experience',
      'Outdoor kitchen & gas line work',
      '24/7 emergency service'
    ]
  },
  {
    slug: 'stone-creek',
    city: 'Stone Creek',
    county: 'Marion County',
    displayName: 'Stone Creek, FL',
    shortDescription:
      'Stone Creek Ocala plumbers for golf-community homes: water heaters, polybutylene repipes, backflow, and bath remodels.',
    metaDescription:
      "Plumbers in Stone Creek, Ocala FL. Floyd's Plumbing serves Stone Creek with repipes, tankless water heaters, backflow testing, and 24/7 emergency service.",
    neighborhoods: ['Stone Creek', 'SW Marion County', 'Ocala master-planned 55+', 'Southwest Marion corridor'],
    paragraphs: [
      "Stone Creek is one of Ocala's largest master-planned golf communities, and our crews are inside these homes weekly for predictable maintenance and the occasional middle-of-the-night emergency.",
      "We know the common builder valve locations, hose bib layouts, and irrigation backflow setups that inspectors flag during real estate transactions. If you are buying or selling, ask for a whole-house plumbing health check.",
      "Ask us about current promotions for active-adult communities. We treat Stone Creek neighbors with the same flat-rate transparency as the rest of Marion County."
    ],
    highlights: [
      'Stone Creek weekly routes',
      'Irrigation backflow testing',
      'Tankless & tank water heater installs',
      'Pre-listing plumbing health checks'
    ]
  },
  {
    slug: 'calesa-township',
    city: 'Calesa Township',
    county: 'Marion County',
    displayName: 'Calesa Township, FL',
    shortDescription:
      'Plumbers in Calesa and Calesa Township for new construction & newer homes: fixture schedules, water heaters, softeners, and warranty-smart installs.',
    metaDescription:
      "Calesa plumbers & Calesa Township, Ocala FL. Floyd's Plumbing serves the Calesa community for new builds, water heaters, softeners, repipes, and 24/7 emergency service.",
    neighborhoods: ['Calesa', 'Calesa Township', 'Ocala southeast growth area', 'New construction phases', 'Marion County master plan'],
    paragraphs: [
      "People search for both Calesa and Calesa Township. It is the same southeast Ocala master plan, and we treat every phase the same. We love partnering with homeowners who want plumbing done once, the right way, before drywall hides mistakes.",
      "We coordinate with builders on rough-in heights, shower valve depth, outdoor kitchen gas, and whole-home water treatment when city or well chemistry demands it.",
      "Even brand-new homes get leaks and failed pressure regulators; save our number for fast warranty-adjacent troubleshooting that does not get lost in a national builder phone tree."
    ],
    highlights: [
      'New-construction rough-in expertise',
      'Whole-home softener & filtration design',
      'Tankless & hybrid water heater installs',
      '24/7 emergency line'
    ]
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
