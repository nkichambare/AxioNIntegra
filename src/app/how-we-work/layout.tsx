import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/how-we-work' },
};

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
