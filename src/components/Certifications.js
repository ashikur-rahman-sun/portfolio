import { ExternalLink, CheckCircle, Calendar, Building2 } from "lucide-react";
import { CERTIFICATIONS } from "../data/certification";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            Certifications &amp; <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Industry-recognized certifications across cloud architecture, AI engineering, and software quality assurance.
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Card-based grid layout (visually distinct from the timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col justify-between border-glow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                {/* Logo and Verification */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center text-2xl shadow-inner">
                    {cert.image ? (
                      <img src={cert.image} alt={cert.provider} className="w-8 h-8 object-contain" />
                    ) : (
                      cert.logo
                    )}
                  </div>
                  {cert.verified && (
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-mono bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <CheckCircle size={10} /> Verified
                    </span>
                  )}
                </div>

                {/* Title and Provider */}
                <div className="space-y-1">
                  <h3 className="font-display font-700 text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 text-xs font-500 flex items-center gap-1">
                    <Building2 size={12} className="flex-shrink-0" /> {cert.provider}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-1.5 text-xs text-slate-500 font-mono pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-slate-600">Validity:</span> <span className="text-slate-400">{cert.expiry}</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-slate-600">ID:</span> <span className="text-slate-400 font-mono">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.tags.map(t => (
                    <span key={t} className="pill text-[9px] px-2 py-0.5 border-slate-700 bg-slate-900/40 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Action Button */}
              <div className="pt-5 mt-auto border-t border-slate-800/40">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full justify-center py-2 px-3 text-xs text-center flex items-center gap-2 group-hover:bg-cyan-500/10 transition-colors"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Count summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {[
            { val: `${CERTIFICATIONS.length}`, label: "Total Certifications" },
            { val: `${CERTIFICATIONS.filter(c => c.verified).length}`, label: "Verified Badges" },
            { val: "3+", label: "Cloud Platforms" },
          ].map(({ val, label }) => (
            <div key={label} className="glass-card rounded-xl p-5 text-center border-glow">
              <p className="font-display font-800 text-3xl text-gradient">{val}</p>
              <p className="text-slate-500 text-xs font-mono mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
