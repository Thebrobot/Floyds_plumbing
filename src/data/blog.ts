export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string */
  publishedAt: string;
  author: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
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
    readMinutes: 9,
    image: '/images/blog/blog-shut-off-water.webp',
    imageAlt: 'Hand turning a brass main water shut-off valve in a residential utility area',
    bodyHtml: `
<p>The single most important skill a homeowner can have is knowing how to shut off their water. When a pipe bursts, a toilet overflows, or a water heater fails, every minute counts. Most water damage happens in the first 10 minutes, and in Marion County, where many homes sit on slab foundations with limited crawlspace access, a burst line can soak drywall, flooring, and insulation before you even figure out where the valve is.</p>
<p>This guide walks you through every shut-off in a typical Ocala home, when to use which one, and what to do in the minutes between shutting off the water and our truck arriving.</p>

<h2>Know your shut-offs before you need them</h2>
<p>Most homeowners have never touched their main shut-off. That's normal, until it isn't. Take 15 minutes this weekend to locate every valve in your house and test the ones you can reach. Write down the locations on a piece of tape inside your utility closet or garage panel. Future-you will be grateful.</p>

<h2>Your main house shut-off</h2>
<p>On a city water connection in Ocala, your primary shut-off is usually near where the main line enters the house. Common locations in Marion County homes:</p>
<ul>
  <li><strong>Garage wall:</strong> Very common in Ocala ranch-style and newer construction. Look for a pipe coming through the exterior wall with a valve handle nearby.</li>
  <li><strong>Utility closet or laundry room:</strong> Often paired with the water heater or washing machine hookups.</li>
  <li><strong>Outside near the meter:</strong> Some older homes in neighborhoods like Tuscawilla, Pine Oaks, and the historic district have the shut-off on an exterior wall closest to the street.</li>
  <li><strong>Crawlspace or attic:</strong> Less common locally, but some split-level and two-story homes route the main line overhead or below.</li>
</ul>
<p>The valve itself will be one of two types:</p>
<ul>
  <li><strong>Ball valve:</strong> A lever handle. Parallel to the pipe = open. Turn it a quarter turn so the handle is perpendicular to the pipe = closed. This is the best type. Fast, reliable, and easy to operate under stress.</li>
  <li><strong>Gate valve:</strong> A round wheel handle. Takes multiple full rotations to close. Common on older homes. These seize up over time. If yours hasn't been turned in years, it may not close fully when you need it.</li>
</ul>

<h2>The street shut-off (meter box)</h2>
<p>Every Ocala home on city water also has a shut-off in the meter box at the curb. This is your backup if the house valve fails or you can't find it. The box is usually a rectangular concrete or plastic lid flush with the ground near the street.</p>
<p>Opening it requires a <strong>meter key</strong>, a long T-handle tool that lifts the lid and operates the valve inside. We recommend keeping one in the garage. They cost about $15 at any hardware store and take up almost no space.</p>
<p>Inside the box you'll see the water meter and a valve on the house side of it. Turn it clockwise to shut off. <strong>Important:</strong> The utility's valve on the street side of the meter is technically their property. Use the house-side valve unless it's an absolute emergency and your house valve won't close.</p>

<h2>Well system shut-offs</h2>
<p>If you're on a well, common in rural Marion County areas like Fort McCoy, Sparr, and Weirsdale, your shut-off is usually next to the pressure tank in a pump house, garage, or utility closet. Look for a valve on the pipe between the tank and the house.</p>
<p>On a well, you also have a second option: <strong>kill power to the pump at the breaker.</strong> The pump will stop pushing water, which stops the leak even if you can't reach the valve. Know which breaker controls your well pump and label it.</p>

<h2>Individual fixture shut-offs</h2>
<p>Not every leak requires shutting off the whole house. Most fixtures have their own local shut-off, and using the right one can save you from a cold shower or a night without any water at all.</p>

<h3>Toilets</h3>
<p>Look behind the toilet near the floor. There's a small oval handle on the supply line. Turn it clockwise. This stops water to that toilet only. Use this for an overflowing toilet or a leaking fill valve.</p>

<h3>Sinks</h3>
<p>Under the vanity, two small oval handles on the supply lines: one hot, one cold. Turn both clockwise. Kitchen sinks usually have the same setup inside the cabinet below.</p>

<h3>Washing machine</h3>
<p>Two lever or oval handles behind the washer where the hoses connect. Shut both off. If a supply hose bursts, these valves can prevent thousands of dollars in laundry room damage.</p>

<h3>Water heater</h3>
<p>A valve on the cold water inlet pipe at the top of the unit. Shutting this off stops water from entering the tank but doesn't drain what's already inside. If the tank itself is leaking, also kill power (electric) or set gas to pilot/off at the unit.</p>

<h2>How to shut off water: step by step</h2>
<ol>
  <li><strong>Stay calm and locate the leak.</strong> Is it a single fixture or a pipe in the wall?</li>
  <li><strong>Use the closest shut-off.</strong> Fixture valve first if the leak is isolated. Main house valve if it's a pipe burst or you can't tell where it's coming from.</li>
  <li><strong>Turn clockwise</strong> (righty-tighty) until the valve stops. Ball valve = quarter turn. Gate valve = keep turning until it won't go further.</li>
  <li><strong>Open a faucet at the lowest point in the house</strong> to drain residual pressure from the lines. This slows any remaining drip.</li>
  <li><strong>Kill power to the water heater</strong> at the breaker if the leak is anywhere near the unit or in the hot water line.</li>
  <li><strong>Move valuables away from the wet area</strong> and set towels or buckets if water is still dripping.</li>
  <li><strong>Take photos</strong> of all visible damage for your insurance claim before anything dries or gets moved.</li>
  <li><strong>Call us.</strong> Even if you've stopped the leak, the repair still needs to happen. Hidden moisture causes mold fast in Florida's humidity.</li>
</ol>

<h2>Common mistakes we see</h2>
<ul>
  <li><strong>Only shutting off one supply line.</strong> If a pipe burst in the wall, a fixture shut-off won't help. Go to the main.</li>
  <li><strong>Forcing a seized valve.</strong> If the handle won't budge, don't break it off. Use the meter box shut-off or call us. We carry pipe freeze kits and can isolate sections without a working main valve.</li>
  <li><strong>Forgetting the water heater.</strong> A leak near the heater with the power still on is a safety hazard. Always hit the breaker.</li>
  <li><strong>Not testing valves ahead of time.</strong> A valve that hasn't moved in 10 years may not close all the way. Test yours annually.</li>
  <li><strong>Waiting too long to call.</strong> Shutting off the water is step one, not the finish line. Corroded pipes, failed fittings, and slab leaks all need professional repair.</li>
</ul>

<h2>When to call a plumber vs. handle it yourself</h2>
<p>Shutting off the water is always a DIY job. Every homeowner should know how. <strong>Repairing the leak is where the line is.</strong> Call us if:</p>
<ul>
  <li>The leak is inside a wall, under the slab, or in the main line</li>
  <li>Your shut-off valve is broken or won't close fully</li>
  <li>Water is near electrical panels, outlets, or your HVAC system</li>
  <li>You see mold, sagging drywall, or water spreading across multiple rooms</li>
  <li>The same fixture or pipe has leaked before. It's telling you something</li>
</ul>

<h2>Test your shut-off this weekend</h2>
<p>If you've never tested your shut-off, do it now, before you need it. Turn the main valve off, open a faucet to confirm the flow stops, then turn it back on. If the valve is stiff, a shot of penetrating oil and gentle back-and-forth movement can free it up. If it won't turn at all, we can replace it with a modern quarter-turn ball valve in under an hour. That's one of the cheapest insurance policies you'll ever buy.</p>
    `
  },
  {
    slug: 'signs-you-need-a-repipe',
    title: '5 Signs You May Need a Whole-Home Repipe',
    description:
      'Pinhole leaks, rust-colored water, and declining pressure are all signs that your home plumbing needs more than another patch.',
    publishedAt: '2025-11-22',
    author: "Floyd's Plumbing",
    readMinutes: 11,
    image: '/images/blog/blog-repipe-signs.webp',
    imageAlt: 'New PEX pipes alongside old corroded galvanized and polybutylene plumbing',
    bodyHtml: `
<p>A whole-home repipe is a big project, and nobody does one unless they have to. That said, there are warning signs that tell you another patch is just throwing money at a system that's reaching end of life. In Ocala and Marion County, we see three pipe generations in homes built from the 1960s through the early 2000s: galvanized steel, polybutylene, and copper. Each one fails in its own predictable way.</p>
<p>Knowing which pipe you have and what stage of failure it's in can save you from an emergency call at 2 AM and help you plan (and budget) for the right fix.</p>

<h2>What pipe is in your Ocala home?</h2>
<p>Before you can read the warning signs, it helps to know what you're working with:</p>
<ul>
  <li><strong>Galvanized steel (pre-1970s):</strong> Common in Ocala's older neighborhoods: Tuscawilla, the historic district, and early Pine Oaks builds. Gray metal pipe that corrodes from the inside out. Most of it is well past its useful life.</li>
  <li><strong>Polybutylene (1978–1995):</strong> Gray or blue-gray flexible plastic. Installed in huge volumes during Ocala's building boom. Prone to sudden failure at fittings and elbows with no warning.</li>
  <li><strong>Copper (1970s–2000s):</strong> Still the gold standard when properly installed. But in Marion County's hard water at high pressure, copper develops pinhole leaks, especially if the PRV failed or was never installed.</li>
  <li><strong>PEX (2000s–present):</strong> Flexible plastic, color-coded (red for hot, blue for cold). If your home already has PEX, you likely don't need a repipe unless there was a bad install.</li>
</ul>
<p>Not sure what you have? Check under a sink or behind the water heater. Or call us for a free pipe assessment. We can tell you in about 10 minutes.</p>

<h2>1. Pinhole leaks in copper</h2>
<p>A pinhole leak is exactly what it sounds like: a tiny hole that sprays a fine mist or drip from an otherwise solid-looking copper pipe. They're deceptive because the pipe looks fine on the outside while the inside has been eaten away by erosion corrosion, accelerated by Marion County's hard water.</p>
<p>If you've had <strong>more than one pinhole leak in the past two years</strong>, it's very likely your pressure-reducing valve (PRV) failed and your house is running at 100+ PSI. Municipal pressure in Ocala can hit 80–120 PSI at the street. Your home's plumbing is designed for 50–60 PSI. That extra pressure blasts through thin spots in copper pipe like a pressure washer through a paper towel.</p>
<p><strong>What a patch costs vs. a repipe:</strong> Each pinhole repair runs $200–$400. By the third leak, you've spent nearly what a partial repipe would cost, except the rest of the pipe is the same age and condition as the section that just failed. A full repipe in PEX usually pays for itself before the third leak, and you stop worrying about which wall is next.</p>

<h2>2. Polybutylene (gray plastic) pipe</h2>
<p>If your home was built between 1978 and 1995 and you see gray plastic pipe at any fixture, you probably have polybutylene, often called "poly-B." It was marketed as the pipe of the future. It wasn't.</p>
<p>Poly-B fails at fittings, elbows, and anywhere it was bent too sharply during install. The failure is often sudden and catastrophic, not a slow drip but a full burst. It was the subject of one of the largest class-action settlements in US construction history (Cox v. Shell, $1.1 billion). That settlement has long since expired, so every poly-B failure is now entirely on the homeowner.</p>
<p><strong>Insurance implications:</strong> Insurance companies know what poly-B is. Some won't renew policies on homes still running it. Some require a repipe before issuing coverage. If you're buying or selling a home in Marion County, poly-B is one of the first things a home inspector flags.</p>
<p><strong>Our recommendation:</strong> If you have poly-B, don't wait for it to fail. Plan a repipe on your terms, not at 2 AM on a Saturday.</p>

<h2>3. Rusty or discolored water</h2>
<p>Turn on a faucet in the morning and the water comes out brown, orange, or yellow for a few seconds before clearing up? That's your pipes talking. On galvanized pipe, common in Ocala homes built before 1970, the inside corrodes from the inside out. Rust flakes break loose and ride the water stream to your tap.</p>
<p>By the time the water is visibly discolored, the pipe walls are already dangerously thin. The discoloration is the symptom, not the disease. The disease is a pipe that's nearing the end of its structural life and could burst without further warning.</p>
<p>On copper, blue-green staining at fixtures points to a different problem: acidic water eating the pipe from the inside. Less common locally but worth watching for.</p>

<h2>4. Pressure keeps dropping</h2>
<p>Low water pressure is one of the most common complaints we hear in Marion County, and it has several causes. Before you assume you need a repipe, rule these out:</p>
<ul>
  <li><strong>Failed PRV:</strong> If pressure is too high, the PRV may have failed open. If it's too low, it may be clogged or adjusted wrong. A PRV replacement is $300–$500, much cheaper than a repipe.</li>
  <li><strong>Clogged aerators or showerheads:</strong> Hard water mineral buildup can choke fixtures. Soak them in vinegar overnight before assuming the pipes are the problem.</li>
  <li><strong>Partially closed valves:</strong> Someone turned a shut-off valve most of the way off and forgot. Check your main and fixture valves.</li>
</ul>
<p>If you've ruled all of those out and pressure is still low throughout the house, not just at one fixture, the pipes themselves may be closing down from decades of mineral buildup or internal corrosion. That's a repipe conversation.</p>

<h2>5. Multiple repairs in one year</h2>
<p>This is the simplest math in plumbing. If you've called us (or anyone) more than twice in the past year for leaks in different locations, the system is telling you it's done with patchwork. Each repair is a band-aid on a pipe that's the same age and condition as the one that just failed.</p>
<p>We had a customer in Silver Springs Shores who had four copper pinhole repairs in 14 months: $1,400 total in patches. A full repipe cost $4,200 and came with a warranty. They haven't had a leak since.</p>

<h2>What a whole-home repipe actually looks like</h2>
<p>We know "repipe" sounds like a demolition project. In most Ocala homes, it's not. Here's what to expect:</p>
<ul>
  <li><strong>Timeline:</strong> Most whole-home repipes in Ocala run 2 to 4 days. Water is restored every night, so you're never without water overnight unless something unusual comes up.</li>
  <li><strong>Material:</strong> We use PEX-B (cross-linked polyethylene) for nearly all residential repipes. It flexes around obstacles, resists scale buildup from hard water, and comes with a 25-year manufacturer warranty.</li>
  <li><strong>Access:</strong> We run new lines through attics, crawlspaces, and behind walls using existing access points. We cut drywall only where necessary and patch it when we're done.</li>
  <li><strong>Permits:</strong> We pull the permit, schedule the inspection, and handle the paperwork. You don't need to deal with the county.</li>
  <li><strong>Cleanup:</strong> We vacuum, haul debris, and leave the work area cleaner than we found it. That's not a slogan. It's what our guys are trained to do.</li>
</ul>

<h2>Slab leaks: the wildcard</h2>
<p>Ocala's housing stock includes a lot of slab-on-grade construction, especially in neighborhoods built from the 1970s through the 1990s. In slab homes, some water lines are encased in the concrete foundation. When those leak, you may notice warm spots on the floor, unexplained water bills, or the sound of running water when nothing is on.</p>
<p>Slab leaks don't always require a full repipe. Sometimes we can reroute the affected line through the attic and abandon the slab section. But if the home has poly-B under the slab, a full repipe is almost always the right call.</p>

<h2>Get a free repipe estimate</h2>
<p>We offer free repipe estimates with a written scope of work and a firm price, with no surprises. We're also adding financing options for larger projects, so ask about that when you call. If you're seeing any of the five signs above, it's worth a conversation. The estimate costs you nothing, and the peace of mind is worth a lot.</p>
    `
  },
  {
    slug: 'florida-backflow-testing-guide',
    title: 'Florida Backflow Testing: What Homeowners & Businesses Need to Know',
    description:
      'Annual backflow testing is required on most assemblies in Florida. Here is how often, who tests, and what happens if you miss it.',
    publishedAt: '2025-09-08',
    author: "Floyd's Plumbing",
    readMinutes: 10,
    image: '/images/blog/blog-backflow-testing.webp',
    imageAlt: 'Backflow prevention assembly with test gauge at a Florida irrigation connection',
    bodyHtml: `
<p>If you have an irrigation system, a commercial building, a fire sprinkler system, or certain types of residential connections in Marion County, you probably have a backflow prevention assembly somewhere on your property. And if you do, Florida law requires that assembly to be tested <strong>every year</strong> by a certified tester, with the results filed directly with your water utility.</p>
<p>It's not optional, it's not a suggestion, and missing your test date can result in fines, water shutoffs, and in commercial settings, failed health inspections. Here's everything you need to know.</p>

<h2>What is backflow, and why does it matter?</h2>
<p>Your plumbing system is designed so water flows in one direction: from the public supply, through your pipes, out your fixtures. <strong>Backflow</strong> is when that flow reverses, and contaminated water gets sucked back into the clean public supply.</p>
<p>This isn't theoretical. It happens when there's a sudden pressure drop in the main line: a water main break, a fire hydrant opened nearby, or a pump failure. When pressure drops, water in your pipes can flow backward. If that water has been in contact with fertilizer, pesticides, boiler chemicals, or sewage, it goes straight into the public drinking supply.</p>
<p>Real-world examples that drove backflow laws:</p>
<ul>
  <li>An irrigation system without a backflow preventer pulled lawn chemicals into a neighborhood's drinking water</li>
  <li>A commercial boiler's chemical treatment backflowed into the city main during a pressure event</li>
  <li>A residential hose submerged in a pool (with the spigot open) siphoned pool water into the supply line</li>
</ul>
<p>Backflow prevention assemblies are the physical barrier that stops this. The annual test proves they're still working.</p>

<h2>Who needs backflow testing in Marion County?</h2>
<p>If any of the following apply to your property, you almost certainly have a backflow assembly that needs annual testing:</p>
<ul>
  <li><strong>Irrigation system:</strong> The most common residential trigger. Any in-ground sprinkler system connected to city water needs a backflow preventer and annual test.</li>
  <li><strong>Commercial building:</strong> Restaurants, offices, salons, medical offices, car washes. If it has a commercial water connection in Ocala or Marion County, there's a backflow assembly.</li>
  <li><strong>Fire sprinkler system:</strong> Buildings with fire suppression have dedicated backflow assemblies that require their own annual test.</li>
  <li><strong>Boiler or water treatment system:</strong> Any connection where chemicals are introduced to water.</li>
  <li><strong>Private well with a city water backup:</strong> Dual-supply setups need backflow protection on the city side.</li>
  <li><strong>Residential pool fill line:</strong> Some utilities require backflow protection on dedicated pool fill connections.</li>
</ul>
<p>Not sure if you have one? Check near your water meter, irrigation vacuum breaker box, or the point where your sprinkler system's main line connects to the house supply. It's usually a brass or bronze device about the size of a shoebox.</p>

<h2>Types of backflow assemblies</h2>
<p>Not all backflow preventers are the same. The type installed on your property depends on the hazard level of your connection:</p>
<ul>
  <li><strong>PVB (Pressure Vacuum Breaker):</strong> Common on residential irrigation. Installed above ground, usually in a green box near the meter. Simple and reliable, but must be 12 inches above the highest sprinkler head.</li>
  <li><strong>DCVA (Double Check Valve Assembly):</strong> Used on lower-hazard commercial and residential connections. Two independent check valves in series. Installed horizontally, often in a utility room or underground vault.</li>
  <li><strong>RPZ (Reduced Pressure Zone):</strong> The highest level of protection. Required on high-hazard connections: commercial kitchens, medical facilities, industrial sites. Has two check valves plus a relief valve that dumps water if either fails. Required on most commercial buildings in Ocala.</li>
</ul>
<p>Each type has a different test procedure and different rebuild kit. Our testers are certified on all three.</p>

<h2>How the annual test works</h2>
<p>A certified backflow tester (Florida requires specific certification through the FDEP-approved program) arrives with a calibrated test kit, a set of gauges that measure pressure differential across the check valves.</p>
<p>The process:</p>
<ol>
  <li><strong>Shut off downstream water</strong> to isolate the assembly</li>
  <li><strong>Connect test gauges</strong> to the test cocks (small ports built into the assembly)</li>
  <li><strong>Verify check valve #1 closes</strong> and holds against back pressure</li>
  <li><strong>Verify check valve #2 closes</strong> and holds against back pressure</li>
  <li><strong>Verify the relief valve opens</strong> at the correct pressure differential (RPZ only)</li>
  <li><strong>Record results</strong> on a state-standard test report form</li>
  <li><strong>File the report</strong> with your water utility: City of Ocala, Marion Oaks, Belleview, or whichever provider serves your address</li>
</ol>
<p>The test takes 15 to 30 minutes per assembly. If you have multiple assemblies (irrigation plus fire suppression, for example), each one is tested separately. We file the paperwork directly with your utility so you don't have to.</p>

<h2>What does backflow testing cost?</h2>
<p>In the Ocala and Marion County market, expect to pay <strong>$75–$150 per assembly per year</strong> for the test, filing, and report. If the assembly needs a rebuild (springs and seals), add $50–$120 for parts and labor. A full assembly replacement runs $350–$800 depending on the type and location.</p>
<p>We offer annual backflow testing contracts for commercial properties with multiple assemblies: one scheduled visit, all devices tested, all paperwork filed. Ask about it when you call.</p>

<h2>What if your assembly fails the test?</h2>
<p>Don't panic. Most failures are fixable without replacing the whole unit. The most common causes:</p>
<ul>
  <li><strong>Worn seals and springs:</strong> Fixed with a rebuild kit. We carry kits on the truck for the common models: Watts 909, Wilkins 975XL, Febco 860, and Zurn 375. Rebuild takes about 30 minutes.</li>
  <li><strong>Debris in the check valves:</strong> Sand, sediment, or mineral buildup preventing the valve from seating. A cleaning and rebuild usually solves it.</li>
  <li><strong>Corroded body:</strong> If the assembly housing is corroded or cracked, replacement is the only option. We install the new unit and file the updated registration with your utility.</li>
  <li><strong>Frozen or damaged relief valve (RPZ):</strong> Florida freezes are rare but relief valves can seize from mineral buildup. Rebuild or replace.</li>
</ul>
<p>After a repair or replacement, the assembly must be <strong>retested</strong> to confirm it passes. We handle the retest as part of the repair, with no second trip charge.</p>

<h2>What happens if you miss your test date?</h2>
<p>Florida utilities take backflow compliance seriously. Here's the typical escalation:</p>
<ol>
  <li><strong>Reminder notice:</strong> 30–60 days before your due date, the utility sends a letter or email</li>
  <li><strong>Overdue notice:</strong> If the test isn't filed by the due date, a second notice with a deadline (usually 30 days)</li>
  <li><strong>Fine:</strong> $50–$250 depending on the utility and how far past due you are</li>
  <li><strong>Water shutoff:</strong> If the test still isn't filed, the utility can and will shut off your water service until compliance is restored</li>
</ol>
<p>For commercial properties, an overdue backflow test can also trigger a failed health inspection, which means you can't operate until it's resolved.</p>
<p>We send automatic reminders to our backflow customers before their due date. If you're on our annual testing program, you won't miss a deadline.</p>

<h2>Schedule your backflow test</h2>
<p>Whether you're a homeowner with an irrigation system or a business owner with multiple commercial assemblies, we make the process simple: one call, one visit, paperwork filed. We're certified, we're local, and we've been testing backflow assemblies across Ocala and Marion County for years. Call us to schedule or to set up an annual testing contract.</p>
    `
  },
  {
    slug: 'hard-water-marion-county',
    title: 'Hard Water in Marion County: What It Is & What to Do About It',
    description:
      'Central Florida sits on the Floridan Aquifer, and that means hard water. Here is how it affects your home and how to treat it.',
    publishedAt: '2025-07-18',
    author: "Floyd's Plumbing",
    readMinutes: 10,
    image: '/images/blog/blog-hard-water-marion.webp',
    imageAlt: 'White calcium and limescale buildup on a faucet aerator from hard water',
    bodyHtml: `
<p>The water coming out of your tap in Ocala is generally safe, clean, and delicious, but it's also <em>hard</em>. Really hard. Marion County sits on top of the Floridan Aquifer, one of the most productive groundwater sources in the world, and that aquifer is loaded with dissolved calcium and magnesium picked up from the limestone that makes up most of Florida's subsurface geology.</p>
<p>Hard water isn't a health hazard. You can drink it, cook with it, and bathe in it without concern. But it is absolutely a <strong>plumbing hazard</strong>, and over the years, it quietly costs Marion County homeowners thousands in wasted energy, shortened appliance life, and clogged fixtures.</p>

<h2>How hard is Ocala water?</h2>
<p>Water hardness is measured in <strong>grains per gallon (gpg)</strong>. Here's the scale:</p>
<ul>
  <li>0–1 gpg: Soft</li>
  <li>1–3.5 gpg: Slightly hard</li>
  <li>3.5–7 gpg: Moderately hard</li>
  <li>7–10 gpg: Hard</li>
  <li><strong>10+ gpg: Very hard</strong></li>
</ul>
<p>Most city connections in Ocala test between <strong>15 and 20 gpg</strong>, firmly in the "very hard" category. Well water in rural Marion County can test even higher, often 20–30 gpg, and frequently adds iron (orange staining) and sulfur (rotten egg smell) to the mix.</p>
<p>For context, the national average is about 5 gpg. Ocala's water is three to four times harder than what most of the country deals with. If you moved here from somewhere else and noticed your soap doesn't lather, your glasses come out of the dishwasher cloudy, and your skin feels dry. That's hard water, not your imagination.</p>

<h2>What hard water actually does to your home</h2>
<p>The minerals in hard water don't stay dissolved forever. When water is heated or evaporates, calcium and magnesium come out of solution and stick to everything they touch. Over months and years, the damage compounds.</p>

<h3>Water heaters</h3>
<p>Sediment settles at the bottom of the tank and acts as an insulator between the burner and the water. A water heater with 2 inches of scale at the bottom can lose <strong>20–30% of its heating efficiency</strong>, which means higher electric or gas bills every month. We cover this in detail in our <a href="/blog/hard-water-water-heater-ocala/">water heater and hard water guide</a>.</p>

<h3>Tankless water heaters</h3>
<p>Tankless units are even more vulnerable. The heat exchanger has narrow passages that scale clogs quickly. Without treatment, a tankless water heater in Ocala's hard water can fail in 3–5 years instead of the 15–20 years it's designed to last. Annual descaling is non-negotiable for tankless owners in Marion County.</p>

<h3>Fixtures and faucets</h3>
<p>Showerheads, faucet aerators, and mixing valves clog with white mineral deposits. You'll notice pressure dropping at individual fixtures long before the main lines are affected. Soaking aerators in vinegar helps temporarily, but the buildup returns within weeks.</p>

<h3>Pipes</h3>
<p>Over decades, scale narrows the inside diameter of copper and galvanized pipes. This reduces flow and pressure house-wide. In extreme cases, we've opened pipes in older Ocala homes and found the inside diameter reduced by half.</p>

<h3>Appliances</h3>
<p>Dishwashers, washing machines, and ice makers all suffer. Heating elements scale up. Valves clog. Manufacturer warranties often exclude damage from hard water, meaning you're paying for repairs that the warranty won't cover.</p>

<h3>Cosmetic annoyances</h3>
<p>White spots on glassware, chalky streaks on shower doors, stiff laundry, faded colors, and soap that won't lather. These aren't dangerous, but they affect your daily quality of life and are the symptoms most people notice first.</p>

<h2>City water vs. well water in Marion County</h2>
<p>The treatment approach depends on your water source:</p>
<ul>
  <li><strong>City of Ocala water:</strong> Treated at the plant for bacteria and chlorine, but <em>not</em> softened. You get the full hardness straight from the aquifer. A standard ion-exchange water softener is the fix.</li>
  <li><strong>Well water:</strong> Untreated except for whatever your own system does. Often harder than city water, plus iron and sulfur. Requires testing before sizing any treatment system. We do this on-site for free.</li>
  <li><strong>Community wells (Marion Oaks, etc.):</strong> Varies by system. Some community wells are moderately hard, others are extreme. Test before you buy a softener.</li>
</ul>

<h2>How to fix hard water: your options</h2>

<h3>Whole-home water softener (recommended)</h3>
<p>An ion-exchange softener is the gold standard. It runs your water through a resin bed that swaps calcium and magnesium ions for sodium (or potassium) ions. The result is genuinely soft water throughout the entire house.</p>
<p>We test your water on-site, measure your household's peak usage, and size the unit accordingly. An undersized softener regenerates too often and wastes salt. An oversized one is money you didn't need to spend.</p>
<p><strong>Cost:</strong> A properly sized whole-home softener is usually <strong>$1,800–$2,800 installed</strong> in Marion County, depending on capacity and whether pre-treatment is needed for iron or sulfur.</p>
<p><strong>Maintenance:</strong> Add salt (or potassium chloride) every 4–8 weeks. Annual service check to clean the brine tank and verify regeneration timing. That's it.</p>

<h3>Salt-free conditioners</h3>
<p>Template-assisted crystallization (TAC) units don't remove hardness. They change the crystal structure so minerals don't stick to surfaces as easily. They reduce scale buildup but don't give you the "soft water feel" (slick skin, better soap lather). Good for homeowners who want scale protection without adding sodium to their water.</p>

<h3>Point-of-use filters</h3>
<p>Under-sink reverse osmosis (RO) systems produce excellent drinking water but only at one faucet. They don't protect your water heater, pipes, or other fixtures. Useful as a complement to a softener, not a replacement.</p>

<h3>Doing nothing</h3>
<p>You can live with hard water. Plenty of Marion County homeowners do. But understand the cost: shorter appliance life, higher energy bills, more frequent fixture replacements, and eventually pipe scaling that contributes to pressure loss. Over 10 years, doing nothing often costs more than installing a softener would have.</p>

<h2>Is a water softener worth it?</h2>
<p>For most Ocala homeowners, yes. Here's the math:</p>
<ul>
  <li>Softener install: ~$2,000–$2,800</li>
  <li>Annual salt and service: ~$100–$150</li>
  <li>Water heater life extension: 3–5 extra years (a $1,500–$3,000 savings)</li>
  <li>Energy savings from a scale-free heater: $10–$20/month</li>
  <li>Fixture and appliance longevity: harder to quantify, but real</li>
</ul>
<p>Most homeowners see a return on investment within 3–5 years, and the daily quality-of-life improvement is immediate.</p>

<h2>Get your water tested</h2>
<p>We offer free on-site water testing in Ocala and Marion County. We'll tell you your exact hardness level, check for iron and sulfur if you're on a well, and recommend the right system for your home and budget. No pressure, no gimmicks, just numbers and an honest recommendation.</p>
    `
  },
  {
    slug: 'hard-water-water-heater-ocala',
    title: 'Why Hard Water in Ocala Can Shorten the Life of Your Water Heater',
    description:
      'Mineral buildup from Marion County hard water can cut years off your water heater. Learn the warning signs and how to protect your unit.',
    publishedAt: '2026-06-11',
    author: "Floyd's Plumbing",
    readMinutes: 11,
    image: '/images/blog/blog-hard-water-water-heater.webp',
    imageAlt: 'Plumber inspecting a residential tank water heater in a Florida garage',
    bodyHtml: `
<p>If you've lived in Ocala for any length of time, you've probably heard someone mention Florida's hard water. While hard water isn't typically a health concern, it can create significant problems for your home's plumbing system, especially your water heater.</p>
<p>At Floyd's Plumbing, one of the most common issues we see in Marion County homes is premature water heater failure caused by mineral buildup. Ocala's water tests at 15–20 grains per gallon, three to four times the national average, and your water heater is where that hardness does its worst damage.</p>
<p>This guide explains exactly how hard water attacks your water heater, what to watch for, and what you can do to add years to your unit's life.</p>

<h2>What is hard water?</h2>
<p>Hard water contains elevated levels of dissolved minerals, primarily calcium and magnesium. As water moves through the limestone layers of the Floridan Aquifer beneath Marion County, it naturally collects these minerals before entering your home's plumbing system.</p>
<p>While these minerals are harmless to drink, they behave differently when heated. As water temperature rises, calcium and magnesium become less soluble and precipitate out, forming solid sediment that settles wherever water sits still and hot. The bottom of your water heater tank is the perfect landing spot.</p>

<h2>How hard water destroys your water heater from the inside</h2>
<p>Every time your water heater heats a tank of water, a small amount of mineral sediment separates and drops to the bottom. In a soft-water area, this buildup is negligible. In Ocala, it accumulates fast.</p>
<p>Here's the damage cycle:</p>
<ol>
  <li><strong>Sediment layer forms</strong> at the bottom of the tank, between the burner/element and the water</li>
  <li><strong>The layer acts as insulation:</strong> the burner runs longer to heat water through the scale blanket</li>
  <li><strong>Energy bills climb:</strong> a heater with 2 inches of sediment can use 20–30% more energy</li>
  <li><strong>The bottom of the tank overheats:</strong> trapped water beneath the sediment flashes to steam, causing popping and rumbling sounds</li>
  <li><strong>Metal fatigues:</strong> repeated overheating weakens the tank bottom, leading to leaks or failure</li>
  <li><strong>The anode rod is consumed faster:</strong> hard water accelerates anode depletion, removing the tank's only corrosion protection</li>
</ol>
<p>In a Marion County home without a water softener, we've opened water heaters after just 5–6 years and found 3–4 inches of solid sediment. The unit was running at roughly half its rated efficiency and was months away from a bottom failure.</p>

<h2>Tank vs. tankless: hard water hits differently</h2>

<h3>Traditional tank water heaters</h3>
<p>Sediment accumulates at the bottom, the hottest part of the tank. This is the most common failure mode we see. The tank itself can crack or leak from the stress. Heating elements (electric) or the gas burner area (gas) become less effective. Most tank heaters in Ocala without soft water or regular flushing last 6–8 years instead of the rated 10–12.</p>

<h3>Tankless water heaters</h3>
<p>Tankless units heat water on demand through a narrow heat exchanger. Hard water scale clogs those narrow passages quickly, restricting flow and reducing efficiency. Tankless manufacturers require annual descaling, and in Ocala's water, we mean it. Skip descaling for two years and you risk error codes, flow sensor failures, and a $1,500+ heat exchanger replacement. A water softener upstream of a tankless unit is the best investment you can make.</p>

<h2>Signs your water heater has mineral buildup</h2>
<p>Many homeowners don't realize their water heater is struggling until it fails completely. Watch for these warning signs early:</p>

<h3>Inconsistent hot water</h3>
<p>If your hot water runs out faster than it used to, sediment may be displacing 10–20 gallons of capacity in a 50-gallon tank. You're paying to heat a tank full of rocks and sand, not water.</p>

<h3>Popping, cracking, or rumbling sounds</h3>
<p>This is the classic symptom. Water trapped beneath the sediment layer flashes to steam and collapses back, creating the popping sound. If your water heater sounds like a popcorn machine, it needs to be flushed immediately.</p>

<h3>Rising utility bills</h3>
<p>Compare your electric or gas bill year over year. If usage is climbing but your habits haven't changed, your water heater is a prime suspect. A scale-coated element or burner works harder for the same result.</p>

<h3>Discolored hot water</h3>
<p>Rusty or cloudy hot water (while cold water runs clear) points to corrosion inside the tank, often accelerated by sediment exposing bare metal and depleting the anode rod. If hot water looks different from cold, call us.</p>

<h3>Visible leaks at the base</h3>
<p>Once sediment causes the tank bottom to overheat and fatigue, micro-cracks form. You'll see moisture, rust, or pooling water at the base of the unit. At this point, replacement is usually the only option. Flushing won't fix a cracked tank.</p>

<h2>Can hard water damage other plumbing?</h2>
<p>Absolutely. The water heater is just the most expensive casualty. Hard water also contributes to:</p>
<ul>
  <li><strong>Faucet aerator and showerhead clogs:</strong> white mineral deposits choke flow at individual fixtures</li>
  <li><strong>Reduced water pressure:</strong> decades of scale buildup narrows pipe diameter house-wide</li>
  <li><strong>Dishwasher and washing machine inefficiency:</strong> heating elements scale up, valves stick</li>
  <li><strong>Soap and detergent waste:</strong> hard water neutralizes soap, so you use more and get less</li>
  <li><strong>White deposits on fixtures:</strong> the crusty buildup around faucet bases and shower handles</li>
</ul>
<p>For a broader look at how hard water affects your entire home, read our <a href="/blog/hard-water-marion-county/">Marion County hard water guide</a>.</p>

<h2>How to protect your water heater</h2>

<h3>Annual flushing</h3>
<p>Draining 5–10 gallons from the tank drain valve every 6–12 months removes loose sediment before it compacts into a solid layer. This is the single most effective maintenance step for tank water heaters in hard water areas. We include a flush with every water heater service call.</p>

<h3>Anode rod inspection</h3>
<p>The anode rod is a sacrificial metal rod inside the tank that attracts corrosion so the tank walls don't rust. In hard water, anodes deplete 2–3 times faster. We check the anode during maintenance and replace it when it's more than 50% consumed. A $50 anode rod can add 3–5 years to a tank's life.</p>

<h3>Water softener</h3>
<p>A whole-home softener removes the calcium and magnesium <em>before</em> they reach your water heater. This is the most effective long-term protection. For Ocala homeowners, a softener plus annual flushing is the combination that gets water heaters to their full rated lifespan and beyond.</p>

<h3>Tankless descaling</h3>
<p>If you have a tankless unit, annual descaling with a vinegar or commercial descaling solution pumped through the heat exchanger is required, not optional. We offer tankless descaling as a standalone service or as part of an annual maintenance plan.</p>

<h3>Temperature setting</h3>
<p>Keep your water heater at 120°F. Higher temperatures accelerate scale formation and increase the risk of scalding. There's no benefit to running at 140°F in a residential home.</p>

<h2>When should you replace your water heater?</h2>
<p>Most traditional tank water heaters are rated for 8–12 years. In Ocala's hard water without treatment, expect the lower end of that range. Consider replacement if:</p>
<ul>
  <li>The unit is 8+ years old and showing any of the warning signs above</li>
  <li>You've flushed it and the popping sounds return within months</li>
  <li>There's rust or moisture at the base of the tank</li>
  <li>Repair costs exceed 50% of a new unit. A $600 repair on a 10-year-old heater doesn't make sense when a new one is $1,200–$1,800 installed</li>
  <li>Your family has outgrown the tank size (a family of four needs at least 50 gallons; five or more should look at 65–80)</li>
</ul>
<p>When we replace a water heater, we always recommend installing a drain pan, a new expansion tank if required, and if you don't have one, a water softener to protect the new unit from day one.</p>

<h2>Schedule a water heater inspection</h2>
<p>Whether you need a flush, an anode rod replacement, a repair, or a full unit replacement, Floyd's Plumbing has served Ocala and Marion County homeowners for years with honest recommendations and reliable service. If your water heater isn't performing like it should, or if you just want to know how much sediment is sitting at the bottom of your tank, give us a call. An inspection takes about 30 minutes and tells you exactly where you stand.</p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
