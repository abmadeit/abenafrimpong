
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Layers3,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

const specialties = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building APIs and application logic.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Structuring data for reliable applications.",
  },
  {
    icon: Layers3,
    title: "System Design",
    description: "Planning maintainable software systems.",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "REST APIs",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Git",
];

const homeProjects = [
  {
    title: "Invoicer",
    category: "Invoice Management System",
    description:
      "A web application for creating, managing, and tracking invoices, with client management, invoice status tracking, and downloadable PDF invoices.",
    technologies: ["Next.js", "TypeScript", "Django REST Framework", "PostgreSQL", "JavaScript"],
    status: "Completed",
    liveUrl: "https://invoicer-apps.netlify.app/",
  },
  {
    title: "PennyWise",
    category: "Personal Finance Platform",
    description:
      "A planned budgeting and financial management platform for individuals, freelancers, and small businesses.",
    technologies: ["Python", "Django REST Framework", "Microservices", "Database Design"],
    status: "In development",
    liveUrl: "",
  },
  {
    title: "KORKOR KOUTURE",
    category: "Fashion Business Management System",
    description:
      "A business management platform for my mom's sewing and fashion brand.",
    technologies: ["Django REST Framework", "PostgreSQL", "Automation", "TypeScript", "Next.js"],
    status: "In development",
    liveUrl: "",
  },
];

export default function HomePage() {

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-40 top-72 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="container-width relative grid min-h-[calc(100vh-76px)] items-center gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Backend Software Engineer
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Abena Fosua
              <span className="block text-blue-400">Frimpong.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build the logic behind useful digital products, from backend
              APIs and database design to applications that solve real-world
              problems.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              I&apos;m growing as a software engineer through practical
              projects, continuous learning, and a focus on writing clear,
              maintainable code.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Explore my projects
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-white/5"
              >
                <Mail size={17} />
                Get in touch
              </Link>
            </div>

            <a
              href="#about-preview"
              className="mt-12 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-300"
            >
              Discover more
              <ArrowDown size={15} />
            </a>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-3 shadow-2xl shadow-blue-950/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src="/images/Abena.JPG"
                  alt="Abena Fosua Frimpong, Backend Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/90 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-sm font-medium text-blue-300">
                    Backend Software Engineer
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Building practical software solutions, one project at a time.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Learn. Build. Improve.
            </p>
          </div>
        </div>
      </section>

      <section id="about-preview" className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-width section-padding">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What I focus on
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building beyond the interface.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              I enjoy understanding how applications work behind the scenes
              and building foundations that are secure, organized, and
              maintainable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {specialties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="surface-card p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="inline-flex rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              More about me
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Technologies
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tools I work with.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Technologies I use and I&apos;m developing, with practical experience 
              through learning and building projects.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            View all skills
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-400/30 hover:text-blue-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-width section-padding">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Projects with a purpose.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-400">
                A look at applications I have built and the
                real-world problems I want to solve with pending projects.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              All projects
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homeProjects.map((project, index) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg border border-blue-400/15 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                    {project.category}
                  </span>
                  <span className="font-mono text-sm text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="text-xs text-slate-500">
                    {project.status}
                  </span>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200"
                    >
                      Live demo
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-blue-300"
                    >
                      Project details
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-[#101827] to-indigo-500/10 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Let&apos;s connect
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a project or opportunity in mind?
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Need a developer to help bring your ideas to life? Reach out.
              <br />
              I&apos;m also interested in connecting with people, learning from
              experienced engineers, and exploring opportunities to grow and
              contribute.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Contact me
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
