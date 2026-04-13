import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const SOCIALS = [
    { label: "GitHub", icon: FaGithub, href: "https://github.com" },
    { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { label: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Whether you have a role in mind, a project to build, or just want
              to say hello — I'd love to hear from you. I typically respond
              within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/25 w-24 uppercase tracking-widest">
                  Email
                </span>
                <a
                  href="mailto:goronefren@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  goronefren@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/25 w-24 uppercase tracking-widest">
                  Location
                </span>
                <span className="text-sm text-white/60">
                  Hilongos, Leyte, Philippines · Remote OK
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/25 w-24 uppercase tracking-widest">
                  Status
                </span>
                <span className="flex items-center gap-2 text-sm text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available now
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 text-xs text-white/40 hover:text-white hover:border-white/15 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
