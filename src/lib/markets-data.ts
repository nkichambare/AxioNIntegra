export type Market = {
  slug: string;
  title: string;
  bgClass: string;
  metaDescription: string;
  intro: string[];
  capabilities: string[];
  valuePoints: string[];
  specs: { label: string; value: string }[];
  challenges: string[];
  ctaLine: string;
};

export const markets: Market[] = [
  {
    slug: 'industrial-equipment-manufacturers',
    title: 'Industrial Equipment Manufacturers',
    bgClass: "bg-[url('/market/networks-data-centres.png')]",
    metaDescription:
      'Single-point accountability for precision components, structural parts, and assemblies across industrial equipment manufacturing programmes.',
    intro: [
      'Industrial equipment manufacturers operate in environments where dimensional accuracy, process discipline, and scalable production capability are non-negotiable. A single out-of-tolerance component can cascade into costly production delays, warranty claims, and reputational damage across downstream operations.',
      'AxionIntegra integrates supplier coordination, quality validation, and delivery management under a single accountable structure reducing the operational burden on internal engineering teams and ensuring that manufacturing execution consistently aligns with performance specifications.',
      'From structural frames and housings to precision-machined shafts, gears, and hydraulic components, we manage the full production lifecycle. We handle drawing review, supplier qualification, in-process inspection, and final dimensional reporting — so your engineers focus on machine development, not vendor management.',
    ],
    capabilities: [
      'CNC machined components',
      'Fabricated structural parts',
      'Hydraulic & pneumatic parts',
      'Gearbox & drive components',
      'Sheet metal enclosures',
      'Welded sub-assemblies',
      'Prototype to series',
      'ISO 9001 quality',
    ],
    valuePoints: [
      'Single point of accountability from specification to final delivery',
      'Reduces internal vendor management overhead significantly',
      'Dimensional inspection reports with every delivery',
      'Scalable capacity prototype, pilot, and volume production',
      'DFM review at programme start to eliminate quality risk early',
    ],
    specs: [
      {
        label: 'Typical components',
        value: 'Housings, shafts, gears, frames, enclosures, brackets',
      },
      {
        label: 'Processes used',
        value: 'CNC machining, sheet metal, welded fabrication, assembly',
      },
      { label: 'Tolerances', value: '±0.01 mm CNC standard; tighter on critical features' },
      { label: 'Volume range', value: 'Prototype (1 off) through to series production' },
      { label: 'Quality standard', value: 'ISO 9001:2015 across all manufacturing partners' },
      {
        label: 'Documentation',
        value: 'Dimensional report, material cert, delivery traceable to PO',
      },
      { label: 'Lead time', value: 'Defined per programme at project initiation' },
    ],
    challenges: [
      'Managing 6–12 specialist subcontractors for a single machine programme',
      'Quality disputes between vendors with no single party owning the outcome',
      'Engineering time lost to supplier coordination and expediting',
      'Inconsistent quality and delivery across prototype vs. production stages',
    ],
    ctaLine:
      'Tell us about your industrial equipment manufacturers programme. We respond within 2–3 business days.',
  },
  {
    slug: 'electrical-power-systems',
    title: 'Electrical & Power Systems',
    bgClass: "bg-[url('/market/switchgears.png')]",
    metaDescription:
      'Reliable supplier coordination, quality validation, and full documentation traceability for electrical switchgear, power distribution, and industrial control systems.',
    intro: [
      'Manufacturers in electrical switchgear, power distribution, and industrial control systems require components manufactured with exact dimensional tolerances, verified material composition, and documented compliance at every production stage. Failures in this sector carry serious safety and regulatory consequences.',
      "AxionIntegra's integration model ensures reliable supplier coordination, quality validation, and full documentation traceability across every stage of execution — from busbars and conductor rails to precision-machined terminal blocks and structural enclosures.",
      'We understand that electrical and power system procurement managers cannot afford supplier uncertainty. Our model removes that uncertainty: one qualified supplier network, one quality programme, one delivery commitment — with the material certificates, dimensional reports, and compliance records to back it every time.',
    ],
    capabilities: [
      'Busbars & conductor rails',
      'Switchgear enclosures',
      'Control panel structures',
      'Precision terminal components',
      'Aluminium & copper machining',
      'Sheet metal cabinets',
      'RoHS compliant materials',
      'EN 10204 3.1 certs',
    ],
    valuePoints: [
      'Material certificates to EN 10204 3.1 standard on all deliveries',
      'RoHS and REACH compliant material sourcing across supply chain',
      'Documented traceability batch level, revision-controlled',
      'Dimensional inspection of all safety-critical features',
      'Consistent supply stability for series production programmes',
    ],
    specs: [
      {
        label: 'Typical components',
        value: 'Busbars, enclosures, conductor rails, terminal blocks, brackets',
      },
      { label: 'Materials', value: 'Copper, aluminium alloys, stainless steel, mild steel, brass' },
      {
        label: 'Processes used',
        value: 'CNC machining, sheet metal forming, punching, laser cutting',
      },
      { label: 'Compliance', value: 'RoHS, REACH — material-verified at source' },
      { label: 'Material certs', value: 'EN 10204 3.1 or 2.2 as required per specification' },
      { label: 'Quality standard', value: 'ISO 9001:2015' },
      { label: 'Traceability', value: 'Batch-level, revision-controlled delivery documentation' },
    ],
    challenges: [
      'Material compliance documentation gaps across multi-tier supply chains',
      'Dimensional inconsistency in high-volume conductor component supply',
      'RoHS / REACH verification across overseas supplier networks',
      'Delivery unpredictability disrupting switchgear assembly schedules',
    ],
    ctaLine:
      'Tell us about your electrical & power systems programme. We respond within 2–3 business days.',
  },
  {
    slug: 'precision-engineering-machine-builders',
    title: 'Precision Engineering & Machine Builders',
    bgClass: "bg-[url('/market/metals-chlorine-refining.png')]",
    metaDescription:
      'Sub-millimetre tolerance components, full dimensional traceability, and prototype-to-production continuity for high-precision instruments and specialist machinery.',
    intro: [
      'High-precision instruments, measurement systems, optics equipment, and specialist machinery require components manufactured to sub-millimetre tolerances with complete dimensional traceability. A standard supplier simply cannot meet these demands consistently — and inconsistency at this level is not recoverable in the field.',
      'AxionIntegra supports prototype development, small-batch production, and scalable manufacturing while maintaining technical alignment and continuous inspection control. Our engineering review process ensures that manufacturability is confirmed before production begins — eliminating costly redesigns and quality escapes downstream.',
      'By integrating supplier coordination and quality oversight under a single accountable framework, AxionIntegra enables precision engineering businesses to focus on innovation and product development rather than operational supply chain management.',
    ],
    capabilities: [
      'Sub-mm tolerance components',
      '5-axis CNC machining',
      'Optical & measurement parts',
      'Jig & fixture components',
      'Tight-tolerance assemblies',
      'Surface-critical finishing',
      'First article inspection',
      'PPAP-style documentation',
    ],
    valuePoints: [
      'CNC tolerances to ±0.005 mm on precision-critical features',
      'Full dimensional report with every first article and production batch',
      'DFM review eliminates tolerance stack-up risk before production',
      'Surface finish control from Ra 0.4 for critical mating surfaces',
      'Prototype-to-production continuity — same quality programme throughout',
    ],
    specs: [
      { label: 'Tolerances', value: '±0.01 mm standard; ±0.005 mm on critical features' },
      { label: 'Surface finish', value: 'Ra 0.4 to Ra 3.2 — specified per drawing' },
      { label: 'Materials', value: 'Titanium, stainless, tool steel, Al alloys, PEEK, Delrin' },
      { label: 'Processes', value: 'Multi-axis CNC turning & milling, grinding, EDM coordination' },
      {
        label: 'Documentation',
        value: 'Full FAI dimensional report, material cert, process record',
      },
      { label: 'Production range', value: '1-off prototypes through controlled series batches' },
      { label: 'Quality standard', value: 'ISO 9001:2015; PPAP-style documentation available' },
    ],
    challenges: [
      'General-purpose suppliers unable to hold sub-mm tolerances consistently',
      'No dimensional traceability provided with production deliveries',
      'Prototype quality not maintained when scaling to production batches',
      'DFM issues discovered late — after tooling and first articles are made',
    ],
    ctaLine:
      'Tell us about your precision engineering & machine builders programme. We respond within 2–3 business days.',
  },
  {
    slug: 'renewable-energy-infrastructure',
    title: 'Renewable Energy & Energy Infrastructure',
    bgClass: "bg-[url('/market/green-hydrogen..png')]",
    metaDescription:
      'EU-compliant manufacturing coordination for solar, wind, energy storage, and industrial energy infrastructure — corrosion-resistant, traceable, and timeline-aligned.',
    intro: [
      'Solar, wind, energy storage, and industrial energy infrastructure manufacturers require durable, corrosion-resistant structural and mechanical components at scale. These programmes are time-critical — commissioning windows are fixed, and component delays cascade across the entire project.',
      'AxionIntegra supports manufacturing coordination for energy-related assemblies and precision parts within solar mounting systems, battery energy storage, and industrial energy infrastructure. We ensure execution reliability and documentation compliance throughout the production lifecycle — from first prototype to full-volume series supply.',
      'Our EU-aligned supply network means that material sourcing, quality certification, and delivery logistics are managed within a transparent, traceable framework — meeting the increasingly strict documentation requirements of renewable energy project finance and procurement standards.',
    ],
    capabilities: [
      'Solar mounting structures',
      'Battery enclosures & brackets',
      'Wind turbine components',
      'Corrosion-resistant fabrication',
      'Aluminium extrusion components',
      'Structural welded frames',
      'EU-compliant material sourcing',
      'Series volume capability',
    ],
    valuePoints: [
      'Corrosion-resistant materials and finishes for outdoor / industrial environments',
      'EU material sourcing with full compliance documentation',
      'Project-timeline aligned delivery scheduling — no commissioning delays',
      'Scale-up capability from pilot batch to high-volume series',
      'Consistent quality across geographically distributed project sites',
    ],
    specs: [
      {
        label: 'Typical components',
        value: 'Mounting frames, enclosures, battery brackets, structural rails',
      },
      {
        label: 'Materials',
        value: 'Anodised aluminium, galvanised steel, stainless 316L, composites',
      },
      {
        label: 'Processes',
        value: 'Sheet metal forming, extrusion machining, structural welding, CNC',
      },
      { label: 'Finish', value: 'Anodise, powder coat, hot-dip galvanise, passivation' },
      { label: 'Compliance', value: 'RoHS, REACH, EU material origin documentation' },
      { label: 'Volume range', value: 'Pilot batches through high-volume series production' },
      {
        label: 'Quality standard',
        value: 'ISO 9001:2015; project-specific quality plans available',
      },
    ],
    challenges: [
      'Overseas supply chain risk — quality and customs delays disrupting project timelines',
      'Corrosion failures from insufficient material specification or surface treatment',
      'Documentation gaps failing project finance and procurement audit requirements',
      'No single supplier covering structural + precision + assembly in one programme',
    ],
    ctaLine:
      'Tell us about your renewable energy & energy infrastructure programme. We respond within 2–3 business days.',
  },
  {
    slug: 'automotive-industrial-mobility',
    title: 'Automotive & Industrial Mobility',
    bgClass: "bg-[url('/market/power-storage.png')]",
    metaDescription:
      'PPAP documentation, IATF 16949-aligned quality management, and prototype-to-production continuity for automotive Tier 1/2 suppliers and OEMs.',
    intro: [
      'Tier 1 and Tier 2 automotive suppliers, OEMs, and industrial mobility manufacturers require components manufactured to tight tolerances with full PPAP and IATF-compliant quality documentation. A single non-conforming part can halt an assembly line — the cost consequences are disproportionate to the component value.',
      'AxionIntegra supports structured sourcing and manufacturing coordination for mechanical components and industrial sub-assemblies, maintaining process control and quality assurance at scale. We support both prototype validation programmes and series production supply, where consistency and delivery performance define the relationship.',
      'Our automotive quality framework covers PPAP documentation, control plans, FMEA, and MSA — giving automotive procurement teams the confidence that quality is managed systematically, not reactively.',
    ],
    capabilities: [
      'PPAP documentation',
      'IATF 16949 aligned',
      'Control plans & FMEA',
      'Prototype validation parts',
      'Series production supply',
      'Mechanical sub-assemblies',
      'Powertrain components',
      'Chassis & structural parts',
    ],
    valuePoints: [
      'Full PPAP package available — all 18 elements on request',
      'IATF 16949 aligned quality management for automotive programmes',
      'Control plans and FMEA developed and maintained per programme',
      'Prototype-to-production continuity — no quality regression at volume',
      'Just-in-time delivery scheduling available for production programmes',
    ],
    specs: [
      { label: 'Quality standard', value: 'IATF 16949 aligned; ISO 9001:2015 certified partners' },
      { label: 'Documentation', value: 'Full PPAP (all 18 elements), control plans, FMEA, MSA' },
      {
        label: 'Typical components',
        value: 'Brackets, housings, shafts, gears, sub-assemblies, stampings',
      },
      { label: 'Processes', value: 'CNC machining, sheet metal, injection moulding, assembly' },
      { label: 'Tolerances', value: '±0.01 mm standard; ±0.005 mm on critical features' },
      { label: 'Material certs', value: 'EN 10204 3.1; full material traceability per delivery' },
      {
        label: 'Volume range',
        value: 'Prototype / validation through to series production supply',
      },
    ],
    challenges: [
      'Suppliers unable to provide full PPAP documentation on schedule',
      'Quality performance degrading when moving from prototype to volume',
      'Assembly line stoppages caused by non-conforming incoming parts',
      'Cost pressure requiring sourcing outside Germany without quality risk increase',
    ],
    ctaLine:
      'Tell us about your automotive & industrial mobility programme. We respond within 2–3 business days.',
  },
  {
    slug: 'industrial-assemblies-oem-suppliers',
    title: 'Industrial Assemblies & OEM Suppliers',
    bgClass: "bg-[url('/market/industrial-mobility.png')]",
    metaDescription:
      'Integrated sourcing, kitting, sub-assembly, and line-side delivery for OEM suppliers managing complex multi-component industrial programmes.',
    intro: [
      'OEM suppliers managing complex multi-component assemblies face a compounding challenge: each additional supplier in the chain adds coordination overhead, quality ambiguity, and delivery risk. The result is that programme managers spend the majority of their time managing supply — instead of managing product.',
      'AxionIntegra collaborates with OEM suppliers and industrial assembly providers to integrate supplier management, production oversight, and quality validation into one coordinated framework. Whether supporting new programme development from the first prototype or optimising an existing supply chain, we take full ownership of the manufacturing execution layer.',
      'Our model covers component sourcing, kitting, sub-assembly, and delivery to line as a single, managed programme — reducing your internal coordination burden, eliminating inter-vendor quality disputes, and improving delivery predictability across the board.',
    ],
    capabilities: [
      'Multi-component kitting',
      'Sub-assembly management',
      'Delivery to production line',
      'Supplier base consolidation',
      'New programme development',
      'Supply chain optimisation',
      'Electromechanical assemblies',
      'Inventory management',
    ],
    valuePoints: [
      'Single contract covers sourcing, production, quality & delivery',
      'Kitting and sub-assembly managed under one quality programme',
      'Delivery directly to production line or warehouse — scheduled per programme',
      'Supplier base consolidation — reduce vendor count without increasing risk',
      'Transparent programme tracking — visibility into every production stage',
    ],
    specs: [
      {
        label: 'Programme scope',
        value: 'Sourcing + production + quality + kitting + delivery — integrated',
      },
      {
        label: 'Assembly types',
        value: 'Mechanical, electromechanical, structural, multi-process',
      },
      {
        label: 'Processes covered',
        value: 'CNC, sheet metal, injection moulding, assembly, finishing',
      },
      {
        label: 'Delivery model',
        value: 'Kanban, scheduled batch, or line-side delivery — per programme',
      },
      {
        label: 'Quality standard',
        value: 'ISO 9001:2015; customer-specific quality plans on request',
      },
      {
        label: 'Documentation',
        value: 'Full traceability, batch records, delivery notes per shipment',
      },
      { label: 'Engagement type', value: 'New programme or existing supply chain optimisation' },
    ],
    challenges: [
      'Programme managers spending 60%+ of time on supplier coordination',
      'No single supplier accountable when assemblies arrive with quality issues',
      'Kitting delays from one late component holding an entire assembly batch',
      'Onboarding new programmes with no internal capacity for supplier development',
    ],
    ctaLine:
      'Tell us about your industrial assemblies & OEM suppliers programme. We respond within 2–3 business days.',
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}
