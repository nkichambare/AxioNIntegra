import Link from 'next/link';
import type { Locale, ResourceCard } from '@/lib/content';
import ResourceCardComponent from '@/components/resource-card';

type ResourcesSectionProps = {
  resources: ResourceCard[];
  requestedLocale: Locale;
};

export default function ResourcesSection({ resources, requestedLocale }: ResourcesSectionProps) {
  return (
    <section id="resources" className="bg-bg py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-14">

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className="section-heading text-secondary">Resources</p>
            <h2 className="heading-2">Insights for engineering-led programs</h2>
            <p className="body-text max-w-2xl text-secondary">
              Practical references and operating guides for teams building industrial products with
              high performance and compliance requirements.
            </p>
          </div>
          <Link
            href={`/resources?lang=${requestedLocale}`}
            className="hidden shrink-0 font-ibm-mono text-[11px] tracking-[0.12em] uppercase text-accent transition hover:opacity-70 md:block"
          >
            All Articles →
          </Link>
        </div>

        {/* Grid */}
        {resources.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <ResourceCardComponent
                key={resource.translationKey}
                index={index + 1}
                category="Resources"
                heading={resource.title}
                description={resource.preview}
                readTime={resource.ctaLabel}
                href={`/resources/${resource.postSlug}?lang=${requestedLocale}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-[15px] text-muted">No resources published yet.</p>
        )}

        {/* Mobile "all articles" link */}
        <div className="flex justify-center md:hidden">
          <Link
            href={`/resources?lang=${requestedLocale}`}
            className="font-ibm-mono text-[11px] tracking-[0.12em] uppercase text-accent transition hover:opacity-70"
          >
            All Articles →
          </Link>
        </div>

      </div>
    </section>
  );
}
