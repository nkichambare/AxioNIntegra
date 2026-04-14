'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamProfiles } from '@/lib/team-profiles';

type AboutTab = 'about' | 'mission';

const teamMembers = teamProfiles.filter((profile) => profile.category === 'team');
const advisors = teamProfiles.filter((profile) => profile.category === 'advisor');

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
  const [activeTab, setActiveTab] = useState<AboutTab>('about');

  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex gap-10 sm:gap-16">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`heading-3 relative py-7 text-left transition cursor-pointer ${
                activeTab === 'about' ? 'text-primary' : 'text-muted'
              }`}
            >
              About
              {activeTab === 'about' ? (
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`heading-3 relative py-7 text-left transition cursor-pointer ${
                activeTab === 'mission' ? 'text-primary' : 'text-muted'
              }`}
            >
              Mission, Vision, Values
              {activeTab === 'mission' ? (
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
              ) : null}
            </button>
          </div>
        </div>
      </section>

      <section className={activeTab === 'about' ? 'py-16 sm:py-20' : ''}>
        <div className={activeTab === 'about' ? 'mx-auto w-full max-w-6xl px-6' : ''}>
          {activeTab === 'about' ? (
            <div className="flex flex-col gap-14">
              <div className="max-w-3xl">
                <h1 className="heading-2">
                  Engineering expertise. Industrial discipline. End-to-end accountability.
                </h1>
                <p className="body-text mt-4 text-secondary">
                  AxionIntegra is led by engineers and operators who have worked across precision
                  manufacturing, industrial supply chain management, and quality systems. Our team
                  combines deep technical knowledge with operational experience to deliver programs
                  that perform under real industrial conditions.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
                  <h2 className="heading-2">
                    Our brilliant team of <span className="text-accent">AxioNIntegra</span>
                  </h2>
                  <p className="body-text text-secondary">
                    These people work on making our product best.
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
          ) : (
            <div className="flex flex-col gap-0">
              {/* ── VISION ── */}
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
                    <h2 className="text-[clamp(22px,3vw,34px)] font-black leading-[1.2] text-primary">
                      Structured Manufacturing Integration With Full Accountability
                    </h2>
                  </div>
                  <div className="h-px w-12 bg-accent/40" />
                  <div className="flex flex-col gap-4">
                    <p className="body-text text-secondary">
                      AxionIntegra&apos;s vision is to redefine how industrial companies engage with
                      manufacturing and supply execution by replacing fragmented vendor management
                      with structured integration and centralised responsibility.
                    </p>
                    <p className="body-text text-secondary">
                      We envision a manufacturing ecosystem where engineering intent is preserved
                      throughout production, where quality is verified through defined control
                      mechanisms, and where supply chains operate with clarity instead of
                      coordination complexity.
                    </p>
                    <p className="body-text text-secondary">
                      As global manufacturing networks expand and cost pressures intensify,
                      industrial organisations require reliable execution partners who can bridge
                      technical requirements with scalable production capability. Our long-term
                      vision is to become a trusted integration partner for precision components,
                      assemblies, and engineered materials, delivering predictable performance
                      across borders without compromising technical standards.
                    </p>
                    <p className="body-text text-secondary">
                      AxionIntegra aims to contribute to a more disciplined, transparent, and
                      accountable manufacturing environment where responsibility is clearly defined
                      and outcomes are measurable.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── MISSION ── */}
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
                    <h2 className="text-[clamp(22px,3vw,34px)] font-black leading-[1.2] text-primary">
                      Simplifying Industrial Supply Through Execution Ownership
                    </h2>
                  </div>
                  <div className="h-px w-12 bg-accent/40" />
                  <div className="flex flex-col gap-4">
                    <p className="body-text text-secondary">
                      Our mission is to eliminate operational fragmentation within industrial supply
                      chains by acting as a single accountable partner for precision manufacturing
                      and supply coordination.
                    </p>
                    <p className="body-text text-secondary">
                      We support industrial clients by aligning technical specifications with
                      qualified production networks, ensuring manufacturing feasibility, monitoring
                      execution progress, validating quality conformity, and coordinating delivery
                      under a unified structure.
                    </p>
                    <p className="body-text text-secondary">
                      Rather than requiring companies to manage multiple suppliers, inspection
                      activities, and communication layers internally, AxionIntegra centralises
                      coordination and assumes responsibility for execution within its defined
                      scope.
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
                          <span
                            className="mt-[10px] h-px w-4 shrink-0 bg-accent/50"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="body-text text-secondary">
                      Our mission is not limited to supplying parts. It is centred on ensuring that
                      industrial manufacturing programs move forward with clarity, control, and
                      reduced execution risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── VALUES ── */}
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
                    <h2 className="text-[clamp(22px,3vw,34px)] font-black leading-[1.2] text-primary">
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
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
