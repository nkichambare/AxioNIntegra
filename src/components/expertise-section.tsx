export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-bg py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-16">
        <div className="flex flex-col gap-3">
          <p className="section-heading text-secondary">Expertise</p>
          <h2 className="heading-2">Engineering accountability across the full cycle.</h2>
          <p className="body-text text-secondary">
            AxioNIntegra operates as an engineering‑led manufacturing partner. We unify design
            intent, production execution, and quality validation under one accountable
            engagement—reducing risk, handoffs, and variability for enterprise programs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="heading-3">Single point of accountability</p>
            <p className="body-text mt-2 text-secondary">
              One responsible partner from specification to delivery.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="heading-3">Engineering‑first execution</p>
            <p className="body-text mt-2 text-secondary">
              Decisions anchored in manufacturability, quality, and cost control.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="heading-3">Quality built in</p>
            <p className="body-text mt-2 text-secondary">
              Controlled processes, inspection discipline, and traceable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
