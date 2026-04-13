import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: "core" | "strong" | "familiar";
};

export default function SkillNode({
  skill,
  index,
  isActive,
  onClick,
}: {
  skill: Skill;
  index: number;
  isActive: boolean;
  onClick: (name: string) => void;
}) {
  const sizeClass =
    skill.level === "core"
      ? "w-20 h-20"
      : skill.level === "strong"
        ? "w-16 h-16"
        : "w-14 h-14";
  const textSize = skill.level === "core" ? "text-xs" : "text-[10px]";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      onClick={() => onClick(skill.name)}
      className={`${sizeClass} rounded-xl flex items-center justify-center font-mono ${textSize} transition-all duration-300 border ${
        isActive
          ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20"
          : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
      style={{
        animation: `float ${5 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
      }}
      data-cursor-label={`skill::${skill.name}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill.name}
    </motion.button>
  );
}
