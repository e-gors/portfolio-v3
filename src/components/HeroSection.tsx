import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { ChevronDown } from "lucide-react";

const SPECS = [
  { label: "LANG", value: "JavaScript, TypeScript, PHP" },
  { label: "LOCATION", value: "Hilongos, Leyte, PH" },
  { label: "STATUS", value: "OPEN_FOR_WORK" },
  { label: "BUILD", value: "v1.0.1" },
  { label: "UPTIME", value: "1+ YEARS" },
];

export default function HeroSection({ heroImage }: { heroImage: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId = 0;
    let dots: Array<{ x: number; y: number; ox: number; oy: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dots = [];
      const spacing = 40;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;

      dots.forEach((dot) => {
        const dx = mx - dot.ox;
        const dy = my - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;
        const force = Math.max(0, 1 - dist / maxDist);
        dot.x = dot.ox + dx * force * 0.15;
        dot.y = dot.oy + dy * force * 0.15;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1 + force * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${0.08 + force * 0.3})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Abstract 3D generative art with flowing data streams"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Peripheral specs */}
      <div className="absolute top-8 left-8 hidden md:flex flex-col gap-2 z-10">
        {SPECS.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, x: -20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="font-mono text-[10px] text-muted-foreground/60"
          >
            <span className="text-primary/40">{spec.label}:</span> {spec.value}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-primary mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          SYSTEM_BOOT :: PORTFOLIO_ENGINE v1.0
        </motion.div>

        <div className="mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-bold text-foreground leading-[1.1] tracking-tight">
            <ScrambleText text="EFREN" delay={600} />
            <br />
            <ScrambleText text="GORON" className="text-primary" delay={900} />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="font-inter text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8"
        >
          Junior Software Engineer crafting clean, performant applications.
          Passionate about modern web technologies and elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
            data-cursor-label="cta::view_builds"
          >
            VIEW_BUILDS
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:bg-muted/50 hover:border-primary/30 transition-all"
            data-cursor-label="cta::init_contact"
          >
            INIT_CONTACT
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted-foreground">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-8 rounded-full border border-border/50 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
