import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Clock, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const COMMANDS = [
  { key: "1", label: "Say Hello", action: "form" },
  {
    key: "2",
    label: "View GitHub",
    action: "link",
    href: "https://github.com/e-gors",
  },
  {
    key: "3",
    label: "LinkedIn",
    action: "link",
    href: "https://www.linkedin.com/in/efren-goron-8b3ab4200/",
  },
  {
    key: "4",
    label: "Email Directly",
    action: "link",
    href: "mailto:goronefren@gmail.com",
  },
];

function SystemStatus() {
  const now = new Date();
  const hours = now.getHours();
  const isOnline = hours >= 8 && hours <= 22;

  return (
    <div className="space-y-6">
      <div>
        <span className="font-mono text-[10px] text-muted-foreground block mb-2">
          SYSTEM_STATUS
        </span>
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isOnline ? "bg-primary animate-pulse-glow" : "bg-muted-foreground"}`}
          />
          <span className="font-mono text-sm text-foreground">
            {isOnline ? "ONLINE" : "AWAY"}
          </span>
        </div>
      </div>
      <div>
        <span className="font-mono text-[10px] text-muted-foreground block mb-2">
          LOCAL_TIME
        </span>
        <div className="flex items-center gap-2 text-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm">
            {now.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })}
          </span>
        </div>
      </div>
      <div>
        <span className="font-mono text-[10px] text-muted-foreground block mb-2">
          AVAILABILITY
        </span>
        <span className="font-mono text-sm text-primary">
          OPEN FOR OPPORTUNITIES
        </span>
      </div>
      <div>
        <span className="font-mono text-[10px] text-muted-foreground block mb-2">
          RESPONSE_TIME
        </span>
        <span className="font-mono text-sm text-foreground">&lt; 24 HOURS</span>
      </div>

      <div className="flex gap-3 pt-4 border-t border-border/30">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-border rounded-lg hover:border-primary/30 hover:text-primary transition-colors text-muted-foreground"
        >
          <FaGithub className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-border rounded-lg hover:border-primary/30 hover:text-primary transition-colors text-muted-foreground"
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:goronefren@gmail.com"
          className="p-2 border border-border rounded-lg hover:border-primary/30 hover:text-primary transition-colors text-muted-foreground"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [mode, setMode] = useState("menu");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMode("menu");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary mb-3 block">
            04 // INPUT_OUTPUT
          </span>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground mb-4">
            Initialize Connection
          </h2>
          <p className="font-inter text-muted-foreground max-w-lg text-lg">
            Ready to collaborate? Choose your preferred communication protocol.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: System Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <SystemStatus />
          </motion.div>

          {/* Right: Terminal interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground ml-2">
                contact_terminal.sh
              </span>
            </div>

            <div className="p-6 min-h-[320px]">
              <AnimatePresence mode="wait">
                {mode === "menu" && !submitted && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <p className="font-mono text-xs text-muted-foreground mb-4">
                      $ select_action{" "}
                      <span className="animate-pulse-glow">▌</span>
                    </p>
                    {COMMANDS.map((cmd) => (
                      <button
                        key={cmd.key}
                        onClick={() => {
                          if (cmd.action === "form") setMode("form");
                          else if (cmd.href) window.open(cmd.href, "_blank");
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all group flex items-center gap-3"
                        data-cursor-label={`cmd::${cmd.label}`}
                      >
                        <span className="font-mono text-xs text-primary">
                          [{cmd.key}]
                        </span>
                        <span className="font-mono text-sm text-foreground">
                          {cmd.label}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {mode === "form" && !submitted && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <p className="font-mono text-xs text-muted-foreground mb-4">
                      $ compose_message{" "}
                      <span className="animate-pulse-glow">▌</span>
                    </p>
                    <div>
                      <label className="font-mono text-[10px] text-muted-foreground block mb-1.5">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-muted-foreground block mb-1.5">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/30"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-muted-foreground block mb-1.5">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder:text-muted-foreground/30"
                        placeholder="Your message..."
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setMode("menu")}
                        className="px-4 py-2.5 border border-border rounded-lg font-mono text-xs text-muted-foreground hover:text-foreground hover:border-border transition-all"
                      >
                        BACK
                      </button>
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-mono text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {sending ? (
                          <>
                            <div className="w-3 h-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            TRANSMITTING...
                          </>
                        ) : (
                          <>
                            SEND <Send className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>

                    {sending && (
                      <div className="mt-4">
                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <p className="font-mono text-[10px] text-muted-foreground mt-1">
                          TRANSFER_PROGRESS...
                        </p>
                      </div>
                    )}
                  </motion.form>
                )}

                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                    <p className="font-mono text-sm text-foreground">
                      TRANSFER_COMPLETE
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-2">
                      Message received. Response queued.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
