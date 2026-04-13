import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    num: "01",
    title: "Portfolio v3",
    type: "Personal Portfolio",
    year: "2026",
    desc: "A polished developer portfolio built with Vite, React, TypeScript, and Tailwind CSS, deployed with Netlify and Vercel. It showcases interactive project cards, skill ecosystem visualization, and responsive UI motion.",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Netlify",
      "Vercel",
    ],
    gradient: "from-sky-500/8 via-transparent to-transparent",
    accentLine: "bg-sky-500",
    link: "https://eg-portfolio-v3.netlify.app/",
  },
  {
    num: "02",
    title: "Lumiere",
    type: "Web App · Rentals",
    year: "2025",
    desc: "A modern rental marketplace with live search, booking workflow, and user profiles. Built using Redux Toolkit, Supabase, REST APIs, and a fast UI powered by React and Tailwind CSS.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    gradient: "from-fuchsia-500/8 via-transparent to-transparent",
    accentLine: "bg-fuchsia-500",
    link: "https://lumiere-app-theta.vercel.app/",
  },
  {
    num: "03",
    title: "Lumiere Admin",
    type: "Web App · Admin Dashboard",
    year: "2025",
    desc: "An internal admin console for managing listings, analytics, and user workflows. Built with a scalable React frontend, Supabase data layer, and Redux Toolkit state management.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    gradient: "from-violet-500/8 via-transparent to-transparent",
    accentLine: "bg-violet-500",
    link: "",
  },
  {
    num: "04",
    title: "Manila Fame",
    type: "Web App · Community",
    year: "2024",
    desc: "A community showcase platform for creatives, featuring responsive galleries, profiles, and discovery tools. Designed to prioritize performance, accessibility, and polished visual presentation.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Netlify", "Git"],
    gradient: "from-cyan-500/8 via-transparent to-transparent",
    accentLine: "bg-cyan-500",
    link: "https://manila-fame.netlify.app/",
  },
  {
    num: "05",
    title: "Portfolio v2",
    type: "Personal Portfolio",
    year: "2025",
    desc: "A previous portfolio iteration that focused on personal branding, project storytelling, and deployment best practices. It shipped with rich animations, mobile-first design, and Git-based version control.",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Supabase",
      "Netlify",
      "Tailwind CSS",
      "Git",
    ],
    gradient: "from-amber-500/8 via-transparent to-transparent",
    accentLine: "bg-amber-500",
    link: "https://eg-portfolio-v3.netlify.app/portfolio",
  },
  {
    num: "06",
    title: "Portfolio v1",
    type: "Personal Portfolio",
    year: "2025",
    desc: "An early portfolio project that established the foundation for later versions, focusing on clean UI, project highlights, and an approachable developer story.",
    stack: ["Vite", "React", "TypeScript", "Supabase", "Tailwind CSS", "Git"],
    gradient: "from-rose-500/8 via-transparent to-transparent",
    accentLine: "bg-rose-500",
    link: "https://portfolio-v2-six-wheat.vercel.app/",
  },
];

export default function PortfolioProjects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
              Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Selected projects
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group shrink-0"
          >
            <FaGithub className="w-4 h-4" />
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="space-y-5">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group relative rounded-2xl border border-white/6 bg-gradient-to-r ${p.gradient} overflow-hidden`}
            >
              {/* Accent line */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 ${p.accentLine} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              <div className="p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* Number */}
                <span className="text-5xl font-bold text-white/6 shrink-0 leading-none select-none">
                  {p.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <span className="text-xs text-white/35 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {p.type}
                    </span>
                    <span className="text-xs text-white/25 ml-auto">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/35 bg-white/4 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <a
                  href={p.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-12 h-12 rounded-2xl border border-white/8 flex items-center justify-center text-white/20 group-hover:border-white/20 group-hover:text-white/60 transition-all self-start md:self-center"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
