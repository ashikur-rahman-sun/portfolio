import { Link } from "react-router-dom";
import { Code2 as GithubIcon, Users as LinkedinIcon, Mail, ArrowRight, Download, X as TwitterIcon, Camera as InstagramIcon } from "lucide-react";

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/ashikur-rahman-sun", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ashikur-rahman-sun/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ashikurrsun@gmail.com", label: "Email" },
  { icon: TwitterIcon, href: "https://x.com/ashikur_sun_", label: "Twitter" },
  { icon: InstagramIcon, href: "https://www.instagram.com/_____.sun_/", label: "Instagram" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full
        bg-cyan-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full
        bg-indigo-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">
            {/* Status */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400 font-mono">Currently open to opportunities</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display text-5xl lg:text-6xl font-800 leading-[1.08] tracking-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Ashikur Sun</span>
              </h1>
            </div>

            {/* Role */}
            <div className="glass-card rounded-xl px-5 py-4 inline-block">
              <p className="font-display text-xl font-600 text-cyan-300">
                Software Engineer in Test
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              Passionate about building robust software quality frameworks and applying machine
              learning to real-world problems. I bridge the gap between rigorous testing
              engineering and cutting-edge AI research — delivering systems that are both
              reliable and intelligent.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <a
                href={`${process.env.PUBLIC_URL}/Ashikur_Rahman_QA_Resume.pdf`}
                download="Ashikur_Rahman_QA_Resume.pdf"
                className="btn-outline"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center
                    text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40
                    transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Avatar */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-cyan-400/15
                rotate-3 transition-transform" />
              <div className="absolute -inset-4 rounded-3xl border border-indigo-400/10
                -rotate-3" />

              {/* Avatar card */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 glass-card rounded-2xl
                overflow-hidden border-glow group">
                <img src={`${process.env.PUBLIC_URL}/Avatar pic for portfolio.png`} alt="Ashikur Rahman Sun"
                  className="w-full h-full object-cover" />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t
                  from-slate-950/90 to-transparent z-10">
                  <div className="flex justify-around text-center">
                    {[
                      { val: "3+", label: "Years Exp" },
                      { val: "10+", label: "Projects" },
                      { val: "3", label: "Papers" },
                    ].map(({ val, label }) => (
                      <div key={label}>
                        <p className="text-cyan-400 font-display font-700 text-lg">{val}</p>
                        <p className="text-slate-500 text-[10px] font-mono">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 glass rounded-xl px-4 py-2.5
                border border-emerald-400/20">
                <p className="text-emerald-400 text-xs font-mono">✓ Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
