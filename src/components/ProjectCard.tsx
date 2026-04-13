import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Minus, Square, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  demo: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-label={`project::${project.slug}`}
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-chart-4/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground ml-2">
            {project.slug}.tsx — BUILD_SUCCESS
          </span>
          <div className="ml-auto flex gap-2">
            <Minus className="w-3 h-3 text-muted-foreground/40" />
            <Square className="w-3 h-3 text-muted-foreground/40" />
            <X className="w-3 h-3 text-muted-foreground/40" />
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              hovered ? "scale-105 brightness-110" : "scale-100 brightness-75"
            }`}
            style={{
              filter: hovered ? "none" : "saturate(0.5) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Hover buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={hovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-border rounded-lg font-mono text-xs text-foreground hover:border-primary/50 transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-3.5 h-3.5" /> SOURCE
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 20, opacity: 0 }}
              animate={hovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-mono text-xs hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              DEMO <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-inter font-semibold text-lg text-foreground">
                {project.title}
              </h3>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                {project.category}
              </p>
            </div>
            <span className="font-mono text-[10px] text-primary/60 shrink-0">
              {project.year}
            </span>
          </div>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack bar */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 font-mono text-[10px] text-primary/80 bg-primary/5 border border-primary/10 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
