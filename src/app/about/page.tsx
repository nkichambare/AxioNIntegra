'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamProfiles } from '@/lib/team-profiles';

type AboutTab = 'about' | 'mission';

const teamMembers = teamProfiles.filter((profile) => profile.category === 'team');
const advisors = teamProfiles.filter((profile) => profile.category === 'advisor');

const values = [
  {
    title: 'Mission',
    description:
      'Enable enterprise teams to move from concept to production with one accountable engineering partner.',
  },
  {
    title: 'Vision',
    description:
      'Set the benchmark for integrated industrial delivery where quality, speed, and compliance scale together.',
  },
  {
    title: 'Values',
    description:
      'Ownership, precision, transparency, and long-term reliability in every engineering decision.',
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
              className={`heading-3 relative py-7 text-left transition ${
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
              className={`heading-3 relative py-7 text-left transition ${
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          {activeTab === 'about' ? (
            <div className="flex flex-col gap-14">
              <div className="max-w-3xl">
                <h1 className="heading-2">Integrated engineering for complex programs.</h1>
                <p className="body-text mt-4 text-secondary">
                  AxioNIntegra brings design, manufacturing, and quality execution together under a
                  single accountable model. We help enterprise teams reduce handoffs, improve
                  predictability, and deliver production-ready outcomes.
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
            <div className="flex flex-col gap-10">
              <div className="max-w-3xl">
                <h1 className="heading-2">What drives our work.</h1>
                <p className="body-text mt-4 text-secondary">
                  Our operating principles guide how we design solutions, execute programs, and
                  build long-term partnerships in industrial environments.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {values.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-border bg-bg p-6">
                    <h2 className="heading-3">{item.title}</h2>
                    <p className="body-text mt-3 text-secondary">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
