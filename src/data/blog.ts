export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string */
  publishedAt: string;
  author: string;
  readMinutes: number;
  /** Markdown-lite paragraphs. Basic HTML allowed. */
  bodyHtml: string;
};

export const posts: BlogPost[] = [
  {
    slug: 'how-to-shut-off-your-water-ocala',
    title: 'How to Shut Off Your Water (Before the Plumber Gets There)',
    description:
      'Every Ocala homeowner should know where their main shut-off is. Here is how to find it and how to use it in an emergency.',
    publishedAt: '2026-01-14',
    author: "Floyd's Plumbing",
    readMinutes: 4,
    bodyHtml: `
<p>The single most important skill a homeowner can have is knowing how to shut off their water. When a pipe bursts, a toilet overflows, or a water heater fails, every minute counts, and most water damage happens in the first 10 minutes.</p>

<h2>Where to find your main shut-off</h2>
<p>On a city water connection in Ocala, you have two potential shut-offs:</p>
<ul>
  <li><strong>The house shut-off:</strong> Usually near where the main line enters the house, often on the outside wall nearest the water meter, or in a utility closet on the inside.</li>
  <li><strong>The street shut-off:</strong> A valve in the meter box at the curb. This requires a meter key (a long T-handle tool), and we recommend keeping one in the garage.</li>
</ul>
<p>On a well system, your shut-off is usually next to the pressure tank, and killing power to the pump is just as effective.</p>

<h2>How to use it</h2>
<p>Turn the valve <strong>clockwise</strong> (righty-tighty) until it stops. If it's a ball valve, a quarter turn is all it takes. If it's an old gate valve, keep turning; they take several full rotations to close.</p>

<h2>What to do next</h2>
<ol>
  <li>Open a faucet at the lowest point in the house to drain residual pressure.</li>
  <li>If the leak is near your water heater, kill power to the heater at the breaker.</li>
  <li>Snap photos of any visible damage for your insurance claim.</li>
  <li>Call us.</li>
</ol>
<p>If you've never tested your shut-off, do it now, before you need it. Old valves can seize up. If yours won't turn, we can replace it with a modern quarter-turn ball valve in under an hour.</p>
    `
  },
  {
    slug: 'signs-you-need-a-repipe',
    title: '5 Signs You May Need a Whole-Home Repipe',
    description:
      'Pinhole leaks, rust-colored water, and declining pressure are all signs that your home plumbing needs more than another patch.',
    publishedAt: '2025-11-22',
    author: "Floyd's Plumbing",
    readMinutes: 5,
    bodyHtml: `
<p>A whole-home repipe is a big project, and nobody does one unless they have to. That said, there are warning signs that tell you another patch is just throwing money at a system that's reaching end of life.</p>

<h2>1. Pinhole leaks in copper</h2>
<p>If you've had more than one pinhole leak in the past two years, it's very likely your pressure-reducing valve (PRV) failed and your house is running at 100+ PSI. That pressure blasts thin spots through copper pipe. A repipe in PEX usually pays for itself before the third leak.</p>

<h2>2. Polybutylene (gray plastic) pipe</h2>
<p>If your home was built between 1978 and 1995 and you see gray plastic pipe, you probably have polybutylene. It's a ticking time bomb. It was the subject of one of the largest class-action settlements in US construction history. Insurance companies know it, and some won't renew policies on homes still running poly.</p>

<h2>3. Rusty or discolored water</h2>
<p>On galvanized pipe (older homes), the inside of the pipe corrodes from the inside out. You'll start seeing rust-colored water, especially after the house has sat idle for a day. By the time the water is visibly discolored, the pipe walls are already thin.</p>

<h2>4. Pressure keeps dropping</h2>
<p>Low water pressure can be a PRV issue, a blockage, or pipe that's closed down from decades of mineral buildup. If you've ruled out the first two, the pipes themselves may be the problem.</p>

<h2>5. Multiple repairs in one year</h2>
<p>If you've called us (or anyone) more than twice in the past year for plumbing leaks, the math usually favors a repipe.</p>

<p>We offer free repipe estimates and financing through Wisetack. Most whole-home repipes in Ocala run 2–4 days with water restored every night.</p>
    `
  },
  {
    slug: 'florida-backflow-testing-guide',
    title: 'Florida Backflow Testing: What Homeowners & Businesses Need to Know',
    description:
      'Annual backflow testing is required on most assemblies in Florida. Here is how often, who tests, and what happens if you miss it.',
    publishedAt: '2025-09-08',
    author: "Floyd's Plumbing",
    readMinutes: 6,
    bodyHtml: `
<p>If you have an irrigation system, a commercial building, or certain types of residential connections, you probably have a backflow prevention assembly. Most Florida utilities require that assembly to be tested <strong>every year</strong> by a certified tester.</p>

<h2>Why backflow matters</h2>
<p>Backflow assemblies keep contaminated water from flowing backwards into the public drinking supply. Without them, a pressure drop in the main could pull fertilizer, sewage, or chemicals into your neighbor's tap. That's why the test is legally required.</p>

<h2>How the test works</h2>
<p>A certified tester shows up with a calibrated test kit, shuts off downstream water, and verifies that the check valves and relief valve in your assembly close properly. The test takes 15–30 minutes per assembly. We file the paperwork directly with your utility.</p>

<h2>What if it fails?</h2>
<p>Most failures are fixable with a rebuild kit (springs and seals). We usually carry kits on the truck for the common models: Watts 909, Wilkins 975XL, Febco 860, and Zurn 375. If the whole assembly is corroded or out of spec, we replace it.</p>

<h2>What if you miss your due date?</h2>
<p>Utilities will issue warnings, then fines, then eventually shut off your water. Don't let it get there. We send reminders to our backflow customers automatically.</p>
    `
  },
  {
    slug: 'hard-water-marion-county',
    title: 'Hard Water in Marion County: What It Is & What to Do About It',
    description:
      'Central Florida sits on the Floridan Aquifer, and that means hard water. Here is how it affects your home and how to treat it.',
    publishedAt: '2025-07-18',
    author: "Floyd's Plumbing",
    readMinutes: 5,
    bodyHtml: `
<p>The water coming out of your tap in Ocala is generally safe, clean, and delicious, but it's also <em>hard</em>. Really hard. Marion County sits on top of the Floridan Aquifer, which is loaded with dissolved calcium and magnesium picked up from the limestone below Florida.</p>

<h2>How hard is Ocala water?</h2>
<p>Most city connections in Ocala test between 15 and 20 grains per gallon, which the water industry classifies as "very hard." Well water can go higher, and often adds iron and sulfur to the party.</p>

<h2>What hard water does</h2>
<ul>
  <li>Scales up water heaters (cuts efficiency by 20–30% after a few years)</li>
  <li>Shortens tankless water heater life dramatically if not treated</li>
  <li>Clogs fixtures, especially shower heads and faucet aerators</li>
  <li>Leaves spots on glassware and streaks on shower doors</li>
  <li>Makes soap and shampoo perform worse</li>
  <li>Can dry out skin and hair</li>
</ul>

<h2>How to fix it</h2>
<p>A properly sized water softener solves almost all of it. We test your water on-site and size the unit to your household's usage and the actual hardness of your specific supply. For well water with iron or sulfur, we add pre-treatment.</p>

<p>If you're on a budget, a whole-home softener is usually $1,800–$2,800 installed. Tankless water heater owners: a softener plus annual descaling will double the life of your unit.</p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
