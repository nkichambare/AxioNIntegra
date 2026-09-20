'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import CredentialsAccordion from '@/components/credentials-accordion';
import { teamProfiles } from '@/lib/team-profiles';

const teamMembers = teamProfiles.filter((profile) => profile.category === 'team');
const advisors = teamProfiles.filter((profile) => profile.category === 'advisor');

const operatingPrinciples = [
  {
    title: 'Engineering alignment',
    description:
      'Technical requirements remain connected to manufacturing decisions from specification review through production.',
  },
  {
    title: 'Manufacturing coordination',
    description:
      'Qualified suppliers, production activity, and quality checkpoints are managed through one structured workflow.',
  },
  {
    title: 'Execution accountability',
    description:
      'Clear ownership, documented progress, and controlled escalation keep cost, quality, and delivery visible.',
  },
];

const missionResponsibilities = [
  'Translate engineering requirements into production-ready specifications',
  'Qualify manufacturing partners against defined performance standards',
  'Define inspection and documentation protocols',
  'Monitor production timelines and manage deviations',
  'Coordinate delivery against cost and quality objectives',
];

const coreValues = [
  {
    title: 'Accountability',
    description:
      'Every engagement has clear ownership across coordination, validation, and delivery, with responsibility defined against the agreed scope.',
  },
  {
    title: 'Precision',
    description:
      'Drawings, specifications, and acceptance criteria guide every decision. Defined inspection checkpoints verify conformity throughout production.',
  },
  {
    title: 'Operational discipline',
    description:
      'Documented workflows and escalation paths reduce variability, keep decisions visible, and make delivery more predictable.',
  },
  {
    title: 'Cost integrity',
    description:
      'Efficiency improvements are evaluated against long-term performance without weakening engineering requirements or quality standards.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication, traceable documentation, and visible progress build confidence while protecting technical and commercial confidentiality.',
  },
  {
    title: 'Sustainable partnerships',
    description:
      'Long-term relationships are built through consistent execution, measurable results, and shared accountability rather than transactional supply.',
  },
];

