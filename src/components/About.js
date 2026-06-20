import { Cpu, ShieldCheck, ChevronRight, Calendar, MapPin } from "lucide-react";

const FOCUS_CARDS = [
  {
    icon: ShieldCheck,
    title: "Automation & QA",
    color: "cyan",
    points: [
      "Selenium, Appium, Playwright",
      "CI/CD Pipeline Integration",
      "Performance & Load Testing",
      "API Testing",
      "Test Architecture Design",
    ],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    color: "violet",
    points: [
      "Deep Learning (CV & NLP)",
      "Model Training & Fine-tuning",
      "Research & Publication",
    ],
  },
];

const EXPERIENCES = [
  {
    role: "Software QA Engineer L-1",
    company: "Brain Craft Ltd.",
    location: "Dhaka, Bangladesh",
    date: "01/2023 – Present",
    type: "Full-time",
    achievements: [
      "Tested Photo-Blur & Video Editor (Dev Phase) for functionality and UI consistency.",
      "Built and executed API test cases in Postman; maintained sprint-level QA documentation.",
      "Managed asset deployment pipeline: pulled updates via Git, compiled text-effect .plist metadata locally, and verified rendering stability before production release."
    ],
  },
  {
    role: "Junior Software QA Engineer",
    company: "Brain Craft Ltd.",
    location: "Dhaka, Bangladesh",
    date: "2023",
    type: "Full-time",
    achievements: [
      "Manually tested Video Crop, Add Music to Video, and Sticker Maker across functionality, UI/UX, and integration.",
      "Generated and validated AI prompts for NSFW content detection and filtering during ML model development.",
      "Automated export time validation for Background Remover: Erase BG using Appium.",
      "Collaborated with ML team on AI features: Text-to-Image for Edit Up: AI Photo & Video Editor, Text-to-GIF & Face Swap for GIF Maker."
    ],
  },
  {
    role: "Trainee Software QA Engineer",
    company: "Brain Craft Ltd.",
    location: "Dhaka, Bangladesh",
    date: "2023",
    type: "Full-time",
    achievements: [
      "Executed functional, smoke, sanity, and exploratory tests across 250+ iOS and Android features."
    ],
  },
  {
    role: "Academic Attachment Intern",
    company: "Innovative Soft.",
    location: "Dhaka, Bangladesh",
    date: "Feb 2020 – Mar 2020",
    type: "Internship",
    achievements: [
      "Completed a 2-month undergraduate internship, gaining hands-on IoT development experience."
    ],
  },
];

const COLOR_MAP = {
  cyan: { border: "border-cyan-400/20", bg: "bg-cyan-400/8", icon: "text-cyan-400", dot: "bg-cyan-400" },
  violet: { border: "border-violet-400/20", bg: "bg-violet-400/8", icon: "text-violet-400", dot: "bg-violet-400" },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Experience &amp; <span className="text-gradient">Profile</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Profile row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Photo card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img src={`${process.env.PUBLIC_URL}/CV-pic.png`} alt="Ashikur Rahman" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-700 text-white text-lg">Ashikur Rahman</h3>
                <div className="space-y-1.5 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <MapPin size={13} className="text-cyan-400" />
                    Dhaka, Bangladesh
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={13} className="text-cyan-400" />
                    Available for opportunities
                  </p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pt-2 font-mono border-t border-white/5">
                  "ᴛᴀʟᴇɴᴛ ɪꜱ ꜱᴏᴍᴇᴛʜɪɴɢ ʏᴏᴜ ʙʟᴏᴏᴍ, ɪɴꜱᴛɪɴᴄᴛ ɪꜱ ꜱᴏᴍᴇᴛʜɪɴɢ ʏᴏᴜ ᴘᴏʟɪꜱʜ."
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-5 text-slate-400 leading-relaxed">
            <p>
              Hi! I'm a software engineer with a strong focus on <span className="text-cyan-300 font-500">Software Quality Assurance</span> and <span className="text-cyan-300 font-500">Machine Learning Engineering</span>. I thrive at the intersection of rigorous testing frameworks and applied AI solutions.
            </p>
            <p>
              With over <strong className="text-white">3 years of experience</strong> at Brain Craft Ltd., I've progressed from Trainee to Software QA Engineer L-1. I specialize in mobile app testing, API validation with Postman, and automated regression suites using Appium. Additionally, I collaborate closely with ML teams to deploy and validate advanced AI features.
            </p>
            <p>
              When I'm not engineering, you'll find me competing on Codeforces, LeetCode, or CodeChef, exploring datasets on Kaggle, and working on research in predictive machine learning models.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              {["QA Automation", "API Validation", "ML & AI Testing", "Problem Solver", "Researcher"].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Domains */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">Core Domains</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS_CARDS.map(({ icon: Icon, title, color, points }) => {
              const c = COLOR_MAP[color];
              return (
                <div key={title}
                  className={`glass-card rounded-2xl p-6 border ${c.border} space-y-4`}>
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon size={22} className={c.icon} />
                  </div>
                  <h3 className="font-display font-700 text-white text-lg">{title}</h3>
                  <ul className="space-y-2">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight size={14} className={`${c.icon} flex-shrink-0 mt-0.5`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-8">Professional Experience</p>
          <div className="relative space-y-10 pl-6 before:absolute before:left-[5px]
            before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b
            before:from-cyan-400/60 before:via-cyan-400/20 before:to-transparent">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[23px] top-1.5 timeline-dot" />

                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-700 text-white text-lg">{exp.role}</h3>
                      <p className="text-cyan-400 font-500 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="tag">{exp.date}</span>
                      <p className="text-slate-600 text-xs font-mono mt-1">
                        <MapPin size={10} className="inline mr-1" />{exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <ChevronRight size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1">
                    <span className="pill text-xs">{exp.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
