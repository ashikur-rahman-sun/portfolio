import { ChevronRight } from "lucide-react";
import { COURSEWORK } from "../data/coursework";

export default function Coursework() {
  return (
    <section id="coursework" className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Relevant <span className="text-gradient">Coursework</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSEWORK.map(({ label, icon, courses }) => (
            <div key={label} className="glass-card rounded-2xl p-6 space-y-4 border-glow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="text-3xl bg-slate-900/60 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
                  {icon}
                </span>
                <h3 className="font-display font-700 text-white text-sm leading-tight group-hover:text-cyan-300 transition-colors">
                  {label}
                </h3>
              </div>
              
              <ul className="space-y-2.5 pt-2 border-t border-slate-800/40">
                {courses.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed hover:text-slate-200 transition-colors">
                    <ChevronRight size={13} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
