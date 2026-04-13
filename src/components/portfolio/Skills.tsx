import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

type SkillCategory = {
  icon: typeof Monitor;
  label: string;
  color: SkillColor;
  borderColor: string;
  iconBg: string;
  items: { name: string; level: number }[];
};

const CATEGORIES: SkillCategory[] = [
  {
    icon: Monitor,
    label: "Frontend",
    color: "indigo",
    borderColor: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10 text-indigo-400",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    icon: Server,
    label: "Backend",
    color: "violet",
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10 text-violet-400",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    icon: Wrench,
    label: "Tools",
    color: "slate",
    borderColor: "border-white/10",
    iconBg: "bg-white/5 text-white/50",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 55 },
      { name: "Figma", level: 70 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

type SkillColor = "indigo" | "violet" | "slate";

const BAR_COLORS: Record<SkillColor, string> = {
  indigo: "bg-indigo-400",
  violet: "bg-violet-400",
  slate: "bg-white/40",
};

export default function PortfolioSkills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            My tech stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: ci * 0.1 }}
                className={`rounded-2xl border ${cat.borderColor} bg-white/[0.02] p-7`}
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl ${cat.iconBg} mb-5`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-white/60">
                          {item.name}
                        </span>
                        <span className="text-xs text-white/25">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: ci * 0.1 + ii * 0.07,
                            ease: [0.22, 1, 0.36, 1] as const,
                          }}
                          className={`h-full rounded-full ${BAR_COLORS[cat.color]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
