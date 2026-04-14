import Image from 'next/image';
import Link from 'next/link';

type ExperienceItem = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  cta: string;
  href: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 'accountability',
    title: 'Single Responsible Interface',
    subtitle: 'One accountable partner from specification clarification to final delivery.',
    // description:
    //   'AxioNIntegra aligns engineering decisions, supplier control, and execution into one accountable delivery model.',
    image: '/expertise/expertise1.png',
    cta: 'Discover more',
    href: '#capabilities',
  },
  {
    id: 'execution',
    title: 'Engineering-Led Execution',
    subtitle: 'Technical alignment, process discipline, and cost control drive every project.',
    // description:
    //   'We convert specifications into stable production plans with quality gates, traceability, and delivery discipline.',
    image: '/expertise/expertise2.png',
    cta: 'Discover more',
    href: '#market',
  },
  {
    id: 'quality',
    title: 'Quality Built Into the Process',
    subtitle: 'Structured inspections, traceable documentation, and controlled output validation.',
    // description:
    //   'Controlled processes and measurable standards reduce variability and protect enterprise program outcomes.',
    image: '/expertise/expertise3.png',
    cta: 'Discover more',
    href: '#resources',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-bg py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-16">
        <div className="flex flex-col gap-3">
          <p className="section-heading text-secondary">Expertise</p>
          <h2 className="heading-2">Accountability Across the Full Manufacturing Cycle.</h2>
          <p className="body-text max-w-2xl text-secondary">
            AxionIntegra operates as a precision integration partner. We unify engineering
            alignment, supplier coordination, production control, and quality validation under one
            responsible structure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative min-h-[380px] overflow-hidden rounded-2xl border border-border bg-slate-900 p-6 cursor-default"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/60 transition-colors duration-500 group-hover:bg-slate-900/48" />
              <div className="absolute bottom-0 right-0 h-[72%] w-[78%] translate-x-full translate-y-full rounded-tl-2xl bg-accent/85 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="max-w-[92%] pt-[18%]">
                  <p className="text-[19px] font-medium leading-[1.2] text-white sm:text-[21px] xl:text-[19px]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-white/85">{item.subtitle}</p>
                  {item.description && (
                    <p className="body-text mt-4 translate-y-1 text-[14px] leading-[1.6] text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* <span className="flex items-center gap-2 text-white">
                  <span className="label-text">{item.cta}</span>
                  <HiOutlineArrowLongRight className="h-6 w-6" aria-hidden="true" />
                </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
