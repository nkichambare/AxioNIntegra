const capabilityGroups = [
  {
    title: 'Engineering & Materials',
    framing: 'Material selection and design optimization for manufacturability.',
    items: [
      'Metals and alloys',
      'Engineering polymers',
      'Composite materials',
      'Design-for-manufacturing analysis',
    ],
  },
  {
    title: 'Manufacturing Processes',
    framing: 'Precision manufacturing across established industrial methods.',
    items: [
      'CNC machining',
      'Injection molding',
      'Sheet metal forming',
      'Surface treatment and finishing',
      'Assembly and integration',
    ],
  },
  {
    title: 'Production Scale',
    framing: 'Flexible capacity from single prototypes to volume production.',
    items: [
      'Functional prototypes',
      'Pilot and validation runs',
      'Series production',
      'Volume manufacturing',
    ],
  },
];

const sharedHoverStyle =
  'relative overflow-hidden transition before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-l-2xl before:bg-accent before:opacity-0 before:transition hover:before:opacity-100';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-heading">Core Capabilities</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl border border-border bg-bg p-8 ${sharedHoverStyle}`}
            >
              <h3 className="body-text font-semibold">{group.title}</h3>
              <p className="mt-3 text-[12px] text-secondary">{group.framing}</p>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center text-[14px] text-secondary">
                    <span className="mr-3 h-px w-3 bg-border" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
