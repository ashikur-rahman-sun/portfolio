import { ExternalLink, Code2 as GithubIcon, Shield, Smartphone, Monitor, Cpu, Wrench } from "lucide-react";

const QA_PROJECTS = [
  {
    title: "OHRM-Python-POM",
    desc: "Selenium-based test automation framework for OrangeHRM using the Page Object Model pattern. Includes login, invalid login, and logout test cases with centralized WebDriver setup, Pytest fixtures, and virtual environment isolation.",
    tech: ["Selenium", "Python", "Pytest", "POM", "WebDriver Manager"],
    icon: Shield,
    color: "cyan",
    github: "https://github.com/ashikur-rahman-sun/OHRM-Python-POM",
    status: "Completed",
  },
  {
    title: "Erase BG — Mobile Automation",
    desc: "Appium-based automation prototype for the Background Remover Android app. Simulates real user scenarios to validate app functionality across different devices and OS versions. Device and OS independent — runs on any available Android device.",
    tech: ["Appium", "Python", "Android", "Mobile Automation"],
    icon: Smartphone,
    color: "cyan",
    github: "https://github.com/ashikur-rahman-sun/Remove-BG",
    status: "Completed",
  },
];

const ENGINEERING_PROJECTS = [
  {
    title: "Shaheed Minner — Computer Graphics",
    desc: "OpenGL computer graphics project modeling a Shahid Minar monument with interactive scrolling (left, right, up, down). Built as a university graphics lab assignment.",
    tech: ["C++", "OpenGL", "Computer Graphics"],
    github: "https://github.com/ashikur-rahman-sun/Shaheed-Minner-Computer-Graphics-",
    status: "Academic",
  },
  {
    title: "AGE & BMI Calculator",
    desc: "Utility application for calculating age and Body Mass Index from user input with real-time validation and results display.",
    tech: ["Python", "CLI"],
    github: "https://github.com/ashikur-rahman-sun/AGE-BMI-Calculation",
    status: "Completed",
  },
  {
    title: "DBOH Number Converter",
    desc: "Number system converter supporting Decimal, Binary, Octal, and Hexadecimal conversions. Clean interface for quick base transformations.",
    tech: ["Python", "Number Systems"],
    github: "https://github.com/ashikur-rahman-sun/DBOH-Number-Converter",
    status: "Completed",
  },
  {
    title: "Automatic Industrial Monitoring System",
    desc: "IoT-based industrial monitoring system built during a university industrial attachment. Features light control, water tank level measurement, and smoke detection — with an Android companion app for alerts and remote access. Uses Arduino and sensor components.",
    tech: ["Arduino", "IoT", "Android", "Sensors", "C"],
    github: null,
    status: "Academic",
  },
];

const WEB_PROJECTS = [
  {
    title: "Panda Commerce",
    desc: "Fun e-commerce storefront built with Bootstrap. Responsive product grid, shopping cart layout, and clean UI components for a fictional panda-themed store.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/ashikur-rahman-sun/panda-commerce-bootstrap",
    status: "Completed",
  },
];

const STATUS_COLOR = {
  Completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Academic:  "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const ACCENT = {
  cyan:   { icon: "text-cyan-400",   bg: "bg-cyan-400/10",   glow: "hover:border-cyan-400/30" },
  indigo: { icon: "text-indigo-400", bg: "bg-indigo-400/10", glow: "hover:border-indigo-400/30" },
  violet: { icon: "text-violet-400", bg: "bg-violet-400/10", glow: "hover:border-violet-400/30" },
};

function ProjectCard({ title, desc, tech, github, status, icon: Icon, color }) {
  const c = color ? ACCENT[color] : ACCENT.indigo;
  return (
    <div className={`glass-card rounded-2xl p-6 space-y-4 border-glow relative overflow-hidden group ${c.glow}`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between">
        {Icon && (
          <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
            <Icon size={20} className={c.icon} />
          </div>
        )}
        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${STATUS_COLOR[status] || STATUS_COLOR.Completed}`}>
          {status}
        </span>
      </div>

      <div>
        <h3 className="font-display font-700 text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="btn-outline w-full justify-center py-2 text-xs"
        >
          <GithubIcon size={13} /> View on GitHub <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-radial-subtle opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            QA automation frameworks, academic engineering projects, and web applications.
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* QA & Test Automation */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">QA & Test Automation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QA_PROJECTS.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </div>

        {/* Engineering & Academic */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">Engineering & Academic</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_PROJECTS.map((proj, i) => (
              <ProjectCard key={i} {...proj} icon={proj.tech.includes("IoT") ? Cpu : Monitor} color="indigo" />
            ))}
          </div>
        </div>

        {/* Web Projects */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">Web Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEB_PROJECTS.map((proj, i) => (
              <ProjectCard key={i} {...proj} icon={Wrench} color="violet" />
            ))}
          </div>
        </div>

        {/* Summary strip */}
        <div className="glass-card rounded-2xl p-6 border-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: `${QA_PROJECTS.length + ENGINEERING_PROJECTS.length + WEB_PROJECTS.length}`, label: "Total Projects" },
              { val: "2", label: "QA Frameworks" },
              { val: "3", label: "Languages Used" },
              { val: "IoT to Web", label: "Project Range" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-display font-800 text-2xl text-gradient">{val}</p>
                <p className="text-slate-500 text-[10px] font-mono mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
