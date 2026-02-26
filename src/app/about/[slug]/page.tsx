import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProfileBySlug, teamProfiles } from '@/lib/team-profiles';

type ProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return teamProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  if (!profile) {
    return {
      title: 'Profile | AxioNIntegra',
    };
  }

  return {
    title: `${profile.name} | AxioNIntegra`,
    description: `${profile.name} - ${profile.role}`,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  if (!profile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg pt-[104px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <p className="label-text text-muted">Profile</p>
          <Link href="/about" className="text-[14px] font-medium text-accent transition hover:opacity-80">
            Back to About
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-border bg-bg p-4 sm:p-5">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-border bg-soft">
              <Image src={profile.image} alt={profile.name} fill className="object-cover" />
            </div>
            <div className="pt-5">
              <h1 className="heading-2">{profile.name}</h1>
              <p className="mt-2 text-[15px] font-medium leading-[1.5] text-accent sm:text-[16px]">
                {profile.role}
              </p>
              <p className="body-text mt-3 text-secondary">{profile.shortBio}</p>
            </div>
          </aside>

          <div className="flex flex-col gap-6">
            <article className="rounded-3xl border border-border bg-bg p-6 sm:p-8">
              <h2 className="heading-3">About</h2>
              <div className="mt-4 flex flex-col gap-4">
                {profile.longBio.map((paragraph) => (
                  <p key={paragraph} className="body-text text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-bg p-6 sm:p-8">
              <h2 className="heading-3">Focus Areas</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {profile.focusAreas.map((focus) => (
                  <li
                    key={focus}
                    className="rounded-xl border border-border bg-soft px-4 py-3 text-[15px] leading-[1.6] text-primary"
                  >
                    {focus}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-border bg-bg p-6 sm:p-8">
              <h2 className="heading-3">Highlights</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {profile.highlights.map((highlight) => (
                  <li key={highlight} className="body-text text-secondary">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
