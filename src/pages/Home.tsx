import Navigation from "../components/Navigation";
import CursorFollower from "../components/CursorFollower";
import ScrollProgress from "../components/ScrollProgress";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PersonalPortfolio1 from "../assets/projects/Portfolio-v1.png";
import PersonalPortfolio2 from "../assets/projects/Portfolio-v2.png";
import PersonalPortfolio3 from "../assets/projects/Portfolio-v3.png";
import ManilaFame from "../assets/projects/Manila-fame.png";
import Lumiere from "../assets/projects/Lumiere.png";
import LumiereAdmin from "../assets/projects/Lumiere-admin.png";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80";
const SKILLS_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
const PROJECT_IMAGES = [
  PersonalPortfolio1,
  Lumiere,
  LumiereAdmin,
  ManilaFame,
  PersonalPortfolio2,
  PersonalPortfolio3,
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter selection:bg-primary/20 selection:text-primary">
      <CursorFollower />
      <Navigation />
      <ScrollProgress />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProjectsSection projectImages={PROJECT_IMAGES} />
      <SkillsSection skillsImage={SKILLS_IMAGE} />
      <ContactSection />
      <Footer />
    </div>
  );
}
