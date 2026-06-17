import { HashRouter, Routes, Route } from "react-router-dom";
import Layout                 from "./components/Layout";
import Home                   from "./components/Home";
import AboutPage              from "./components/AboutPage";
import ML                     from "./components/ML";
import Projects               from "./components/Projects";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Certifications         from "./components/Certifications";
import OtherActivities        from "./components/OtherActivities";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index              element={<Home />} />
          <Route path="about"       element={<AboutPage />} />
          <Route path="ml"          element={<ML />} />
          <Route path="projects"    element={<Projects />} />
          <Route path="cp"          element={<CompetitiveProgramming />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="activities"  element={<OtherActivities />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
