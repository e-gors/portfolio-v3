import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0,
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-0.5">
      <div className="font-mono text-[10px] text-muted-foreground mb-2">
        {String(progress).padStart(3, "0")}
      </div>
      <div className="w-0.5 h-32 bg-border rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-primary rounded-full"
          style={{ height: `${progress}%` }}
          transition={{ type: "spring", damping: 30 }}
        />
      </div>
      <div className="font-mono text-[10px] text-muted-foreground mt-2">LN</div>
    </div>
  );
}
