'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type Credential, getCredentialText, getFeaturedCredentials } from '@/lib/credentials-data';
import { teamProfiles } from '@/lib/team-profiles';

const teamMembers = teamProfiles.filter((profile) => profile.category === 'team');
const advisors = teamProfiles.filter((profile) => profile.category === 'advisor');
const [founder, ...operationalTeam] = teamMembers;
const featuredCredentials = getFeaturedCredentials();

const credentialStatusLabels: Record<Credential['status'], string> = {
  registered: 'Registered',
  active: 'Active',
  valid: 'Valid',
  'no-expiry': 'No expiry',
  expired: 'Expired',
};

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
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="heading-2">Leadership and operations</h2>
            <p className="body-text mt-4 text-secondary">
              Specialists combining engineering, operational, and organisational experience across
              every client engagement.
            </p>
          </div>

          {founder ? (
            <Link
              href={`/${locale}/about/${founder.slug}`}
              className="group mt-10 grid gap-8 border-y border-border py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-12 sm:mt-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-soft">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="max-w-xl">
                <p className="text-[14px] font-medium text-accent">{founder.role}</p>
                <h3 className="heading-3 mt-3 transition-colors group-hover:text-accent">
                  {founder.name}
                </h3>
                <p className="body-text mt-5 text-secondary">{founder.shortBio}</p>
                <p className="mt-6 text-[14px] font-medium text-accent">
                  View profile <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          ) : null}

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {operationalTeam.map((member) => (
              <Link
                key={member.name}
                href={`/${locale}/about/${member.slug}`}
                className="group block border-b border-border pb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-md bg-soft">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="heading-3 mt-5 transition-colors group-hover:text-accent">
                  {member.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-secondary">{member.role}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-12 sm:mt-20">
            <div className="max-w-2xl">
              <h3 className="heading-3">Advisors</h3>
              <p className="body-text mt-4 text-secondary">
                Strategic expertise supporting long-term industrial decisions and capability
                development.
              </p>
            </div>

            <div className="mt-8 grid border-t border-border lg:grid-cols-2 lg:gap-x-10">
              {advisors.map((member) => (
                <Link
                  key={member.name}
                  href={`/${locale}/about/${member.slug}`}
                  className="group grid grid-cols-[96px_1fr] gap-5 border-b border-border py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 sm:grid-cols-[112px_1fr]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-soft">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-medium leading-[1.35] text-primary transition-colors group-hover:text-accent">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-[13px] font-medium leading-[1.5] text-accent">
                      {member.focusAreas[0]}
                    </p>
                    <p className="mt-3 line-clamp-2 text-[14px] leading-[1.6] text-secondary">
                      {member.shortBio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="credentials" className="scroll-mt-32 bg-soft py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="heading-2">Registrations &amp; credentials</h2>
            <p className="body-text mt-5 text-secondary">
              Verified company registration information supporting transparent supplier onboarding
              and independent business verification.
            </p>
            <Link
              href={`/${locale}/credentials`}
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-accent transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              View registrations and credentials
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 border-t border-border sm:mt-12">
            {featuredCredentials.map((credential) => (
              <article
                key={credential.id}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-7"
              >
                <h3 className="text-[17px] font-medium leading-[1.4] text-primary sm:text-[19px]">
                  {getCredentialText(credential.title, locale)}
                </h3>
                <p className="text-[14px] leading-[1.6] text-secondary">
                  {credential.authority
                    ? getCredentialText(credential.authority, locale)
                    : 'Authority not published'}
                </p>
                <p className="text-[13px] font-medium text-accent">
                  {credentialStatusLabels[credential.status]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="heading-2">Discuss your manufacturing requirement</h2>
            <p className="body-text mt-5 text-secondary">
              Share your drawings, specifications, or sourcing challenge, and our team will help
              define the right manufacturing path.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-7 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-accent px-6 py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 active:opacity-80"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
