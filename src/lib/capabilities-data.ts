export type Capability = {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string[];
  scope: string[];
  process: string[];
  risk: string[];
  outcome: string;
  ctaText: string;
};

export const capabilities: Capability[] = [
  {
    slug: 'precision-manufacturing',
    title: 'Precision Manufacturing Execution',
    metaDescription:
      'Controlled, traceable, and performance-aligned manufacturing execution that meets technical specifications and delivery commitments.',
    heroSubtitle:
      'Controlled, traceable, and performance-aligned manufacturing execution that meets technical specifications and delivery commitments.',
    overview: [
      'AxionIntegra delivers precision-manufactured components and assemblies through structured coordination with qualified production partners. Our execution model ensures that engineering intent is preserved throughout manufacturing while maintaining cost discipline and delivery reliability.',
      'Every engagement begins with technical alignment and feasibility validation before production is initiated.',
    ],
    scope: [
      'CNC machining of tight-tolerance components',
      'Fabricated and formed metal parts',
      'Conductive and structural industrial components',
      'Surface treatment and finishing processes',
      'Sub-assembly integration',
      'Prototype, pre-series, and serial production',
    ],
    process: [
      'Requirement clarification and drawing validation',
      'Manufacturing feasibility review',
      'Supplier capability alignment',
      'Production scheduling coordination',
      'In-process inspection checkpoints',
      'Final dimensional and documentation validation',
      'Delivery release approval',
    ],
    risk: [
      'Pre-production technical verification',
      'Defined inspection protocols',
      'Clear acceptance criteria',
      'Structured communication with manufacturing partners',
      'Escalation procedures for deviation management',
    ],
    outcome:
      'Controlled, traceable, and performance-aligned manufacturing execution that meets technical specifications and delivery commitments.',
    ctaText:
      'Have a precision manufacturing requirement? We will review your specifications and outline an execution approach.',
  },
  {
    slug: 'manufacturing-integration',
    title: 'Manufacturing Integration & Supplier Coordination',
    metaDescription:
      'Integration layer between customer engineering requirements and manufacturing execution — centralising responsibility and simplifying multi-vendor complexity.',
    heroSubtitle:
      'Improved predictability, reduced coordination overhead, and unified execution accountability across the supply chain.',
    overview: [
      'AxionIntegra acts as an integration layer between customer engineering requirements and manufacturing execution. We manage supplier coordination, production planning, and technical alignment to eliminate fragmentation and reduce operational burden.',
      'Our role is to centralise responsibility and simplify multi-vendor complexity.',
    ],
    scope: [
      'Supplier identification and qualification',
      'Technical documentation alignment',
      'Production scheduling coordination',
      'Capacity planning discussions',
      'Change management support',
      'Communication governance',
    ],
    process: [
      'Supplier capability assessment',
      'Technical data exchange and clarification',
      'Commercial and production alignment',
      'Execution monitoring',
      'Delivery coordination',
      'Performance review and feedback loop',
    ],
    risk: [
      'Structured supplier evaluation',
      'Defined escalation channels',
      'Documentation consistency checks',
      'Transparent communication reporting',
      'Continuous monitoring of delivery timelines',
    ],
    outcome:
      'Improved predictability, reduced coordination overhead, and unified execution accountability across the supply chain.',
    ctaText:
      'Have a supplier coordination challenge? We will review your requirements and outline an integration approach.',
  },
  {
    slug: 'quality-validation',
    title: 'Quality Validation & Compliance Control',
    metaDescription:
      'Structured inspection checkpoints, documentation verification, and traceability processes ensuring dimensional accuracy, material conformity, and delivery compliance.',
    heroSubtitle:
      'Reliable, compliant, and traceable production output that protects customer performance and reputation.',
    overview: [
      'Quality is engineered into every project through defined validation checkpoints and traceable documentation processes. AxionIntegra ensures that manufactured components meet dimensional, material, and compliance requirements prior to release.',
      'Quality is not assumed — it is structured and verified.',
    ],
    scope: [
      'Inspection planning and coordination',
      'Dimensional validation',
      'Material certificate verification',
      'Process documentation review',
      'Final quality approval before dispatch',
    ],
    process: [
      'Definition of inspection criteria',
      'In-process verification checkpoints',
      'Dimensional and visual inspection',
      'Documentation validation',
      'Non-conformance management',
      'Release authorisation',
    ],
    risk: [
      'Predefined acceptance standards',
      'Structured deviation handling',
      'Traceability documentation',
      'Independent validation prior to delivery',
    ],
    outcome:
      'Reliable, compliant, and traceable production output that protects customer performance and reputation.',
    ctaText:
      'Have a quality or compliance requirement? We will review your standards and outline a structured validation approach.',
  },
  {
    slug: 'strategic-sourcing',
    title: 'Strategic Sourcing & Cost Optimization',
    metaDescription:
      'Disciplined supplier qualification, structured benchmarking, and scalable sourcing strategies for cost-sensitive industrial programs without compromising engineering standards.',
    heroSubtitle:
      'Measured cost efficiency improvements with controlled implementation and performance stability.',
    overview: [
      'AxionIntegra supports cost-sensitive industrial programs through disciplined supplier qualification and structured benchmarking. We identify opportunities for cost efficiency without compromising engineering standards or execution reliability.',
      'Our sourcing model prioritises sustainability and risk mitigation.',
    ],
    scope: [
      'Cost benchmarking',
      'Supplier comparison analysis',
      'Manufacturing feasibility evaluation',
      'Capacity assessment',
      'Long-term sourcing strategy support',
    ],
    process: [
      'Cost structure analysis',
      'Supplier market mapping',
      'Qualification and risk review',
      'Controlled pilot execution',
      'Performance benchmarking',
      'Continuous optimisation review',
    ],
    risk: [
      'Conservative supplier onboarding',
      'Limited pilot validation',
      'No volume scaling without performance proof',
      'Compliance and documentation validation',
    ],
    outcome:
      'Measured cost efficiency improvements with controlled implementation and performance stability.',
    ctaText:
      'Have a sourcing or cost challenge? We will review your targets and outline a structured approach to supply efficiency.',
  },
  {
    slug: 'scalable-production',
    title: 'Scalable Production & Program Support',
    metaDescription:
      'From prototype validation to serial production, aligning capacity planning, execution control, and delivery coordination to support industrial growth and program expansion.',
    heroSubtitle:
      'Smooth transition from development to production scale while maintaining quality discipline and delivery reliability.',
    overview: [
      'Industrial programs require flexibility from prototype to serial production. AxionIntegra aligns production capacity, execution control, and delivery coordination to support scalable growth without operational disruption.',
      'We ensure production stability during volume transitions.',
    ],
    scope: [
      'Prototype validation support',
      'Pre-series production coordination',
      'Serial production planning',
      'Capacity scalability discussions',
      'Program lifecycle support',
    ],
    process: [
      'Prototype feasibility assessment',
      'Process stabilisation',
      'Capacity planning alignment',
      'Volume production coordination',
      'Delivery schedule management',
      'Performance monitoring',
    ],
    risk: [
      'Gradual scaling approach',
      'Process validation before volume increase',
      'Defined contingency planning',
      'Production stability review',
    ],
    outcome:
      'Smooth transition from development to production scale while maintaining quality discipline and delivery reliability.',
    ctaText:
      'Have a scale-up requirement? We will review your programme and outline a structured path from prototype to serial production.',
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