export default function AboutPage() {
  const { locale = 'en' } = useParams<{ locale: string }>();

  return (
    <main className="min-h-screen bg-bg text-primary">
      <section className="relative h-[calc(100svh-4rem)] min-h-[560px] max-h-[760px] overflow-hidden bg-footer">
        <Image
          src="/about/about-hero.jpg"
          alt="Industrial manufacturing facility with production machinery and engineering personnel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/55" aria-hidden="true" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl items-end px-6 pb-12 pt-28 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <p className="label-text text-white/75">About AxionIntegra</p>
            <h1 className="heading-1 mt-5 text-white">
              Engineering expertise. Industrial discipline. One accountable partner.
            </h1>
            <p className="body-text mt-6 max-w-2xl text-white/85">
              We integrate precision manufacturing, supplier coordination, quality validation, and
              delivery under one accountable structure.
            </p>
          </div>
        </div>
      </section>

      <nav
        aria-label="About page sections"
        className="sticky top-16 z-20 border-b border-border bg-bg"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="hide-scrollbar overflow-x-auto">
            <div className="flex min-w-max gap-7 sm:gap-10">
              {[
                { href: '#overview', label: 'Overview' },
                { href: '#mission', label: 'Mission' },
                { href: '#values', label: 'Values' },
                { href: '#team', label: 'Team' },
                { href: '#credentials', label: 'Credentials' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-4 text-[13px] font-medium leading-[1.2] whitespace-nowrap text-secondary transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none sm:py-5 sm:text-[14px]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="max-w-xl">
            <h2 className="heading-2">
              Engineering expertise. Industrial discipline. End-to-end accountability.
            </h2>
            <p className="body-text mt-5 text-secondary">
              AxionIntegra is led by engineers and operators who have worked across precision
              manufacturing, industrial supply chain management, and quality systems. Our team
              combines deep technical knowledge with operational experience to deliver programs that
              perform under real industrial conditions.
            </p>
          </div>

          <div className="border-t border-border">
            {operatingPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[190px_1fr] sm:gap-8 sm:py-7"
              >
                <h3 className="text-[17px] font-medium leading-[1.4] text-primary">
                  {principle.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-secondary sm:text-[16px]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="scroll-mt-32 border-t border-border py-16 sm:py-20"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-0">
          <div className="lg:pr-16">
            <p className="text-[14px] font-medium text-accent">What we do today</p>
            <h2 id="mission-heading" className="heading-2 mt-3">
              Mission
            </h2>
            <p className="body-text mt-5 max-w-2xl text-secondary">
              We eliminate operational fragmentation by aligning specifications, production, quality
              validation, and delivery under one accountable structure.
            </p>

            <ul className="mt-8 grid gap-x-8 border-t border-border sm:grid-cols-2">
              {missionResponsibilities.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-4 text-[15px] leading-[1.65] text-secondary sm:text-[16px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <p className="text-[14px] font-medium text-accent">What we are building toward</p>
            <h2 className="heading-2 mt-3">Vision</h2>
            <p className="body-text mt-5 text-primary">
              A manufacturing ecosystem where engineering intent remains intact from design through
              delivery.
            </p>
            <p className="mt-5 text-[15px] leading-[1.7] text-secondary sm:text-[16px]">
              We aim to become a trusted cross-border integration partner for precision components,
              assemblies, and engineered materials, giving industrial organisations clearer
              ownership and more predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="values"
        className="scroll-mt-32 bg-soft py-16 sm:py-20"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 id="values-heading" className="heading-2 max-w-2xl">
            Values that guide our operations
          </h2>

          <div className="mt-10 grid border-t border-border sm:grid-cols-2 sm:mt-12">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className={`border-b border-border py-7 sm:py-8 ${
                  index % 2 === 0 ? 'sm:pr-10' : 'sm:border-l sm:pl-10'
                }`}
              >
                <h3 className="heading-3">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-secondary sm:text-[16px]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
          <div className="flex flex-col gap-6">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
              <h2 className="heading-2">
                Our brilliant team of <span className="text-accent">AxioNIntegra</span>
              </h2>
              <p className="body-text text-secondary">
                Specialists who bring deep domain expertise to every client engagement.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Link
                  key={member.name}
                  href={`/about/${member.slug}`}
                  className="group relative block rounded-3xl bg-bg pb-8 transition duration-300 ease-out hover:-translate-y-1 hover:drop-shadow-[0_12px_24px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <div className="relative h-[380px] overflow-hidden rounded-3xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 transition duration-300 group-hover:bg-slate-900/16" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-4 -bottom-2 rounded-2xl border border-border bg-bg/95 px-4 py-3 text-center shadow-sm backdrop-blur transition duration-300 ease-out group-hover:-translate-y-1">
                    <p className="text-[16px] font-medium leading-[1.3] text-primary">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[14px] text-secondary">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
              <h2 className="heading-2">Our Advisors</h2>
              <p className="body-text text-secondary">
                Strategic experts supporting long-term industrial decisions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((member) => (
                <Link
                  key={member.name}
                  href={`/about/${member.slug}`}
                  className="group relative block rounded-3xl bg-bg pb-8 transition duration-300 ease-out hover:-translate-y-1 hover:drop-shadow-[0_12px_24px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <div className="relative h-[380px] overflow-hidden rounded-3xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 transition duration-300 group-hover:bg-slate-900/16" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-4 -bottom-2 rounded-2xl border border-border bg-bg/95 px-4 py-3 text-center shadow-sm backdrop-blur transition duration-300 ease-out group-hover:-translate-y-1">
                    <p className="text-[16px] font-medium leading-[1.3] text-primary">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[14px] text-secondary">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="credentials" className="scroll-mt-32 bg-soft py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-9 px-6">
          <div className="max-w-3xl">
            <p className="label-text text-muted">Company verification</p>
            <h2 className="heading-2 mt-3">Registrations &amp; Credentials</h2>
            <p className="body-text mt-4 text-secondary">
              Verified company registration information supporting transparent supplier onboarding
              and independent business verification. Supporting documents are provided privately
              after reviewing a verification request.
            </p>
          </div>
          <CredentialsAccordion locale={locale} />
        </div>
      </section>
    </main>
  );
}
