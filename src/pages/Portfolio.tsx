import PortfolioNav from "../components/portfolio/Navbar";
import PortfolioHero from "../components/portfolio/Hero";
import PortfolioSkills from "../components/portfolio/Skills";
import PortfolioProjects from "../components/portfolio/Projects";
import PortfolioContact from "../components/portfolio/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0e0e11] text-white font-inter antialiased">
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioSkills />
      <PortfolioProjects />
      <PortfolioContact />
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-xs text-white/20 tracking-wide">
          © 2026 Efren Goron · Designed & built with care
        </p>
      </footer>
    </div>
  );
}
