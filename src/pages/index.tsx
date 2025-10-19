import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FiShield,
  FiCloud,
  FiServer,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const features: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
  }> = [
    {
      title: "Enterprise Security",
      description:
        "Defense-in-depth with continuous monitoring to keep your data safe.",
      icon: <FiShield className="h-6 w-6" />,
    },
    {
      title: "Cloud-Native",
      description:
        "Scale on demand with cost-efficient, multi-cloud architecture.",
      icon: <FiCloud className="h-6 w-6" />,
    },
    {
      title: "High Performance",
      description:
        "Optimized pipelines, low latency APIs, and resilient services.",
      icon: <FiServer className="h-6 w-6" />,
    },
    {
      title: "Analytics-Driven",
      description:
        "Decisions powered by real-time analytics and fine-grained observability.",
      icon: <FiTrendingUp className="h-6 w-6" />,
    },
  ];

  const logos = [
    { src: "/Logo-Ditech.png", alt: "Ditech", width: 120, height: 36 },
    { src: "/Logo-Digious.png", alt: "Digious", width: 120, height: 36 },
    { src: "/Logo-Youseo-10.png", alt: "Youseo", width: 120, height: 36 },
    { src: "/Logo-Ditech3.png", alt: "Ditech3", width: 120, height: 36 },
  ];

  const caseStudies = [
    {
      src: "/two-female.jpg",
      alt: "AI Ops transformation",
      title: "AI Ops transformation",
    },
    {
      src: "/working-on-laptop.jpg",
      alt: "Cloud cost optimization",
      title: "Cloud cost optimization",
    },
    {
      src: "/data-engineers.jpg",
      alt: "Data engineering at scale",
      title: "Data engineering at scale",
    },
  ];

  return (
    <div className={`${inter.className} bg-[#06080f] text-white`}> 
      <Head>
        <title>Ditech — Modern Cloud, Data & Security</title>
        <meta
          name="description"
          content="Redesigned Ditech homepage: modern cloud, data, and security solutions with delightful UX."
        />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(1250px_circle_at_10%_10%,rgba(34,211,238,0.06),transparent_40%),radial-gradient(1250px_circle_at_90%_30%,rgba(232,121,249,0.06),transparent_40%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 lg:flex lg:items-center lg:gap-10 lg:pt-28 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Launching new platform updates
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Build the future with
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent"> cloud, data</span> &
              <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-300 bg-clip-text text-transparent"> security</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/70">
              End-to-end solutions engineered for scale and delightful user experiences. From
              strategy to execution, we help you ship faster, safer, and smarter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-medium text-white transition [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] hover:brightness-110"
              >
                Get a proposal
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.08]"
              >
                View case studies
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Trusted by teams worldwide
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-70">
                {logos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-7 w-auto"
                    priority
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-14 w-full flex-1 sm:mt-16 lg:mt-0">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <Image
                src="/artificial.jpg"
                alt="Platform preview"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06080f] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16" id="features">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            What makes us different
          </h2>
          <p className="mt-3 text-white/70">
            A complete platform of secure, cloud-native services engineered for
            performance, scalability, and insight.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="absolute -inset-px -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(232,121,249,0.25))",
              }} />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white/[0.02] py-16" id="cases">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Recent wins</h2>
              <p className="mt-2 text-white/70">
                Outcomes we delivered across AI, cloud, and data engineering.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/[0.08] md:inline-flex"
            >
              Work with us
              <FiArrowRight />
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70">See how we did it →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16" id="stats">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Proven impact, measurable results
            </h2>
            <p className="mt-3 text-white/70">
              We invest in systems that move the needle: performance, reliability,
              and developer velocity. Our teams operate as trusted partners.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "Faster feature delivery", value: "3.2×" },
              { label: "Infra cost reduction", value: "-41%" },
              { label: "P99 latency improvement", value: "-58%" },
              { label: "Uptime", value: "99.98%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/[0.02] py-16" id="testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Clients love the outcome</h2>
            <p className="mt-3 text-white/70">
              We focus on impact, clear communication, and long-term partnerships.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "They shipped a complex migration ahead of schedule with zero downtime.",
                author: "CTO, Fintech",
              },
              {
                quote:
                  "Our analytics visibility went from days to minutes. Game-changing.",
                author: "VP Data, Retail",
              },
              {
                quote:
                  "The new platform is faster, safer, and a joy to build on.",
                author: "Head of Engineering, SaaS",
              },
            ].map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <blockquote className="text-white/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-white/60">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-fuchsia-500/10 px-6 py-14"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="relative">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to accelerate your roadmap?
            </h2>
            <p className="mt-3 text-white/70">
              Tell us about your goals. We will craft a clear, pragmatic proposal
              with timelines, outcomes, and pricing.
            </p>
          </div>
          <form
            className="mt-8 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
              required
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
              required
            />
            <textarea
              placeholder="What would you like to build?"
              rows={4}
              className="sm:col-span-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
            />
            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-medium text-white transition hover:brightness-110"
            >
              Request proposal
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16" />
      <Footer />
    </div>
  );
}
