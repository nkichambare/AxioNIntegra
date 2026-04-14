import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const stats = [
  {
    value: '6+',
    title: 'Industries served',
    description:
      'Automotive, energy, precision engineering, electrical, OEM, and machine building.',
  },
  {
    value: '3',
    title: 'Operating modes',
    description: 'Manufacturer, integrator, or sourcing consultancy we adapt to your structure.',
  },
  {
    value: '∞',
    title: 'End-to-end accountability',
    description: 'From spec review to final delivery one team, one contract, one point of contact.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14">
        <div className="order-1 flex flex-col gap-5 md:order-1">
          <p className="section-heading text-secondary">About</p>
          <h2 className="heading-2 text-primary">
            Precision Manufacturing Built for Industrial Reliability.
          </h2>
          <p className="body-text text-secondary">
            AxionIntegra is an engineering-driven precision manufacturing and supply chain
            consultancy that delivers precision manufactured components, assemblies, and sourcing
            solutions under full accountability.
          </p>
          <p className="body-text text-secondary">
            We support companies that require cost-effective, high precision, and quality certified
            manufacturing, but do not want to manage vendor search, manufacturing coordination,
            quality inspections, and execution risks internally.
          </p>
          <p className="body-text text-secondary">
            Depending on project requirements, AxionIntegra operates as a precision component
            manufacturer and supplier, a manufacturing integrator, or a strategic sourcing and
            engineering consultancy. In every engagement, we take complete responsibility for
            manufacturing accuracy, quality performance, cost efficiency, and delivery reliability.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex cursor-pointer items-center justify-center rounded-full border border-border bg-bg px-6 py-3 text-[14px] font-semibold leading-[1.2] text-secondary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              <span>Read More</span>
              <IoIosArrowRoundForward
                aria-hidden="true"
                className="ml-2 text-[20px] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="order-2 md:order-2">
          <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-soft">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col gap-2 p-7">
                <span className="text-[42px] font-semibold leading-none tracking-tight text-accent">
                  {stat.value}
                </span>
                <p className="heading-3 text-primary">{stat.title}</p>
                <p className="body-text text-secondary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
