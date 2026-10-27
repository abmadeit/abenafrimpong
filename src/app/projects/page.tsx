
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Layers3,
} from "lucide-react";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software projects by Abena Fosua Frimpong, including backend APIs, invoice management, and personal finance applications.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-width relative py-20 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-300"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My work
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects built to
            <span className="block text-blue-400">solve real problems.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Here are some of my developed applications and pending 
            projects that reflect my journey in software engineering. Each
            one is an opportunity to learn, solve a problem, and improve my
            engineering skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              <Code2 size={16} className="text-blue-300" />
              Backend development
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              <Layers3 size={16} className="text-blue-300" />
              System design
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              <BriefcaseBusiness size={16} className="text-blue-300" />
              Practical applications
            </span>
          </div>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Selected projects
            </h2>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400">
            {projects.length} projects
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/10 text-blue-300">
                  <Code2 size={23} />
                </div>

                <span className="font-mono text-sm text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-snug text-white transition group-hover:text-blue-200 sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
                  {project.status}
                </span>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    View live project
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500">
                    Demo link not available
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What&apos;s next?
          </p>

          <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            I&apos;m always looking for the next problem to solve.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            I&apos;m interested in challenging projects, collaboration, and
            opportunities that help me grow as a backend engineer.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Let&apos;s connect
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Return to homepage
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
