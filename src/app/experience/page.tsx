
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore the practical software development projects and learning journey of Abena Fosua Frimpong.",
};

const experiences = [
  {
    type: "Project experience",
    title: "Invoicer",
    organization: "Independent software project",
    period: "Completed and launched",
    icon: Rocket,
    description:
      "Designed and developed an invoice management web application to help users manage clients, create invoices, and track payments.",
    contributions: [
      "Built a Next.js frontend using React and TypeScript.",
      "Developed backend API functionality with Django REST Framework.",
      "Worked on authentication and connecting the frontend to backend endpoints.",
      "Implemented invoice and client management workflows.",
      "Deployed the application.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
    ],
    link: "https://invoicer-apps.netlify.app/",
    linkLabel: "View live application",
  },
  {
    type: "Project experience",
    title: "PennyWise",
    organization: "Personal finance platform",
    period: "In development",
    icon: Database,
    description:
      "Planning a personal finance and budgeting platform for individuals, freelancers, and small businesses.",
    contributions: [
      "Defining MVP requirements and user-facing functionality.",
      "Planning a microservices-based architecture.",
      "Designing database entities, relationships, and constraints.",
      "Preparing an implementation plan before coding.",
    ],
    technologies: [
      "Django REST Framework",
      "Next.js",
      "PostgreSQL",
      "Microservices",
    ],
  },
  {
    type: "Project experience",
    title: "KORKOR KOUTURE",
    organization: "Fashion Business Management System",
    period: "In development",
    icon: BriefcaseBusiness,
    description:
      "Developing a business management system for my mom's sewing and fashion brand to organize customer appointments, maintain body measurement records, manage garment orders, track staff salaries, and centralize essential business records.",
    contributions: [
      "Planning appointment scheduling and customer management workflows.",
      "Designing structured customer measurement records and fitting history.",
      "Planning staff salary record management.",
      "Defining database relationships and backend functionality to support daily business operations.",
      "Planning an ecommerce component for online sales and order management.",
    ],
    technologies: [
      "Django REST Framework",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
  },

];

const learningAreas = [
  {
    icon: Code2,
    title: "Backend engineering",
    description:
      "Deepening my understanding of API design, authentication, business logic, and reliable server-side applications.",
  },
  {
    icon: GitBranch,
    title: "Deployment and delivery",
    description:
      "Learning how frontend and backend components are configured, connected, and deployed for real users.",
  },
  {
    icon: GraduationCap,
    title: "Continuous development",
    description:
      "Building on my Computer Science background through practical projects, troubleshooting, and independent study.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-width relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My journey
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Learning by building.
            <span className="block text-blue-400">
              Growing through experience.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My development journey combines my Computer Science background
            with hands-on software projects. I focus on turning concepts
            into working applications and learning from the challenges
            involved in building them.
          </p>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Practical experience
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects and contributions
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            These projects demonstrate how I&apos;m applying my skills to
            application development, backend functionality, and software
            architecture.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.title}
                className="relative rounded-2xl border border-white/10 bg-[#101827] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
                      <Icon size={23} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                        {experience.type}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                        {experience.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {experience.organization}
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>

                <div className="mt-7">
                  <h4 className="text-sm font-semibold text-white">
                    Work and learning highlights
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {experience.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span className="text-sm leading-6 text-slate-400">
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {experience.link && (
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                    >
                      {experience.linkLabel}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}

                <span className="absolute right-6 top-6 hidden font-mono text-xs text-slate-600 sm:block">
                  0{index + 1}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-width section-padding">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Ongoing growth
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I&apos;m developing next.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {learningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-[#101827] p-6"
                >
                  <div className="inline-flex rounded-xl bg-blue-400/10 p-3 text-blue-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-[#101827] to-indigo-500/10 p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden rounded-xl bg-blue-400/10 p-3 text-blue-300 sm:block">
              <BriefcaseBusiness size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Open to opportunities to grow.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                I&apos;m interested in opportunities where I can contribute,
                learn from experienced engineers, and continue developing
                my backend software engineering skills.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
