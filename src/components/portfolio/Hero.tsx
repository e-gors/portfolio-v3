import { motion } from "motion/react";
import { ArrowDownRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const BG =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80";

const f = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as const },
});

export default function PortfolioHero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e11]/30 via-transparent to-[#0e0e11]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            {...f(0.1)}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work · Full-time & Freelance
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...f(0.2)}
            className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.02] tracking-tight mb-8"
          >
            <span className="text-white">Building</span>
            <br />
            <span className="text-white/30">things</span>{" "}
            <span className="italic font-light text-white">for the</span>
            <br />
            <span className="text-white">web.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...f(0.35)}
            className="text-base md:text-lg text-white/45 leading-relaxed mb-12 max-w-xl"
          >
            I'm{" "}
            <strong className="text-white/80 font-medium">Efren Goron</strong>,
            a junior software engineer specialising in frontend UI and backend
            APIs. I love turning ideas into fast, clean, and delightful
            products.
          </motion.p>

          {/* CTAs */}
          <motion.div {...f(0.45)} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#0e0e11] font-semibold text-sm hover:bg-white/90 transition-all"
            >
              See my work
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-2xl border border-white/12 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div {...f(0.55)} className="flex items-center gap-5">
            <span className="text-xs text-white/25 uppercase tracking-widest">
              Find me on
            </span>
            <a
              href="https://github.com/e-gors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/efren-goron-8b3ab4200/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1jOKdnwYfNG31mXEoiPsMu5wzC5HVfhDk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-[10px] text-white/25 uppercase tracking-[0.2em] rotate-90 translate-y-8">
          Scroll
        </span>
      </div>
    </section>
  );
}
