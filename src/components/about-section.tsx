import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14">
        <div className="order-2 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-soft">
            <Image
              src="/about-us.png"
              alt="AxioNIntegra engineering team and industrial infrastructure"
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-5 md:order-1">
          <p className="section-heading text-secondary">About</p>
          <h2 className="heading-2 text-primary">
            Engineering Integration Built for Industrial Scale.
          </h2>
          <p className="body-text text-secondary">
            AxioNIntegra operates as a single engineering partner across concept design, system
            development, and production readiness. We align multidisciplinary teams around one
            technical plan so complex programs move from idea to deployment with fewer handoffs.
          </p>
          <p className="body-text text-secondary">
            Our delivery model is structured for enterprise environments where performance,
            compliance, and lifecycle reliability matter as much as speed.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex cursor-pointer items-center justify-center rounded-full border border-border bg-bg px-6 py-3 text-[14px] font-semibold leading-[1.2] text-secondary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              <span>Read More</span>
              <IoIosArrowRoundForward
                aria-hidden="true"
                className="ml-2 text-[20px] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
