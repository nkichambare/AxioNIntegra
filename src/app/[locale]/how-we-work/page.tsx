import Image from 'next/image';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

const steps = [
  {
    number: '01',
    title: 'Spec Review & DFM',
    description:
      'We review drawings, materials, and tolerances with you, then flag manufacturability risks before production begins.',
    highlights: ['Drawing review', 'Material & tolerance review', 'DFM risks'],
  },
  {
    number: '02',
    title: 'Supplier Selection',
    description:
      'We match the programme to qualified production partners with the required capability, capacity, and quality controls.',
    highlights: ['Capability match', 'Capacity review', 'Quality controls'],
  },
  {
    number: '03',
    title: 'In-Process Inspection',
    description:
      'We check critical production stages and address deviations while there is still time to correct them.',
    highlights: ['Critical checkpoints', 'Deviation review'],
  },
  {
    number: '04',
    title: 'Final Acceptance',
    description:
      'We validate finished parts against agreed specifications and review the inspection and material documentation before dispatch.',
    highlights: ['Specification check', 'Inspection records', 'Material documents'],
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'We coordinate shipment with the agreed traceability, inspection, and delivery records in one package.',
    highlights: ['Shipment coordination', 'Traceability', 'Delivery records'],
  },
];

const chapters = [
  {
    number: '01',
    title: 'Prepare',
    context: 'Technical review and production planning',
    image: '/how-we-work/process-prepare-photo.jpg',
    imageAlt: 'Machined metal component resting on technical drawings',
    steps: steps.slice(0, 2),
  },
  {
    number: '02',
    title: 'Control',
    context: 'Inspection during and after production',
    image: '/how-we-work/process-control-photo.jpg',
    imageAlt: 'Worker measuring a metal component at a machine',
    steps: steps.slice(2, 4),
  },
  {
    number: '03',
    title: 'Deliver',
    context: 'Documented dispatch',
    image: '/how-we-work/process-deliver-photo.jpg',
    imageAlt: 'Rows of finished machined metal components',
    steps: steps.slice(4),
  },
];

export default async function HowWeWorkPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-bg text-primary">
      <section className="relative flex min-h-[500px] items-end overflow-hidden bg-footer pb-[60px] pt-16 sm:min-h-[560px]">
        <Image
          src="/how-we-work/how-we-work-hero.jpg"
          alt="Digital caliper beside a metal component"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center] sm:object-[60%_62%]"
        />
        <div className="absolute inset-0 bg-slate-950/45" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="label-text text-white/80">Process</p>
            <h1 className="heading-1 mt-3 text-white">How We Work</h1>
            <p className="body-text mt-4 max-w-xl text-white/90">
              From specification review to documented delivery, one accountable team coordinates
              every stage of your manufacturing programme.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss your requirement
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Our process">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.number}
            className={`border-t border-border py-12 sm:py-16 ${index === 1 ? 'bg-soft' : 'bg-bg'}`}
          >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-14">
              <div className={index === 1 ? 'lg:order-2' : undefined}>
                <p className="text-[12px] font-medium uppercase leading-[1.4] tracking-[0.08em] text-secondary sm:text-[13px]">
                  {chapter.context}
                </p>
                <h2 className="mt-3 text-[22px] font-semibold uppercase leading-[1.2] text-primary sm:text-[25px]">
                  {chapter.number} / {chapter.title}
                </h2>
                <ol className="mt-10 space-y-9 border-l-2 border-border pl-7 sm:mt-12 sm:space-y-11">
                  {chapter.steps.map((step) => (
                    <li key={step.number} className="relative">
                      <span
                        className="absolute -left-[35px] top-1.5 h-[14px] w-[14px] rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <h3 className="text-[18px] font-medium leading-[1.3]">{step.title}</h3>
                        <span className="shrink-0 rounded-[3px] bg-accent/8 px-2.5 py-1 text-[10px] font-medium uppercase leading-[1.4] tracking-[0.08em] text-accent">
                          Stage {step.number}
                        </span>
                      </div>
                      <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-secondary">
                        {step.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key activities">
                        {step.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className={`rounded-[3px] px-2.5 py-1.5 text-[12px] leading-[1.4] text-secondary ${index === 1 ? 'bg-bg' : 'bg-soft'}`}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden rounded-md bg-soft lg:aspect-[5/4] ${index === 1 ? 'lg:order-1' : ''} `}
              >
                <Image
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 550px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/65" aria-hidden="true" />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="heading-2 max-w-2xl">Ready to discuss your programme?</h2>
          <p className="body-text mt-4 max-w-2xl text-secondary">
            Tell us what you need to manufacture. We will explain how the process applies to your
            specifications, volume, and delivery requirements.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Discuss your requirement
          </Link>
        </div>
      </section>
    </main>
  );
}
