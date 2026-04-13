import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "HERO", id: "hero", key: "1" },
  { label: "PROJECTS", id: "projects", key: "2" },
  { label: "SKILLS", id: "skills", key: "3" },
  { label: "CONTACT", id: "contact", key: "4" },
  { label: "PORTFOLIO", id: "portfolio", key: "5" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    setPaletteOpen(false);
    if (id === "portfolio") {
      navigate("/portfolio");
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl border border-border/50 shadow-xl shadow-primary/5"
            : "bg-transparent"
        } rounded-full px-2 py-2`}
      >
        <div className="flex items-center gap-1">
          <button
            onClick={() => scrollTo("hero")}
            className="px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary/10 rounded-full transition-colors"
            data-cursor-label="nav::home"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all"
                data-cursor-label={`nav::${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPaletteOpen(true)}
            className="px-3 py-1.5 font-mono text-[10px] text-muted-foreground hover:text-foreground border border-border/50 rounded-full ml-2 transition-colors hidden md:flex items-center gap-1.5"
          >
            <span>⌘K</span>
          </button>
          <button
            onClick={() => setPaletteOpen(true)}
            className="md:hidden px-3 py-1.5 font-mono text-xs text-muted-foreground"
          >
            MENU
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
            onClick={() => setPaletteOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-card border border-border rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">
                  NAVIGATE_TO &gt;
                </span>
                <button
                  onClick={() => setPaletteOpen(false)}
                  className="ml-auto text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <span className="font-mono text-xs text-primary">
                      [{item.key}]
                    </span>
                    <span className="font-inter text-sm text-foreground">
                      {item.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
