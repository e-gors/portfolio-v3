import { useState, useEffect } from "react";

const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0e0e11]/90 backdrop-blur-xl border-b border-white/5"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-bold text-white tracking-tight text-lg">ac.</span>
        <div className="hidden md:flex items-center gap-0.5">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className="px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
            >
              {l}
            </button>
          ))}
        </div>
        <a
          href="mailto:goronefren@gmail.com"
          className="px-5 py-2.5 rounded-xl bg-white text-[#0e0e11] text-sm font-semibold hover:bg-white/90 transition-all"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
