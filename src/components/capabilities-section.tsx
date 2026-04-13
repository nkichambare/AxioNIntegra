import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

type Capability = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

const capabilities: Capability[] = [
  {
    slug: 'precision-manufacturing',
    title: 'Precision Manufacturing Execution',
    description:
      'We coordinate and deliver precision-machined components, fabricated metal parts, and industrial assemblies through qualified manufacturing networks under structured production control.',
    items: [
      'CNC machining of tight-tolerance components',
      'Fabricated and formed metal parts',
      'Conductive and structural industrial components',
      'Surface treatment and finishing processes',
      'Sub-assembly integration',
      'Prototype, pre-series, and serial production',
    ],
  },
  {
    slug: 'manufacturing-integration',
    title: 'Manufacturing Integration & Supplier Coordination',
    description:
      'We manage supplier alignment, production scheduling, technical clarification, and manufacturing oversight — acting as a single accountable interface between customer requirements and production execution.',
    items: [
      'Supplier identification and qualification',
      'Technical documentation alignment',
      'Production scheduling coordination',
      'Capacity planning discussions',
      'Change management support',
      'Communication governance',
    ],
  },
  {
    slug: 'quality-validation',
    title: 'Quality Validation & Compliance Control',
    description:
      'We implement structured inspection checkpoints, documentation verification, and traceability processes to ensure dimensional accuracy, material conformity, and delivery compliance.',
    items: [
      'Inspection planning and coordination',
      'Dimensional validation',
      'Material certificate verification',
      'Process documentation review',
      'Final quality approval before dispatch',
    ],
  },
  {
    slug: 'strategic-sourcing',
    title: 'Strategic Sourcing & Cost Optimization',
    description:
      'We support cost-sensitive industrial programs through disciplined supplier qualification, structured benchmarking, and scalable sourcing strategies without compromising engineering standards.',
    items: [
      'Cost benchmarking',
      'Supplier comparison analysis',
      'Manufacturing feasibility evaluation',
      'Capacity assessment',
      'Long-term sourcing strategy support',
    ],
  },
  {
    slug: 'scalable-production',
    title: 'Scalable Production & Program Support',
    description:
      'From prototype validation to serial production, we align capacity planning, execution control, and delivery coordination to support industrial growth and program expansion.',
    items: [
      'Prototype validation support',
      'Pre-series production coordination',
      'Serial production planning',
      'Capacity scalability discussions',
      'Program lifecycle support',
    ],
  },
];

const hoverStyle =
  'relative overflow-hidden transition before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-l-2xl before:bg-accent before:opacity-0 before:transition hover:before:opacity-100';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-heading">Core Capabilities</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className={`group flex flex-col rounded-2xl border border-border bg-bg p-7 cursor-pointer ${hoverStyle}`}
            >
              <h3 className="text-[15px] font-semibold leading-snug text-primary">{cap.title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-secondary">
                {cap.description}
              </p>

              <div className="mt-6 flex items-center gap-1.5 border-t border-border pt-4">
                <span className="label-text text-accent transition-opacity group-hover:opacity-80">
                  Learn More
                </span>
                <IoIosArrowRoundForward
                  aria-hidden="true"
                  className="text-[18px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
