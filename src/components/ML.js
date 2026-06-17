import { useState } from "react";
import { BookOpen, Code2, Quote, Brain, FileText, Copy, Check, ExternalLink } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Synergistic Impact of Diabetes and Hypertension on COVID-19 Respiratory Severity: A Machine Learning Analysis of Symptom Patterns and Comorbidities",
    authors: ["Ashikur Rahman", "Fahim Faisal Deepto", "Md Mahbub Hasan", "Faisal Ahmed", "Md. Fahad Hasan"],
    venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
    date: "2025",
    pages: "pp. 377–382",
    doi: "10.1109/ICCIT68739.2025.11490335",
    tags: ["COVID-19", "Comorbidity", "Machine Learning", "Neural Networks", "Random Forest", "Logistic Regression", "Predictive Modelling", "Respiratory Symptoms"],
    abstract: "This study investigates the synergistic impact of diabetes and hypertension on COVID-19 respiratory severity using machine learning. We analyse symptom patterns and comorbidity interactions through models including neural networks, random forests, and logistic regression to build predictive models for respiratory outcome classification in COVID-19 patients.",
    status: "Published",
    links: {
      paper: "https://doi.org/10.1109/ICCIT68739.2025.11490335",
      code: null,
      bibtex: `@INPROCEEDINGS{11490335,
  author={Rahman, Ashikur and Deepto, Fahim Faisal and Hasan, Md Mahbub and Ahmed, Faisal and Hasan, Md. Fahad},
  booktitle={2025 28th International Conference on Computer and Information Technology (ICCIT)},
  title={Synergistic Impact of Diabetes and Hypertension on COVID-19 Respiratory Severity: A Machine Learning Analysis of Symptom Patterns and Comorbidities},
  year={2025},
  pages={377-382},
  doi={10.1109/ICCIT68739.2025.11490335}}`,
    },
  },
  {
    title: "Comparing Filter, Redundancy-Aware, and Wrapper Feature Selection for Objective ADHD Detection: A Nested Cross-Validation Study",
    authors: ["Fahim Faisal", "Ashikur Rahman", "Md Mahbub Hasan", "Faisal Ahmed", "Md. Feroj Ahmed"],
    venue: "IEEE International Conference on Signal Processing, Information, Communication and Systems (SPICSCON) 2026",
    date: "2026",
    pages: null,
    doi: null,
    tags: ["ADHD Detection", "Feature Selection", "Nested Cross-Validation", "SVM", "mRMR", "RFECV", "SHAP", "Machine Learning"],
    abstract: "ADHD affects 5–7% of school-aged children worldwide, yet accurate diagnosis remains challenging because clinical assessments rely heavily on subjective behavioral evaluation. This study revisits machine-learning-based ADHD detection using the HYPERAKTIV dataset and corrects a major methodological flaw in prior work: feature selection before train-test splitting, which caused data leakage and inflated performance. Using a leakage-free nested cross-validation framework, the SVM achieved an F1-score of 0.8706 (95% CI: [0.83, 0.91]). Among three feature selection methods (F-score, mRMR, RFECV), mRMR with Logistic Regression achieved F1 = 0.8931 ± 0.0883 using only five features. Bayesian optimization via Optuna further improved this to F1 = 0.8978. SHAP analysis identified CPT response-time variability and accelerometer frequency-domain features as the most important sensor-based indicators.",
    status: "Under Review",
    links: { paper: null, code: null, bibtex: null },
  },
  {
    title: "Low Cost Temperature and Humidity Estimator with Atmega8 Microcontroller",
    authors: ["M. Matsive Ali", "", "Ashikur Rahman"],
    venue: "International Journal of Trend in Scientific Research and Development (IJTSRD)",
    date: "Jun 2021",
    pages: null,
    doi: null,
    tags: ["Embedded Systems", "Atmega8", "DHT22", "IoT", "Microcontroller", "Temperature Sensor", "Humidity Sensor"],
    abstract: "This paper presents an efficient yet cost-effective system to determine two atmospheric parameters: temperature and humidity. The DHT22 sensor measures ambient temperature and relative humidity, with an AVR ATmega8 as the controller and a 16×2 LCD display for output. The Arduino IDE is used for programming, and the 4-bit LCD mode frees up additional ATmega8 pins for other uses, making the system compact and adaptable for controlling various devices based on environmental conditions.",
    status: "Published",
    links: {
      paper: "https://www.ijtsrd.com/engineering/electrical-engineering/41155/low-cost-temperature-and-humidity-estimator-with-atmega8-microcontroller/m-matsive-ali",
      code: null,
      bibtex: null,
    },
  },
];

