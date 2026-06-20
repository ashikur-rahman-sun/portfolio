import { Link, useLocation } from "react-router-dom";
import { ArrowUp, Terminal, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon, InstagramIcon } from "./SocialIcons";

const FOOTER_LINKS = [
  { label: "Home",          to: "/" },
  { label: "About",         to: "/about" },
  { label: "ML Research",   to: "/ml" },
  { label: "Projects",      to: "/projects" },
  { label: "CP",            to: "/cp" },
  { label: "Certifications",to: "/certifications" },
  { label: "Activities",    to: "/activities" },
];

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  if (isAboutPage) {
    return (
      <footer className="relative border-t border-white/5 py-14 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg border-glow flex items-center justify-center">
                  <Terminal size={14} className="text-cyan-400" />
                </div>
                <span className="font-display font-700 text-white">
                  A<span className="text-gradient">.</span> Rahman
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                SQA & ML Engineer crafting reliable software and intelligent systems. Available for freelance, research collaboration, and full-time roles.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: GithubIcon,   href: "https://github.com/ashikur-rahman-sun" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ashikur-rahman-sun/" },
                  { icon: MailIcon,     href: "https://mail.google.com/mail/?view=cm&fs=1&to=ashikurrsun@gmail.com" },
                  { icon: XIcon,        href: "https://x.com/ashikur_sun_" },
                  { icon: InstagramIcon, href: "https://www.instagram.com/_____.sun_/" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer"
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center
                      text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-4">Navigation</p>
              <ul className="space-y-2">
                {FOOTER_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors
                      font-mono flex items-center gap-2">
                      <span className="text-slate-700">&gt;</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider">Get In Touch</p>
              <div className="glass-card rounded-xl p-5 space-y-3">
                <p className="text-white font-display font-600">Let's work together</p>
                <p className="text-slate-400 text-sm">
                  Open to new opportunities, research collaborations, and interesting projects.
                </p>
                <div className="space-y-2">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashikurrsun@gmail.com" target="_blank" rel="noreferrer" className="btn-primary w-full justify-center text-sm py-2">
                    <MailIcon size={14} /> Send a Message
                  </a>
                  <a href="tel:+8801705616580" className="btn-outline w-full justify-center text-sm py-2 font-mono">
                    <Phone size={13} /> +8801705616580
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8
            border-t border-white/5 text-slate-600 text-xs font-mono">
            <p>
              © {new Date().getFullYear()} <span className="text-slate-400">Ashikur Rahman</span>. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </footer>
    );
  }

  // Compact contact footer for all other pages
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg border-glow flex items-center justify-center">
              <Terminal size={12} className="text-cyan-400" />
            </div>
            <span className="font-display font-700 text-white text-sm">
              A<span className="text-gradient">.</span> Rahman
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs text-slate-500 font-mono hidden md:inline">Let's connect:</span>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashikurrsun@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
            >
              <MailIcon size={14} className="text-cyan-400" /> ashikurrsun@gmail.com
            </a>

            <span className="text-slate-800 font-mono hidden sm:inline">|</span>

            <a
              href="https://www.linkedin.com/in/ashikur-rahman-sun/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
            >
              <LinkedinIcon size={14} className="text-cyan-400" /> LinkedIn
            </a>

            <span className="text-slate-800 font-mono hidden sm:inline">|</span>

            <a
              href="https://github.com/ashikur-rahman-sun"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
            >
              <GithubIcon size={14} className="text-cyan-400" /> GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs font-mono">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-400">Ashikur Rahman</span>. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
