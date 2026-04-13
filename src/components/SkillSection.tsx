import { useState } from "react";
import { motion } from "framer-motion";
import SkillNode from "./SkillNode";

type Skill = {
  name: string;
  level: "core" | "strong" | "familiar";
  deps: string[];
};

const SKILLS: Skill[] = [
  {
    name: "React",
    level: "core",
    deps: ["TypeScript", "Tailwind", "Vite", "Next.js"],
  },
  { name: "TypeScript", level: "core", deps: ["React", "Node.js", "Next.js"] },
  { name: "Python", level: "core", deps: ["FastAPI", "Django"] },
  {
    name: "Node.js",
    level: "strong",
    deps: ["TypeScript", "Express", "PostgreSQL"],
  },
  {
    name: "Next.js",
    level: "strong",
    deps: ["React", "TypeScript", "Tailwind"],
  },
  { name: "Tailwind", level: "strong", deps: ["React", "Next.js"] },
  { name: "PostgreSQL", level: "strong", deps: ["Node.js", "Python"] },
  { name: "FastAPI", level: "familiar", deps: ["Python"] },
  { name: "Django", level: "familiar", deps: ["Python", "PostgreSQL"] },
  { name: "Express", level: "familiar", deps: ["Node.js", "TypeScript"] },
  { name: "Vite", level: "familiar", deps: ["React", "TypeScript"] },
  { name: "Redis", level: "familiar", deps: ["Node.js", "Python"] },
  { name: "MongoDB", level: "familiar", deps: ["Node.js", "Express"] },
  { name: "GraphQL", level: "familiar", deps: ["React", "Node.js"] },
  { name: "Docker", level: "familiar", deps: ["Node.js", "Python"] },
];

const TICKER_ITEMS = [
  "Git",
  "GitHub Actions",
  "CI/CD",
  "AWS S3",
  "Vercel",
  "Netlify",
  "Linux",
  "Bash",
  "REST APIs",
  "WebSockets",
  "Jest",
  "Cypress",
  "Figma",
  "VSCode",
  "Postman",
  "Webpack",
  "ESLint",
  "Prettier",
];

export default function SkillsSection({
  skillsImage,
}: {
  skillsImage: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  const activeSkill = SKILLS.find((s) => s.name === active);
  const highlightedNames = active ? [active, ...(activeSkill?.deps || [])] : [];

  return (
    <section id="skills" className="relative py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={skillsImage}
          alt="Abstract crystalline network representing code architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary mb-3 block">
            03 // DEPENDENCY_GRAPH
          </span>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground mb-4">
            Technology Ecosystem
          </h2>
          <p className="font-inter text-muted-foreground max-w-lg text-lg">
            Click any node to reveal its connections. My stack is an
            interconnected web of complementary technologies.
          </p>
        </motion.div>

        {/* Skill nodes */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {SKILLS.map((skill, i) => (
            <SkillNode
              key={skill.name}
              skill={skill}
              index={i}
              isActive={highlightedNames.includes(skill.name)}
              onClick={(name) => setActive(active === name ? null : name)}
            />
          ))}
        </div>

        {active && activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">{active}</span>
              {" → connected to: "}
              {activeSkill.deps.join(", ")}
            </p>
          </motion.div>
        )}

        {/* Ticker */}
        <div className="relative overflow-hidden py-4 border-t border-b border-border/30">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-block px-6 font-mono text-xs text-muted-foreground/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
