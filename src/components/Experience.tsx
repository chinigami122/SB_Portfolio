import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    title: "Data Engineering Student",
    company: "National School of Applied Science of Al Hoceima (ENSAH)",
    description: "Specializing in Big Data, Data Pipelines, and scalable architectures.",
  },
  {
    year: "3 Months Internship",
    title: "Front-End Developer Intern",
    company: "Shiftbricks",
    description: "Built the showcase website for AI-powered accounting solution Metadooc. Explored modern front-end development with React, TypeScript, and Chakra UI.",
  },
  {
    year: "2022 - 2024",
    title: "Preparatory Classes (Math & Physics)",
    company: "National School of Applied Science of Al Hoceima (ENSAH)",
    description: "Intensive fundamental science and mathematics foundation.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--color-background)] relative">
      <div className="container mx-auto px-6 md:px-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[#ffa99f] bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative border-l border-[var(--color-card-border)] ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 bg-[var(--color-accent)] rounded-full border-4 border-[var(--color-background)] shadow-[0_0_10px_var(--color-accent)]" />
              
              <div className="bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-card-border)] rounded-2xl p-6 md:p-8 hover:border-[var(--color-accent)] transition-all duration-300">
                <span className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {exp.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-foreground)] mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-[var(--color-foreground)] opacity-70 mb-4">
                  {exp.company}
                </h4>
                <p className="text-[var(--color-foreground)] opacity-80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
