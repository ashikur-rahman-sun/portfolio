import About from "./About";
import Education from "./Education";
import Coursework from "./Coursework";
import Skills from "./Skills";

export default function AboutPage() {
  return (
    <>
      <About />

      <div className="space-y-12 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-slate-800/60" />
        </div>

        <Education />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-slate-800/60" />
        </div>

        <Coursework />

        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-slate-800/60" />
        </div>

        <Skills />
      </div>
    </>
  );
}
