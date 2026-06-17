import { GraduationCap, Star } from "lucide-react";
import { EDUCATION } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-8 space-y-8 border-l border-slate-800/80
          before:absolute before:left-[-1px] before:top-2 before:bottom-2 before:w-[2px]
          before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-500/50 before:to-transparent">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[38px] top-2.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400
                flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-indigo-400 shadow-md shadow-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-indigo-400 transition-colors" />
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden border-glow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={22} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-700 text-white text-lg group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-400 font-500 text-sm mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1.5">
                    <span className="tag text-xs font-mono">{edu.dates}</span>
                    <span className="text-xs text-cyan-300 font-mono font-600 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {edu.gpa}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-slate-800/40">
                    <p className="text-xs text-slate-500 font-mono">Key Achievements:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, aIdx) => (
                        <span key={aIdx} className="pill text-[10px] flex items-center gap-1">
                          <Star size={10} className="text-amber-400 fill-amber-400/20" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
