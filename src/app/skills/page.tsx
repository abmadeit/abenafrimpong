
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the programming languages, backend technologies, tools, and software engineering concepts used by Abena Fosua Frimpong.",
};

const skillGroups = [
  {
    title: "Programming languages",
    description: "Languages I use or am developing practical experience with.",
    icon: Braces,
    skills: [
      { name: "Python", detail: "Backend development" },
      { name: "TypeScript", detail: "Typed JavaScript development" },
      { name: "JavaScript", detail: "Web application development" },
    ],
  },
  {
    title: "Backend development",
    description: "Building APIs and implementing application logic.",
    icon: Server,
    skills: [
      { name: "Django", detail: "Python web framework" },
      { name: "Django REST Framework", detail: "REST API development" },
      { name: "REST APIs", detail: "HTTP methods and endpoints" },
      { name: "JWT", detail: "Token-based authentication" },
    ],
  },
  {
    title: "Frontend development",
    description: "Building responsive interfaces for web applications.",
    icon: Code2,
    skills: [
      { name: "Next.js", detail: "React-based web applications" },
      { name: "React", detail: "Component-based interfaces" },
      { name: "Tailwind CSS", detail: "Utility-first styling" },
      { name: "HTML & CSS", detail: "Web structure and styling" },
    ],
  },
  {
    title: "Databases",
    description: "Working with structured application data.",
    icon: Database,
    skills: [
      { name: "SQLite", detail: "Relational database" },
      { name: "PostgreSQL", detail: "Advanced relational database" },
      { name: "Data modelling", detail: "Entities and relationships" },
      { name: "Database design", detail: "Constraints and data integrity" },
    ],
  },
  {
    title: "Tools and workflow",
    description: "Tools that support development and collaboration.",
    icon: Wrench,
    skills: [
      { name: "Git", detail: "Version control" },
      { name: "GitHub", detail: "Source code hosting" },
      { name: "Postman", detail: "API testing" },
      { name: "VS Code", detail: "Development environment" },
    ],
  },
  {
    title: "Engineering concepts",
    description: "Areas I apply or am continuing to explore.",
    icon: Layers3,
    skills: [
      { name: "Authentication", detail: "User access and permissions" },
      { name: "API integration", detail: "Connecting application layers" },
      { name: "Responsive design", detail: "Mobile-friendly interfaces" },
      { name: "Microservices", detail: "Architecture concepts in exploration" },
    ],
  },
];

const currentlyLearning = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity fundamentals",
    description:
      "Learning about secure application design, common vulnerabilities, and protecting user data.",
  },
  {
    icon: GitBranch,
    title: "DevOps and deployment",
    description:
      "Developing a better understanding of deployment workflows, environments, automation, and application operations.",
  },
  {
    icon: BookOpen,
    title: "System design",
    description:
      "Exploring how to structure applications for maintainability, reliability, and future growth.",
  },
  {
    icon: Code2,
    title: "Full-stack development",
    description:
      "Expanding my knowledge of frontend frameworks, state management, and building complete applications.",
  }
];

export default function SkillsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-width relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technical toolkit
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Skills I use to
            <span className="block text-blue-400">turn ideas into software.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My toolkit is growing through practical application, independent
            learning, and project work. I&apos;m especially interested in
            backend development, APIs, and the systems that support modern
            applications.
          </p>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My toolkit
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies and concepts
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            These categories reflect the tools and concepts connected to my
            projects and learning. They are not intended to imply expert-level
            proficiency in every area.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:border-blue-400/25 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col justify-between gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs leading-5 text-slate-500 sm:text-right">
                        {skill.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-width section-padding">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Always improving
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I&apos;m learning next.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Software engineering is a continuous learning process. These
            are areas I want to explore more deeply as I build and deploy
            increasingly capable applications.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {currentlyLearning.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#101827] p-6"
                >
                  <div className="inline-flex rounded-xl bg-blue-400/10 p-3 text-blue-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-[#101827] to-indigo-500/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Skills grow through building.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Explore how I&apos;m applying these technologies in Invoicer
            and my upcoming projects.
          </p>

          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Explore projects
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 sm:ml-6"
          >
            Contact me
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
