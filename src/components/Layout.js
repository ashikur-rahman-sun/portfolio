import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar  from "./Navbar";
import Footer  from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  /* scroll to top on every route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
