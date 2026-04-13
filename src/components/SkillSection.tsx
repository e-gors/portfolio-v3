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
    name: "JavaScript",
    level: "core",
    deps: ["React", "TypeScript", "Node.js", "HTML5", "CSS3"],
  },
  {
    name: "TypeScript",
    level: "core",
    deps: ["JavaScript", "React", "Node.js", "NestJS"],
  },
  {
    name: "React",
    level: "core",
    deps: ["TypeScript", "Vite", "Tailwind CSS", "Material UI"],
  },
  {
    name: "Node.js",
    level: "strong",
    deps: ["JavaScript", "TypeScript", "NestJS", "Redis"],
  },
  {
    name: "Vite",
    level: "strong",
    deps: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Tailwind CSS",
    level: "strong",
    deps: ["React", "HTML5", "CSS3"],
  },
  {
    name: "NestJS",
    level: "strong",
    deps: ["Node.js", "TypeScript", "REST APIs"],
  },
  {
    name: "PHP",
    level: "strong",
    deps: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    name: "Laravel",
    level: "strong",
    deps: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    name: "Supabase",
    level: "familiar",
    deps: ["PostgreSQL", "TypeScript", "REST APIs"],
  },
  {
    name: "Firebase",
    level: "familiar",
    deps: ["React", "JavaScript", "TypeScript"],
  },
  {
    name: "PostgreSQL",
    level: "familiar",
    deps: ["Supabase", "Node.js", "REST APIs"],
  },
  {
    name: "MySQL",
    level: "familiar",
    deps: ["PHP", "Laravel", "REST APIs"],
  },
  {
    name: "Redis",
    level: "familiar",
    deps: ["Node.js", "NestJS", "REST APIs"],
  },
  {
    name: "AWS S3",
    level: "familiar",
    deps: ["Node.js", "Vercel", "Netlify"],
  },
  {
    name: "Git",
    level: "familiar",
    deps: ["GitHub", "CI/CD", "VS Code"],
  },
];

const TICKER_ITEMS = [
  "Vite",
  "React",
  "Vercel",
  "Supabase",
  "Firebase",
  "Netlify",
  "JavaScript",
  "TypeScript",
  "PHP",
  "CSS3",
  "HTML5",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel",
  "NestJS",
  "AWS S3",
  "Redux",
  "Redux Toolkit",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Node.js",
  "Redis",
  "REST APIs",
  "Figma",
  "Adobe Photoshop",
  "VS Code",
  "Postman",
  "Responsively",
  "Webpack",
  "ESLint",
  "Prettier",
  "Twilio",
  "Mailgun",
  "Material UI",
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
