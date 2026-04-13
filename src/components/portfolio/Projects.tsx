import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    num: "01",
    title: "TaskBoard",
    type: "Full-Stack App",
    year: "2025",
    desc: "A real-time Kanban task manager with team collaboration, drag-and-drop boards, and OAuth authentication. Built to explore WebSocket patterns and PostgreSQL relational design.",
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    gradient: "from-indigo-500/8 via-transparent to-transparent",
    accentLine: "bg-indigo-500",
  },
  {
    num: "02",
    title: "Portfol.io",
    type: "Frontend · OSS",
    year: "2025",
    desc: "A developer tool that generates and deploys a live portfolio page from a JSON config file. Supports custom themes, project cards, and one-click Vercel publish.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel API"],
    gradient: "from-violet-500/8 via-transparent to-transparent",
    accentLine: "bg-violet-500",
  },
  {
    num: "03",
    title: "DataPulse API",
    type: "Backend · API",
    year: "2024",
    desc: "A RESTful analytics ingestion API supporting event batching, per-endpoint rate limiting, and multi-tenant API key auth. Stress-tested to 1k req/s.",
    stack: ["Python", "FastAPI", "MongoDB", "Redis"],
    gradient: "from-rose-500/8 via-transparent to-transparent",
    accentLine: "bg-rose-500",
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
                  href="#"
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
