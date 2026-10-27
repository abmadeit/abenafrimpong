
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ExternalLink,
} from "lucide-react";

const contactDetails = {
  phone: "054 254 4859",
  phoneLink: "tel:+233542544859",
  whatsapp: "https://wa.me/233542544859",
  linkedin: "https://www.linkedin.com/in/abena-frimpong-15402326a",
  github: "https://github.com/abmadeit",
  telegram: "https://t.me/abmadeit",
  email: "abenaf52@gmail.com",
};

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactDetails.email}`;
    }
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Connect with me professionally.",
      href: contactDetails.linkedin,
      label: "Visit LinkedIn",
    },
    {
      name: "GitHub",
      description: "Explore my software projects and code.",
      href: contactDetails.github,
      label: "View GitHub",
    },
    {
      name: "Telegram",
      description: "Message me on Telegram.",
      href: contactDetails.telegram,
      label: "Open Telegram",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="container-width section-padding">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <div className="mt-5 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let’s build something meaningful.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              Whether you’re in need of a software, recruiting, collaborating on a project, or
              sharing an opportunity, I’d be happy to hear from you.
            </p> 
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-[#101827] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Mail size={24} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                Get in touch
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Reach out about job opportunities, internships, software
                projects, or professional connections.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Email address
                </p>

                <p className="mt-2 break-all font-medium text-slate-200">
                  {contactDetails.email}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    <Send size={16} />
                    Send email
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                  >
                    {copied ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                    {copied ? "Copied" : "Copy email"}
                  </button>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <Phone size={26} className="shrink-0 text-blue-400" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Phone number
                    </p>
                    <a
                      href={contactDetails.phoneLink}
                      className="mt-1 inline-block font-medium text-slate-200 transition hover:text-blue-300"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-4 transition hover:bg-emerald-400/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <MessageCircle size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Chat with me directly.
                  </p>
                </div>

                <ExternalLink size={17} className="shrink-0 text-emerald-300" />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-[#101827] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white">
                  Find me online
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Connect with me, explore my work, or send me a message
                  through your preferred platform.
                </p>

                <div className="mt-6 space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-blue-400/30 hover:bg-white/[0.04]"
                    >
                      <div>
                        <p className="font-semibold text-white">
                          {social.name}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          {social.description}
                        </p>
                      </div>

                      <ExternalLink
                        size={17}
                        className="shrink-0 text-blue-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-blue-400/20 bg-blue-500/[0.06] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white">
                  Open to opportunities
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  I’m interested in opportunities where I can contribute,
                  learn from experienced developers, and strengthen my
                  backend engineering skills.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Backend and API development
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Junior software engineering roles
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Learning and collaboration
                  </li>
                </ul>

                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Explore my projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
