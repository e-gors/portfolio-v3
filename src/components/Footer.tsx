import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-mono text-[10px] text-muted-foreground/60 space-y-1 text-center md:text-left">
            <p>© {year} Efren Goron // ALL RIGHTS RESERVED</p>
            <p>BUILT WITH REACT + TAILWIND // DEPLOYED ON NETLIFY</p>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/40 text-center md:text-right space-y-1">
            <p>BUILD_VERSION: 1.0.1</p>
            <p>LAST_COMPILED: {new Date().toISOString().split("T")[0]}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
