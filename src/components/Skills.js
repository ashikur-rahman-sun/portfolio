import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skills list */}
        <div className="space-y-5">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="glass-card rounded-2xl p-5 border-glow">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <p className="font-mono text-xs font-600 text-cyan-400 w-full md:w-44 flex-shrink-0 flex items-center gap-1.5">
                  <span className="text-slate-500 font-normal">&gt;</span> {category}
                </p>
                <div className="flex flex-wrap gap-2 flex-1">
                  {items.map(item => (
                    <span key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg
                        border border-slate-700/60 bg-slate-900/60 text-slate-300
                        hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
