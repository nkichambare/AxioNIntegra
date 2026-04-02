'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type ContactFormData, submitContactForm } from '@/app/contact/actions';

// ── Shared styles ──────────────────────────────────────────────
const inputClass =
  'h-11 w-full rounded-lg border border-border bg-bg px-3 text-[15px] text-primary outline-none transition placeholder:text-muted focus:border-accent/40 focus:ring-2 focus:ring-accent/10';

const inputErrorClass =
  'h-11 w-full rounded-lg border border-red-400 bg-bg px-3 text-[15px] text-primary outline-none transition placeholder:text-muted focus:border-red-400 focus:ring-2 focus:ring-red-100';

const selectClass =
  'h-11 w-full appearance-none rounded-lg border border-border bg-bg px-3 pr-8 text-[15px] text-primary outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10 cursor-pointer';

const selectErrorClass =
  'h-11 w-full appearance-none rounded-lg border border-red-400 bg-bg px-3 pr-8 text-[15px] text-primary outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100 cursor-pointer';

// ── Sub-components ─────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="col-span-full pb-1 font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted border-b border-border">
      {children}
    </p>
  );
}

function FieldLabel({
  children,
  required,
  optional,
}: {
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <span className="flex items-center gap-1.5 text-[13px] font-medium text-secondary">
      {children}
      {required && <span className="text-accent">*</span>}
      {optional && <span className="text-[11px] font-normal text-muted">(optional)</span>}
    </span>
  );
}

function ErrorMsg({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[12px] text-red-500">{message}</p>;
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-muted">
        ▾
      </span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ mode: 'onSubmit' });

  async function onSubmit(data: ContactFormData) {
    await submitContactForm(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-start justify-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-5 w-5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-3 mb-2">Inquiry received</h3>
        <p className="body-text text-secondary">
          Your inquiry has been received. We will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* ── Your details ── */}
        <SectionLabel>Your details</SectionLabel>

        {/* Full name */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel required>Full Name</FieldLabel>
          <input
            type="text"
            placeholder="Your full name"
            className={errors.fullName ? inputErrorClass : inputClass}
            {...register('fullName', { required: 'Full name is required' })}
          />
          <ErrorMsg message={errors.fullName?.message} />
        </label>

        {/* Work email */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel required>Work Email</FieldLabel>
          <input
            type="email"
            placeholder="company@email.com"
            className={errors.workEmail ? inputErrorClass : inputClass}
            {...register('workEmail', {
              required: 'Work email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
            })}
          />
          <ErrorMsg message={errors.workEmail?.message} />
        </label>

        {/* Company name */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel required>Company Name</FieldLabel>
          <input
            type="text"
            placeholder="Your company"
            className={errors.companyName ? inputErrorClass : inputClass}
            {...register('companyName', { required: 'Company name is required' })}
          />
          <ErrorMsg message={errors.companyName?.message} />
        </label>

        {/* Country */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel required>Country</FieldLabel>
          <input
            type="text"
            placeholder="e.g. Germany, Austria, France…"
            className={errors.country ? inputErrorClass : inputClass}
            {...register('country', { required: 'Country is required' })}
          />
          <ErrorMsg message={errors.country?.message} />
        </label>

        {/* ── Project details ── */}
        <SectionLabel>Project details</SectionLabel>

        {/* Programme type */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel required>Programme Type</FieldLabel>
          <SelectWrapper>
            <select
              defaultValue=""
              className={errors.programmeType ? selectErrorClass : selectClass}
              {...register('programmeType', { required: 'Please select a programme type' })}
            >
              <option value="" disabled>
                Select programme type
              </option>
              <option value="prototype">Prototype</option>
              <option value="pilot_run">Pilot run</option>
              <option value="series_production">Series production</option>
              <option value="sourcing_consultancy">Sourcing consultancy</option>
              <option value="not_yet_defined">Not yet defined</option>
            </select>
          </SelectWrapper>
          <ErrorMsg message={errors.programmeType?.message} />
        </label>

        {/* Manufacturing process */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel optional>Manufacturing Process</FieldLabel>
          <SelectWrapper>
            <select defaultValue="" className={selectClass} {...register('manufacturingProcess')}>
              <option value="" disabled>
                Select process
              </option>
              <option value="cnc_machining">CNC machining</option>
              <option value="sheet_metal">Sheet metal</option>
              <option value="injection_moulding">Injection moulding</option>
              <option value="assembly">Assembly</option>
              <option value="multiple">Multiple</option>
              <option value="not_yet_defined">Not yet defined</option>
            </select>
          </SelectWrapper>
        </label>

        {/* Annual volume */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel optional>Estimated Annual Volume</FieldLabel>
          <input
            type="text"
            placeholder="e.g. 500 units, 10,000 units"
            className={inputClass}
            {...register('annualVolume')}
          />
        </label>

        {/* Target timeline */}
        <label className="flex flex-col gap-1.5">
          <FieldLabel optional>Target Timeline</FieldLabel>
          <input
            type="text"
            placeholder="e.g. First delivery in 3 months"
            className={inputClass}
            {...register('targetTimeline')}
          />
        </label>

        {/* ── How can we help ── */}
        <label className="col-span-full flex flex-col gap-1.5">
          <FieldLabel required>How Can We Help?</FieldLabel>
          <textarea
            rows={5}
            placeholder="Brief description of your requirement. Attach drawings if available."
            className={`w-full rounded-lg border px-3 py-2.5 text-[15px] text-primary outline-none transition placeholder:text-muted focus:ring-2 ${
              errors.message
                ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                : 'border-border bg-bg focus:border-accent/40 focus:ring-accent/10'
            }`}
            {...register('message', { required: 'Please describe how we can help' })}
          />
          <ErrorMsg message={errors.message?.message} />
        </label>

        {/* Submit */}
        <div className="col-span-full pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting && (
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {isSubmitting ? 'Sending…' : 'Send Inquiry'}
          </button>
        </div>
      </div>
    </form>
  );
}
