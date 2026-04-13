import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  projectImages,
}: {
  projectImages: string[];
}) {
  const PROJECTS = [
    {
      title: "Lumiere",
      slug: "lumiere",
      category: "WEB_APP :: ONLINE RENTALS",
      year: "2025",
      description:
        "A real-time collaborative task management platform with drag-and-drop Kanban boards, team workspaces, and analytics dashboard.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
      image: projectImages[0],
      github: "https://github.com/e-gors/lumiere-app",
      demo: "#",
    },
    {
      title: "Lumiere Admin",
      slug: "lumiere-admin",
      category: "DATA_VIZ :: FINTECH",
      year: "2025",
      description:
        "Cryptocurrency portfolio tracker with real-time price feeds, interactive charts, and AI-powered market sentiment analysis.",
      stack: ["Next.js", "Python", "FastAPI", "Redis", "Chart.js"],
      image: projectImages[1],
      github: "https://github.com/e-gors/lumiere-admin",
      demo: "#",
    },
    {
      title: "Manila Fame",
      slug: "manila-fame",
      category: "SOCIAL :: DEVELOPER_TOOLS",
      year: "2024",
      description:
        "A developer networking platform featuring code snippet sharing, real-time chat, and collaborative code review sessions.",
      stack: ["React", "Firebase", "Tailwind", "WebRTC", "Monaco Editor"],
      image: projectImages[2],
      github: "https://github.com/e-gors/manila-fame",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary mb-3 block">
            02 // BUILD_LOGS
          </span>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground mb-4">
            Successful Deployments
          </h2>
          <p className="font-inter text-muted-foreground max-w-lg text-lg">
            A curated selection of projects that showcase my technical range and
            problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
