
import Link from "next/link";
import { Mail, ArrowUpRight, Code2, BriefcaseBusiness } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:abenaf52@gmail.com",
    icon: Mail,
  },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18]">
      <div className="container-width py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              Abena<span className="text-blue-400">.</span>
            </Link>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Backend Software Engineer building practical software solutions
              through clean code, thoughtful design, and reliable systems.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-blue-400/40 hover:text-blue-400"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Abena Fosua Frimpong. All rights
            reserved.
          </p>
          <p>Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
