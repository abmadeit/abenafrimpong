
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  ExternalLink,
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the resume, technical skills, education, and software projects of Abena Fosua Frimpong.",
};

const highlights = [
  {
    icon: Code2,
    title: "Backend development",
    description:
      "Building REST APIs and learning to design reliable server-side applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical projects",
    description:
      "Applying technical knowledge through my developed project.",
  },
  {
    icon: Target,
    title: "Career direction",
    description:
      "Growing in fullstack development, system design, DevOps, and cybersecurity fundamentals.",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <section className="container-width section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Resume / CV
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                My professional profile.
              </h1>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Explore my background, technical interests, and software
                projects as I continue developing as a Backend Software
                Engineer.
              </p>
            </div>

            <a
              href="/Abena-Fosua-Frimpong-Resume.pdf"
              download="Abena-Fosua-Frimpong-Resume.pdf"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              <ArrowDownToLine size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#101827] p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <FileText size={27} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Abena Fosua Frimpong
                </h2>
                <p className="mt-1 text-blue-300">
                  Backend Software Engineer
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                  Computer Science graduate focused on backend development,
                  API design, database-driven applications, and continuous
                  technical learning.
                </p>
              </div>
            </div>

            <div className="my-8 border-t border-white/10" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">Education</h3>
                <div className="mt-3 flex gap-3">
                  <GraduationCap
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Ghana Communications Technology University
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Computer Science Graduate
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Technical focus
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Python, Django REST Framework, API development,
                  databases, authentication, and software design.
                </p>
              </div>
            </div>

            <div className="my-8 border-t border-white/10" />

            <div>
              <h3 className="font-semibold text-white">
                Selected projects
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-white">Invoicer</h4>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                      Launched
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Invoice management application for managing clients,
                    creating invoices, and tracking payments.
                  </p>
                  <a
                    href="https://invoicer-apps.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                  >
                    View live application <ExternalLink size={15} />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-white">PennyWise</h4>
                    <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300">
                      In development
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Planned personal finance and budgeting platform for
                    individuals, freelancers, and small businesses with various income streams and expenses.
                  </p>
                </div>

                 <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-white">Korkor Kouture</h4>
                    <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300">
                      In development
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Developing a business management system for my mom's sewing and fashion brand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white">
              What I bring to a team
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#101827] p-5"
                  >
                    <Icon size={23} className="text-blue-400" />
                    <h3 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-blue-400/20 bg-blue-500/[0.06] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-white">
                Let’s talk about opportunities.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                I’m interested in opportunities to learn, contribute, and
                grow as a software engineer.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/5"
            >
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
