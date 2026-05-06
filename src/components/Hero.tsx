import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeSnippet = `class SoufianeBouziani:
    def __init__(self):
        self.name  = "Soufiane Bouziani"
        self.role  = "Data & Full-Stack Engineer"
        self.stack = ["Kafka", "Airflow", "dbt",
                      "Spring Boot", "React", "SQL"]

    def build(self):
        return "50K+ events/day · Medallion Architecture"

    def execute(self):
        while True:
            self.learn()
            self.build()
            self.deploy()`;

export default function Hero() {
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 22);
    return () => clearInterval(typingInterval);
  }, []);

  // Split typed output after the class declaration line
  const afterClass = typedCode.split("class SoufianeBouziani:")[1] || "";

  return (
    <section
      id="main"
      className="w-full min-h-screen flex items-center bg-[var(--color-background)] relative overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left Content ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <span className="text-[var(--color-accent)] font-medium mb-4 tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
              Hello, I'm Soufiane
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-foreground)] leading-tight">
              <span className="bg-gradient-to-r from-[var(--color-foreground)] to-gray-500 bg-clip-text text-transparent">
                Data Engineer
              </span>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[#ffa99f] bg-clip-text text-transparent">
                & Full-Stack Builder
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-foreground)] opacity-70 mb-6 max-w-lg leading-relaxed">
              I architect real-time data pipelines, build secured backend APIs,
              and ship polished web products — bridging the gap between raw data
              and meaningful user experiences.
            </p>

            {/* Badge strip */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "Kafka", "Airflow", "dbt", "Spark",
                "Spring Boot", "React", "PostgreSQL", "Docker",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--color-card-border)] text-[var(--color-foreground)] opacity-70 hover:border-[var(--color-accent)] hover:opacity-100 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="bg-[var(--color-accent)] text-white font-medium py-3 px-8 rounded-xl hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_var(--color-accent)] transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-transparent text-[var(--color-foreground)] border border-[var(--color-card-border)] font-medium py-3 px-8 rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <SocialLink href="https://www.linkedin.com/in/soufiane-bouziani-354497254/" icon={<FaLinkedin />} />
              <SocialLink href="https://github.com/chinigami122"                           icon={<FaGithub />} />
              <SocialLink href="https://www.instagram.com/soufiane.bouziani/"             icon={<FaInstagram />} />
              <SocialLink href="https://www.facebook.com/bouziani.bouziani.5"             icon={<FaFacebook />} />
            </div>
          </motion.div>

          {/* ── Right Content — Code Block ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-5/12 hidden md:block"
          >
            <div className="bg-[#1e1e2e] rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Window header */}
              <div className="bg-[#181825] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-gray-500 font-mono">soufiane.py</span>
              </div>

              {/* Code area */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-loose text-gray-300 min-h-[280px] overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>
                    {/* Static first line with syntax highlight */}
                    <span className="text-pink-500">class </span>
                    <span className="text-blue-400">SoufianeBouziani</span>
                    <span className="text-gray-300">:</span>
                    {"\n"}
                    {/* Typed remainder with inline highlights */}
                    {afterClass
                      .split(/(\"[^\"]*\")/g)
                      .map((part, i) =>
                        part.startsWith('"') ? (
                          <span key={i} className="text-green-400">{part}</span>
                        ) : (
                          <span key={i}>{
                            part
                              .split(/\b(def|self|return|while|True)\b/g)
                              .map((word, j) =>
                                ["def", "return", "while", "True"].includes(word) ? (
                                  <span key={j} className="text-pink-500">{word}</span>
                                ) : word === "self" ? (
                                  <span key={j} className="text-orange-300">{word}</span>
                                ) : (
                                  <span key={j}>{word}</span>
                                )
                              )
                          }</span>
                        )
                      )}
                    {/* Blinking cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2 h-4 bg-[var(--color-accent)] ml-0.5 align-middle"
                    />
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-foreground)] opacity-50 hover:opacity-100 hover:text-[var(--color-accent)] transition-all cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <FaChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-foreground)] text-2xl opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
