import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  projectImages,
}: {
  projectImages: string[];
}) {
  const PROJECTS = [
    {
      title: "Personal Portfolio v1",
      slug: "personal-portfolio-v1",
      category: "WEB_APP :: PERSONAL PORTFOLIO",
      year: "2025",
      description:
        "A modern developer portfolio showcasing projects, skills, and professional experience. Built with a performance-focused architecture, smooth animations, responsive layouts, and integrated backend services for content management and deployment automation.",
      stack: [
        "Vite",
        "React",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "GSAP",
        "Vercel",
        "Git",
      ],
      image: projectImages[0],
      github: "https://github.com/e-gors/portfolio-v2",
      demo: "#",
    },
    {
      title: "Lumiere",
      slug: "lumiere",
      category: "WEB_APP :: ONLINE RENTALS",
      year: "2025",
      description:
        "An online rental platform enabling users to browse listings, manage bookings, and handle transactions through a responsive and scalable web interface. Features centralized state management, API integration, and modern UI architecture.",
      stack: [
        "Vite",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Supabase",
        "Tailwind CSS",
        "Axios",
        "Vercel",
        "Git",
      ],
      image: projectImages[1],
      github: "https://github.com/e-gors/lumiere-app",
      demo: "#",
    },
    // {
    //   title: "Lumiere Admin",
    //   slug: "lumiere-admin",
    //   category: "WEB_APP :: ADMIN DASHBOARD",
    //   year: "2025",
    //   description:
    //     "Administrative dashboard for managing rental listings, users, and platform data. Includes analytics views, role-based workflows, and optimized data handling for efficient platform operations.",
    //   stack: [
    //     "Vite",
    //     "React",
    //     "TypeScript",
    //     "Redux Toolkit",
    //     "Supabase",
    //     "Tailwind CSS",
    //     "Axios",
    //     "Vercel",
    //     "Git",
    //   ],
    //   image: projectImages[2],
    //   github: "https://github.com/e-gors/lumiere-admin",
    //   demo: "#",
    // },
    {
      title: "Manila Fame",
      slug: "manila-fame",
      category: "WEB_APP :: COMMUNITY PLATFORM",
      year: "2024",
      description:
        "A community-driven web platform designed to showcase creative works and digital talent. Built with a modern frontend stack emphasizing performance, clean UI design, and scalable deployment.",
      stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Netlify", "Git"],
      image: projectImages[3],
      github: "https://github.com/e-gors/manila-fame",
      demo: "#",
    },
    {
      title: "Personal Portfolio v2",
      slug: "personal-portfolio-v2",
      category: "WEB_APP :: PERSONAL PORTFOLIO v2",
      year: "2026",
      description:
        "A modern developer portfolio showcasing projects, skills, and professional experience. Built with a performance-focused architecture, smooth animations, responsive layouts, and integrated backend services for content management and deployment automation.",
      stack: [
        "Vite",
        "React",
        "TypeScript",
        "Supabase",
        "Netlify",
        "Tailwind CSS",
        "GSAP",
        "Vercel",
        "Git",
      ],
      image: projectImages[4],
      github: "https://github.com/e-gors/portfolio-v3",
      demo: "#",
    },
    {
      title: "Personal Portfolio v3",
      slug: "personal-portfolio-v3",
      category: "WEB_APP :: PERSONAL PORTFOLIO v3",
      year: "2026",
      description:
        "A modern developer portfolio showcasing projects, skills, and professional experience. Built with a performance-focused architecture, smooth animations, responsive layouts, and integrated backend services for content management and deployment automation.",
      stack: [
        "Vite",
        "React",
        "TypeScript",
        "Supabase",
        "Netlify",
        "Tailwind CSS",
        "GSAP",
        "Vercel",
        "Git",
      ],
      image: projectImages[5],
      github: "https://github.com/e-gors/portfolio-v3",
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
