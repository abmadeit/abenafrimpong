
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Abena Fosua Frimpong, her computer science background, technical interests, and goals as a Backend Software Engineer.",
};

const interests = [
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Designing APIs, implementing application logic, and building reliable foundations that power useful applications.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building user interfaces that are both functional and visually appealing.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Turning ideas into practical applications while improving code quality, maintainability, and problem-solving skills.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new tools, understanding engineering concepts, and learning through experimentation and hands-on projects.",
  },
];

const goals = [
  "Strengthen my skills in backend development and API design.",
  "Explore Full-Stack development and system design to become a well-rounded software engineer.",
  "Build secure, maintainable, and scalable software systems.",
  "Develop practical knowledge of DevOps, cloud technologies, and cybersecurity.",
  "Collaborate with other developers and learn from real-world engineering challenges.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-width relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            01. About me
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Curious by nature.
            <span className="block text-blue-400">
              Engineer by ambition.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Abena Fosua Frimpong, a Computer Science graduate with
            a growing focus on backend software engineering. I enjoy
            understanding how applications work behind the scenes and
            building software that addresses practical problems.
          </p>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7 sm:p-8">
              <div className="inline-flex rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
                <GraduationCap size={25} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-white">
                My background
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                My Computer Science background introduced me to the
                foundations of computing, programming, and software
                development. I&apos;m continuing to turn that foundation
                into practical engineering skills through independent
                learning and projects.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Education
                </p>
                <p className="mt-2 font-semibold text-white">
                   Ghana Communication Technology University
                </p>
                <p className="mt-1 text-sm text-slate-400">
                   Computer Science Graduate
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.05] p-7">
              <BookOpen size={23} className="text-blue-300" />
              <h3 className="mt-4 font-semibold text-white">
                My approach to learning
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                I learn by building, testing, troubleshooting, and
                improving. Working through real project challenges helps
                me understand not just how to write code, but why
                particular engineering decisions matter.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              My story
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From learning concepts to building solutions.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
              <p>
                My interest in software engineering goes beyond making
                applications look good. I&apos;m particularly interested
                in the systems behind them: how data is stored, how APIs
                communicate, how authentication works, and how applications
                handle information reliably.
              </p>

              <p>
                Building Invoicer has given me an opportunity to work across
                frontend and backend, connect application interfaces
                to APIs, and think through features that users need in a
                practical business tool. Launching its web frontend is an
                important step in my development journey.
              </p>

              <p>
                I&apos;m also developing two (2) pending projects for individuals, freelancers,
                and small businesses. Projects like these help me explore
                application architecture, data modelling, and real-world
                requirements.
              </p>

              <p>
                I see myself as a growing engineer. I value curiosity,
                consistency, and the willingness to work through difficult
                problems rather than pretending to know everything already.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              Explore my projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-width section-padding">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technical interests
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The areas I enjoy exploring.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            My main focus is backend engineering, supported by an interest
            in the tools and practices that make software dependable.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <article
                  key={interest.title}
                  className="rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="inline-flex rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {interest.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {interest.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-width section-padding">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Career direction
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Where I&apos;m heading.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              My goal is to grow into a skilled Full-Stack Software Engineer
              who can design, build, test, and maintain dependable systems.
              I want to deepen my technical knowledge while contributing
              to products that solve meaningful problems.
            </p>

            <Link
              href="/experience"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              View my experience
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101827] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
                <Target size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                My goals
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span className="text-sm leading-7 text-slate-400">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-width pb-20">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-[#101827] to-indigo-500/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            I&apos;m open to connecting with developers, exploring
            opportunities, and learning from people who are passionate
            about building great software.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
