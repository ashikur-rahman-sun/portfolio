import { Trophy, ExternalLink, TrendingUp, Target, Award, Zap } from "lucide-react";

const PLATFORMS = [
  {
    name: "Codeforces",
    logo: "CF",
    handle: "@_L_Lawliet",
    profileUrl: "https://codeforces.com/profile/_L_Lawliet",
    color: { border: "border-red-400/20", accent: "text-red-400", bg: "bg-red-400/10", badge: "bg-red-500" },
    metrics: [
      { label: "Rating",          value: "827",    icon: TrendingUp, sub: "Newbie" },
      { label: "Handle",          value: "_L_Lawliet", icon: Target,     sub: "Active Coder" },
    ],
    badge: "Newbie",
    badgeColor: "bg-red-500",
    desc: "Active participant in Codeforces contests, practicing data structures and algorithms.",
  },
  {
    name: "LeetCode",
    logo: "LC",
    handle: "@ashikur_san",
    profileUrl: "https://leetcode.com/u/ashikur_san/",
    color: { border: "border-amber-400/20", accent: "text-amber-400", bg: "bg-amber-400/10" },
    metrics: [
      { label: "Profile",         value: "ashikur_san", icon: Target,     sub: "Easy+Med+Hard" },
      { label: "Role focus",      value: "QA & Logic",  icon: Trophy,     sub: "Problem Solving" },
    ],
    badge: "Active Coder",
    badgeColor: "bg-amber-500",
    desc: "Solving algorithmic problems, focusing on test case generation logic and data structures.",
  },
  {
    name: "CodeChef",
    logo: "CC",
    handle: "@l_lawleit_sun",
    profileUrl: "https://www.codechef.com/users/l_lawleit_sun",
    color: { border: "border-orange-400/20", accent: "text-orange-400", bg: "bg-orange-400/10" },
    metrics: [
      { label: "Profile",         value: "l_lawleit_sun", icon: Target,     sub: "All tags" },
      { label: "Platform",        value: "CodeChef",      icon: Trophy,     sub: "Contests" },
    ],
    badge: "1★ Coder",
    badgeColor: "bg-orange-500",
    desc: "Solving monthly and starter challenges, specializing in math and array operations.",
  },
  {
    name: "Kaggle",
    logo: "KG",
    handle: "@ashikursun",
    profileUrl: "https://www.kaggle.com/ashikursun",
    color: { border: "border-sky-400/20", accent: "text-sky-400", bg: "bg-sky-400/10" },
    metrics: [
      { label: "Datasets",        value: "Public Work",   icon: Target,     sub: "ML & Analysis" },
      { label: "Focus",           value: "Predictive Models", icon: Trophy,     sub: "Machine Learning" },
    ],
    badge: "Contributor",
    badgeColor: "bg-sky-500",
    desc: "Sharing and collaborating on machine learning datasets, notebooks, and models, with a focus on data validation and predictive analysis.",
  },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Intra-University Programming Contest", desc: "Second Runner-Up — BAUET, 2019", year: "2019" },
  { icon: "⚡", title: "Mind Storm Programming Contest-2020", desc: "Participated (6th) — organized by BAUET Computer Society", year: "2020" },
  { icon: "🎖️", title: "MIST NCPC 2020", desc: "Participated — organized by the National Collegiate Programming Contest (NCPC)", year: "2020" },
  { icon: "⭐", title: "Codeforces Rank", desc: "Ranked Newbie (Max Rating: 827) under handle _L_Lawliet", year: "Active" },
];

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">

        {/* ── Header ── */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Algorithmic <span className="text-gradient">Profiles</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Competing since 2020, with a focus on algorithmic problem solving, data structures, and mathematical optimization.
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* ── Platform cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORMS.map((p) => (
            <div key={p.name}
              className={`glass-card rounded-2xl p-6 space-y-5 border ${p.color.border}`}>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${p.color.bg} flex items-center
                    justify-center font-display font-800 text-lg ${p.color.accent}`}>
                    {p.logo}
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-white">{p.name}</h3>
                    <p className="text-slate-500 text-xs font-mono">{p.handle}</p>
                  </div>
                </div>
                <span className={`text-xs font-700 text-white px-2.5 py-1 rounded-full ${p.badgeColor || "bg-slate-700"}`}>
                  {p.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>

              {/* Metrics */}
              <div className="space-y-3">
                {p.metrics.map(({ label, value, icon: Icon, sub }) => (
                  <div key={label}
                    className="flex items-center justify-between py-2.5 px-3
                    bg-slate-900/50 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Icon size={14} className={p.color.accent} />
                      <span className="text-xs font-mono">{label}</span>
                    </div>
                    <div className="text-right">
                      <p className={`font-display font-700 text-sm ${p.color.accent}`}>{value}</p>
                      <p className="text-slate-600 text-[10px] font-mono">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full justify-center text-sm py-2.5"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">Notable Achievements</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display font-700 text-white text-sm">{a.title}</h4>
                    <span className="tag flex-shrink-0">{a.year}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total stats strip */}
        <div className="glass-card rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "4",      label: "Platforms Tracked",     icon: Target },
              { val: "827",    label: "Codeforces Rating",     icon: TrendingUp },
              { val: "10+",    label: "Contests Participated", icon: Zap },
              { val: "Top 3",  label: "Intra-University Rank", icon: Award },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label} className="space-y-2">
                <Icon size={20} className="text-cyan-400 mx-auto" />
                <p className="font-display font-800 text-2xl text-white">{val}</p>
                <p className="text-slate-500 text-xs font-mono">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
