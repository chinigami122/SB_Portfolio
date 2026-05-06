import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--color-background)] text-[var(--color-foreground)] relative">
      <div className="container mx-auto px-6 md:px-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[#ffa99f] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[var(--color-accent)] to-purple-600 shadow-[0_0_40px_rgba(255,90,60,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-background)] border-4 border-[var(--color-background)]">
                <img 
                  src="/profile.png" 
                  alt="Soufiane Bouziani" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if profile.png is not found
                    (e.target as HTMLImageElement).src = "/image (1).webp";
                  }}
                />
              </div>
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-card-border)] p-3 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">🐍</span>
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-card-border)] p-3 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>
                I'm a <span className="font-semibold text-[var(--color-accent)]">Data & Full-Stack Engineering</span> student
                at ENSA Al Hoceima, building real systems across the full stack —
                from real-time data pipelines to production-ready APIs and web products.
              </p>

              <p>
                My core stack spans <span className="font-semibold text-[var(--color-accent)]">Python</span>,{" "}
                <span className="font-semibold text-[var(--color-accent)]">SQL</span>,{" "}
                <span className="font-semibold text-[var(--color-accent)]">Apache Kafka</span>,{" "}
                <span className="font-semibold text-[var(--color-accent)]">dbt</span>, and{" "}
                <span className="font-semibold text-[var(--color-accent)]">Apache Airflow</span> on the data side,
                paired with <span className="font-semibold text-[var(--color-accent)]">Spring Boot</span> and{" "}
                <span className="font-semibold text-[var(--color-accent)]">React</span> for backend and frontend work.
                I thrive at the intersection of data engineering and software development,
                turning raw data into actionable insights and clean interfaces.
              </p>

              <p>
                Whether it's architecting a{" "}
                <span className="font-semibold text-[var(--color-accent)]">Medallion Architecture</span> lakehouse
                processing 50K+ orders a day, designing secured{" "}
                <span className="font-semibold text-[var(--color-accent)]">REST APIs</span> with JWT and RBAC,
                or building responsive UIs with TypeScript and Chakra UI — I focus on solutions
                that are not just functional, but engineered to last.
              </p>

              <p>
                I'm constantly pushing into new territory:{" "}
                <span className="font-semibold text-[var(--color-accent)]">distributed computing</span>,{" "}
                <span className="font-semibold text-[var(--color-accent)]">cloud infrastructure</span>, machine learning,
                and real-time systems. Every project is an opportunity to go deeper and build
                something that actually matters.
              </p>
            </div>
                        
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-card-border)]">
                <h4 className="text-[var(--color-accent)] font-bold text-2xl mb-1">2+</h4>
                <p className="text-sm opacity-70">Years of Coding</p>
              </div>
              <div className="p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-card-border)]">
                <h4 className="text-[var(--color-accent)] font-bold text-2xl mb-1">10+</h4>
                <p className="text-sm opacity-70">Projects Completed</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
