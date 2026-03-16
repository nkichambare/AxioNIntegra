import Image from 'next/image';

type ExperienceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  href: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 'accountability',
    title: 'Single point of accountability',
    subtitle: 'From scope to delivery. One responsible partner.',
    description:
      'AxioNIntegra aligns engineering decisions, supplier control, and execution into one accountable delivery model.',
    image: '/expertise/expertise1.png',
    cta: 'Discover more',
    href: '#capabilities',
  },
  {
    id: 'execution',
    title: 'Engineering-first execution',
    subtitle: 'Manufacturing decisions with design intent intact.',
    description:
      'We convert specifications into stable production plans with quality gates, traceability, and delivery discipline.',
    image: '/expertise/expertise2.png',
    cta: 'Discover more',
    href: '#market',
  },
  {
    id: 'quality',
    title: 'Quality built-in',
    subtitle: 'Inspection discipline at every stage.',
    description:
      'Controlled processes and measurable standards reduce variability and protect enterprise program outcomes.',
    image: '/expertise/expertise3.png',
    cta: 'Discover more',
    href: '#resources',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-soft py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="section-heading text-secondary">Expertise</p>
          <h2 className="heading-2 mt-4">Experience Portfolio</h2>
          <p className="body-text mt-4 text-secondary">
            Engineering-led manufacturing programs presented through a clearer, card-based
            portfolio.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:mt-12">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className="sticky relative z-0 overflow-hidden rounded-[28px] bg-bg px-6 pt-6 shadow-[0_12px_30px_rgba(148,163,184,0.22)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:outline after:-outline-offset-1 after:outline-1 after:outline-border sm:px-8 sm:pt-8 lg:px-16 lg:pt-14"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-14">
                <div className="lg:pb-14">
                  <div className="flex items-center justify-between gap-4">
                    <p className="label-text text-muted">Experience Portfolio</p>
                    <span className="text-[13px] font-medium tracking-[0.16em] text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 max-w-xl">
                    <h3 className="heading-3 text-primary sm:text-[24px]">{item.title}</h3>
                    <p className="body-text mt-4 text-primary">{item.subtitle}</p>
                    <div className="my-6 h-px w-full bg-border" aria-hidden="true" />
                    <p className="body-text text-secondary">{item.description}</p>
                  </div>

                  <div className="mt-8 flex items-center gap-4 pb-6 sm:pb-8 lg:pb-0">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#17306f]"
                    >
                      {item.cta}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[280px] lg:min-h-[420px]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.08)_100%)]" />
                  <div className="relative mt-2 min-h-[280px] overflow-hidden rounded-t-[22px] border-x border-t border-border bg-slate-100 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mt-0 lg:h-full lg:min-h-full lg:rounded-t-[22px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={900}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full object-cover object-top lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
