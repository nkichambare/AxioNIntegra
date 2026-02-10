import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

import Button from '@/components/button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/60 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <p className="section-heading text-secondary">Contact</p>
          <h1 className="heading-1 max-w-4xl">Talk to our team.</h1>
          <p className="body-text max-w-2xl text-secondary">
            Share your product goals, technical requirements, and expected timelines. We will
            respond with the right engineering path and execution model.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              aria-label="Back to home"
              className="inline-flex items-center text-accent transition hover:text-primary"
            >
              <IoHome className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-bg p-6">
              <p className="heading-3">General Inquiries</p>
              <a
                href="mailto:contact@axionintegra.com"
                className="mt-3 inline-block text-[16px] text-accent transition hover:underline"
              >
                contact@axionintegra.com
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-bg p-6">
              <p className="heading-3">Project Discussions</p>
              <p className="body-text mt-3 text-secondary">
                Include scope, target markets, and program milestones so we can route your request
                to the right engineering team.
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-border bg-bg p-6 sm:p-8">
            <div className="grid gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-secondary">Full Name</span>
                <input
                  type="text"
                  name="name"
                  className="h-11 rounded-lg border border-border px-3 text-[15px] outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-secondary">Work Email</span>
                <input
                  type="email"
                  name="email"
                  className="h-11 rounded-lg border border-border px-3 text-[15px] outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-secondary">Company</span>
                <input
                  type="text"
                  name="company"
                  className="h-11 rounded-lg border border-border px-3 text-[15px] outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-secondary">How can we help?</span>
                <textarea
                  name="message"
                  rows={6}
                  className="rounded-lg border border-border px-3 py-2 text-[15px] outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
                />
              </label>

              <div className="pt-1">
                <Button type="submit">Send Inquiry</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