const ML_PROJECTS = [
  {
    title: "COVID-19 Classification Dataset & Analysis",
    desc: "Machine learning analysis of COVID-19 comorbidity interactions (diabetes, hypertension) on respiratory severity. Implements neural networks, random forests, and logistic regression for outcome classification — the dataset and pipeline underpinning the ICCIT 2025 publication.",
    tech: ["Python", "scikit-learn", "Neural Networks", "Random Forest", "Logistic Regression", "pandas"],
    status: "Published",
    metrics: { models: "5+", dataset: "COVID", conference: "ICCIT" },
    github: "https://github.com/ashikur-rahman-sun/Classification-dataset-covid-",
  },
  {
    title: "Fake News Detection",
    desc: "NLP-based fake news classification system using machine learning and text feature engineering. Explores TF-IDF, word embeddings, and multiple classifiers to distinguish real from fabricated news articles.",
    tech: ["Python", "NLP", "TF-IDF", "scikit-learn", "pandas", "NLTK"],
    status: "Completed",
    metrics: { task: "NLP", type: "Binary", approach: "ML" },
    github: "https://github.com/ashikur-rahman-sun/Fake-News-Detection",
  },
];

const ML_STACK = [
  "Python", "scikit-learn", "PyTorch", "TensorFlow",
  "HuggingFace Transformers", "NLP", "LLMs",
  "Random Forest", "Logistic Regression", "SVM", "Neural Networks",
  "Feature Engineering", "Cross-Validation", "SHAP",
  "pandas", "NumPy", "Matplotlib", "Seaborn",
  "MLflow", "Jupyter",
];

const PUB_STATUS_COLOR = {
  Published: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Under Review": "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

const PROJ_STATUS_COLOR = {
  Published: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Completed: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Deployed: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

function BibTexButton({ bibtex }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="btn-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
    >
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
      {copied ? "Copied!" : "BibTeX"}
    </button>
  );
}

export default function ML() {
  return (
    <section id="ml" className="relative py-28 px-6">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-hero opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        {/* ── Header ── */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl font-700 text-white">
            ML Research &amp; <span className="text-gradient">Publications</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* ── Publications ── */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider">Publications ({PUBLICATIONS.length})</p>
          </div>

          {PUBLICATIONS.map((pub, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 space-y-5">

              {/* Title row + status badge */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <h3 className="font-display font-700 text-white text-lg leading-snug">
                      {pub.title}
                    </h3>
                  </div>

                  {/* Authors — highlight Ashikur Rahman */}
                  <p className="text-sm text-slate-400 font-mono pl-7">
                    {pub.authors.map((a, j) => (
                      <span key={j}>
                        {a === "Ashikur Rahman"
                          ? <strong className="text-cyan-300 underline underline-offset-2">{a}</strong>
                          : a
                        }
                        {j < pub.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>

                  {/* Venue, year, pages */}
                  <div className="pl-7 flex flex-wrap items-center gap-2">
                    <span className="text-indigo-300 text-sm font-500">{pub.venue}</span>
                    <span className="text-slate-600">·</span>
                    <span className="tag">{pub.date}</span>
                    {pub.pages && (
                      <>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500 text-xs font-mono">{pub.pages}</span>
                      </>
                    )}
                  </div>

                  {/* DOI */}
                  {pub.doi && (
                    <p className="pl-7 text-xs text-slate-600 font-mono">
                      DOI:{" "}
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-300 transition-colors"
                      >
                        {pub.doi}
                      </a>
                    </p>
                  )}
                </div>

                {pub.status && (
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border flex-shrink-0 ${PUB_STATUS_COLOR[pub.status] || ""}`}>
                    {pub.status}
                  </span>
                )}
              </div>

              {/* Abstract */}
              <div className="bg-slate-900/50 rounded-xl px-5 py-4 border border-white/5 flex gap-3">
                <Quote size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">{pub.abstract}</p>
              </div>

              {/* Tags + action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(t => <span key={t} className="pill text-xs">{t}</span>)}
                </div>
                <div className="flex gap-3 flex-wrap">
                  {pub.links.paper && (
                    <a
                      href={pub.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
                    >
                      <FileText size={13} /> Paper
                    </a>
                  )}
                  {pub.links.code && (
                    <a
                      href={pub.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
                    >
                      <Code2 size={13} /> Code
                    </a>
                  )}
                  {pub.links.bibtex && (
                    <BibTexButton bibtex={pub.links.bibtex} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ML Projects grid ── */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">ML Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ML_PROJECTS.map((proj, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                    <Brain size={20} className="text-cyan-400" />
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${PROJ_STATUS_COLOR[proj.status] || ""}`}>
                    {proj.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-700 text-white">{proj.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{proj.desc}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(proj.metrics).map(([k, v]) => (
                    <div key={k} className="bg-slate-900/60 rounded-lg px-3 py-2 text-center">
                      <p className="text-cyan-400 font-display font-700 text-sm">{v}</p>
                      <p className="text-slate-600 text-[10px] font-mono capitalize">{k}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline py-2 px-3 text-xs w-full justify-center"
                  >
                    <Code2 size={13} /> View on GitHub <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Tech stack pills ── */}
        <div>
          <p className="text-xs font-mono text-cyan-400 font-600 uppercase tracking-wider mb-6">AI & ML Technical Stack</p>
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              {ML_STACK.map(tech => (
                <span key={tech} className="pill hover:scale-105 cursor-default transition-transform">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
