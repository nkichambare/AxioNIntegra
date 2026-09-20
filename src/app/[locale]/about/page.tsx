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

const coreValues = [
  {
    title: 'Accountability',
    description:
      'Responsibility is central to our operating model. Each engagement is defined by clear ownership of coordination, validation, and execution within the agreed scope. We operate under the principle that industrial performance improves when responsibility is centralised and measurable.',
  },
  {
    title: 'Precision',
    description:
      'Technical accuracy and process discipline form the foundation of our work. Every project is aligned strictly to drawings, specifications, and defined acceptance criteria. Manufacturing performance is verified through structured inspection checkpoints rather than assumption.',
  },
  {
    title: 'Operational Discipline',
    description:
      'Structured workflows, documented processes, and defined escalation paths reduce variability and improve predictability. We approach execution with systematic control rather than informal coordination.',
  },
  {
    title: 'Cost Integrity',
    description:
      'Cost optimisation must support long-term performance stability. We pursue efficiency improvements through structured evaluation and controlled implementation without compromising engineering requirements or quality standards.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication, documented traceability, and visible performance metrics strengthen trust between all stakeholders. We maintain open process visibility while protecting technical and commercial confidentiality.',
  },
  {
    title: 'Sustainable Partnerships',
    description:
      'We prioritise durable industrial relationships over transactional exchanges. Repeat collaboration is built on consistent execution, measurable results, and mutual accountability.',
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

      <section aria-labelledby="vision-heading">
        <div className="relative overflow-hidden bg-soft py-16 sm:py-20">
          <div
            className="pointer-events-none absolute right-[-10px] top-[-20px] select-none font-ibm-mono text-[160px] font-black leading-none text-primary/[0.04]"
            aria-hidden="true"
          >
            01
          </div>
          <div className="relative mx-auto max-w-[860px] px-6 sm:px-14 flex flex-col gap-6">
            <div>
              <span className="mb-3 block font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                Our Vision
              </span>
              <h2
                id="vision-heading"
                className="text-[clamp(22px,3vw,34px)] font-semibold leading-[1.2] text-primary"
              >
                Structured Manufacturing Integration With Full Accountability
              </h2>
            </div>
            <div className="h-px w-12 bg-accent/40" />
            <div className="flex flex-col gap-4">
              <p className="body-text text-secondary">
                AxionIntegra&apos;s vision is to redefine how industrial companies engage with
                manufacturing and supply execution by replacing fragmented vendor management with
                structured integration and centralised responsibility.
              </p>
              <p className="body-text text-secondary">
                We envision a manufacturing ecosystem where engineering intent is preserved
                throughout production, where quality is verified through defined control mechanisms,
                and where supply chains operate with clarity instead of coordination complexity.
              </p>
              <p className="body-text text-secondary">
                As global manufacturing networks expand and cost pressures intensify, industrial
                organisations require reliable execution partners who can bridge technical
                requirements with scalable production capability. Our long-term vision is to become
                a trusted integration partner for precision components, assemblies, and engineered
                materials, delivering predictable performance across borders without compromising
                technical standards.
              </p>
              <p className="body-text text-secondary">
                AxionIntegra aims to contribute to a more disciplined, transparent, and accountable
                manufacturing environment where responsibility is clearly defined and outcomes are
                measurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="scroll-mt-32" aria-labelledby="mission-heading">
        <div className="relative overflow-hidden bg-bg py-16 sm:py-20">
          <div
            className="pointer-events-none absolute right-[-10px] top-[-20px] select-none font-ibm-mono text-[160px] font-black leading-none text-primary/[0.04]"
            aria-hidden="true"
          >
            02
          </div>
          <div className="relative mx-auto max-w-[860px] px-6 sm:px-14 flex flex-col gap-6">
            <div>
              <span className="mb-3 block font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                Our Mission
              </span>
              <h2
                id="mission-heading"
                className="text-[clamp(22px,3vw,34px)] font-semibold leading-[1.2] text-primary"
              >
                Simplifying Industrial Supply Through Execution Ownership
              </h2>
            </div>
            <div className="h-px w-12 bg-accent/40" />
            <div className="flex flex-col gap-4">
              <p className="body-text text-secondary">
                Our mission is to eliminate operational fragmentation within industrial supply
                chains by acting as a single accountable partner for precision manufacturing and
                supply coordination.
              </p>
              <p className="body-text text-secondary">
                We support industrial clients by aligning technical specifications with qualified
                production networks, ensuring manufacturing feasibility, monitoring execution
                progress, validating quality conformity, and coordinating delivery under a unified
                structure.
              </p>
              <p className="body-text text-secondary">
                Rather than requiring companies to manage multiple suppliers, inspection activities,
                and communication layers internally, AxionIntegra centralises coordination and
                assumes responsibility for execution within its defined scope.
              </p>
              <p className="body-text text-secondary">We focus on:</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Translating engineering requirements into production-ready specifications',
                  'Qualifying manufacturing partners capable of meeting performance standards',
                  'Structuring inspection and documentation protocols',
                  'Monitoring production timelines and managing deviations',
                  'Delivering finished components and assemblies aligned with cost and quality objectives',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 body-text text-secondary">
                    <span className="mt-[10px] h-px w-4 shrink-0 bg-accent/50" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="body-text text-secondary">
                Our mission is not limited to supplying parts. It is centred on ensuring that
                industrial manufacturing programs move forward with clarity, control, and reduced
                execution risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-32" aria-labelledby="values-heading">
        <div className="relative overflow-hidden bg-soft py-16 sm:py-20">
          <div
            className="pointer-events-none absolute right-[-10px] top-[-20px] select-none font-ibm-mono text-[160px] font-black leading-none text-primary/[0.04]"
            aria-hidden="true"
          >
            03
          </div>
          <div className="relative mx-auto max-w-[860px] px-6 sm:px-14 flex flex-col gap-6">
            <div>
              <span className="mb-3 block font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                Our Values
              </span>
              <h2
                id="values-heading"
                className="text-[clamp(22px,3vw,34px)] font-semibold leading-[1.2] text-primary"
              >
                Principles That Guide Our Operations
              </h2>
            </div>
            <div className="h-px w-12 bg-accent/40" />
            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <article
                  key={value.title}
                  className="flex flex-col border border-border bg-bg overflow-hidden"
                >
                  <div className="h-[3px] w-full bg-gradient-to-r from-accent/60 via-accent/30 to-transparent" />
                  <div className="flex flex-col gap-2 p-6">
                    <h3 className="text-[15px] font-semibold text-primary">{value.title}</h3>
                    <p className="body-text text-secondary">{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
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
