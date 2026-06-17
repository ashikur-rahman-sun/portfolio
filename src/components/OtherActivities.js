import { MapPin, Calendar, Award, Compass, ChevronRight, Briefcase } from "lucide-react";
import { LEADERSHIP_ROLES, HOBBIES } from "../data/activities";

export default function OtherActivities() {
  return (
    <section className="relative py-28 px-6 min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
        bg-violet-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full
        bg-cyan-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">

        {/* ── Header ── */}
        <div className="text-center space-y-3 pt-8">
          <h2 className="font-display text-4xl font-700 text-white">
            Activities &amp; <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Leadership, community management, volunteering, and the things that keep me inspired beyond engineering.
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* ── Leadership & Organization Timeline ── */}
        <div className="space-y-8">
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider">Leadership & Engagement</p>
          <div className="space-y-8">
            {LEADERSHIP_ROLES.map((org, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 md:p-8 border-glow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl pointer-events-none" />
                
                {/* Org Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-3xl shadow-inner flex-shrink-0">
                      {org.logo}
                    </div>
                    <div>
                      <h3 className="font-display font-700 text-white text-xl group-hover:text-cyan-300 transition-colors">
                        {org.organization}
                      </h3>
                      <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-1 font-mono">
                        <MapPin size={13} className="text-cyan-400 flex-shrink-0" />
                        {org.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="tag text-xs font-mono">{org.duration}</span>
                  </div>
                </div>

                {/* Roles list */}
                <div className="pt-6 relative pl-6 space-y-8 before:absolute before:left-[5px]
                  before:top-8 before:bottom-8 before:w-px before:bg-slate-800">
                  {org.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative group/role">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-cyan-400
                        group-hover/role:scale-125 transition-all duration-300" />
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="font-display font-700 text-white text-base">
                            {role.title}
                          </h4>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-slate-700 bg-slate-800/40 text-slate-400">
                            {role.type}
                          </span>
                          <span className="text-xs text-slate-500 font-mono flex items-center gap-1 ml-auto">
                            <Calendar size={12} className="text-cyan-400" /> {role.period}
                          </span>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-4xl">
                          {role.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {role.skills.map((skill) => (
                            <span key={skill} className="pill text-[10px] border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hobbies & Interests ── */}
        <div className="space-y-8">
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider">Hobbies & Interests</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOBBIES.map((hobby, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 space-y-4 border-glow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 blur-xl pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15
                  border border-cyan-400/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </div>
                <h4 className="font-display font-700 text-white text-base leading-tight group-hover:text-cyan-300 transition-colors">
                  {hobby.label}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Highlights Strip ── */}
        <div className="glass-card rounded-2xl p-6 border-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "BAUET", label: "Computer Society", icon: Briefcase },
              { val: "Treasurer", label: "IEEE Student Branch", icon: Award },
              { val: "HULT Prize", label: "Branding Lead", icon: Compass },
              { val: "Hala Madrid", label: "Real Madrid Fan", icon: ChevronRight },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label} className="space-y-1 group">
                <Icon size={18} className="text-cyan-400 mx-auto group-hover:animate-bounce transition-transform" />
                <p className="font-display font-800 text-xl text-white pt-1">{val}</p>
                <p className="text-slate-500 text-[10px] font-mono">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
