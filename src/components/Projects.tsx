import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

const projectsData: Record<string, Project[]> = {
  "Data Engineering": [
    {
      title: "Real-Time Stock Market Streaming Pipeline",
      category: "Data Engineering",
      description: "A real-time data pipeline ingesting 10+ equity symbols via Kafka into a PostgreSQL/Snowflake warehouse, orchestrated by Airflow and transformed across Bronze → Silver → Gold layers using dbt, powering live KPI dashboards in Power BI.",
      image: "/pipeline-architecture.jpeg",
      link: "https://github.com/chinigami122/Stock_Market_Stream",
      tags: ["Kafka", "Airflow", "dbt", "Snowflake", "PostgreSQL", "Power BI", "Docker"],
    },
    {
      title: "Big Data Procurement Pipeline — Data Lakehouse",
      category: "Data Engineering",
      description: "A distributed Data Lakehouse processing 50K+ orders/day using HDFS, Hive Metastore, and Trino with federated SQL across Bronze → Silver → Gold layers, delivering 5 Gold-layer analytics tables for sales, inventory, and supplier performance.",
      image: "/architecture.png",
      link: "https://github.com/chinigami122/BigData",
      tags: ["HDFS", "Hive Metastore", "Trino", "PostgreSQL", "PySpark", "Docker"],
    },
    {
      title: "Japan Visa Analysis on Azure Spark",
      category: "Data Engineering",
      description: "A cloud-deployed PySpark ETL pipeline running on a 5-node Spark cluster (Docker, Azure VM) to process 100K+ structured visa records across 12 years, with interactive Plotly visualisations served via an HTML dashboard.",
      image: "/spark_on_cloud_pipeline.png",
      link: "https://github.com/chinigami122/spark_on_cloud",
      tags: ["PySpark", "Docker", "Azure", "Plotly", "Pandas", "NumPy"],
    },
  ],
  "Web Development": [
    {
      title: "Portfolio Website",
      category: "Web Development",
      description: "My personal portfolio built with React and Tailwind CSS. Showcasing my projects and skills.",
      image: "/portfolio.png",
      link: "https://github.com/chinigami122/SB_Portfolio",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Billing Software — Full-Stack POS & Billing System",
      category: "Full-Stack",
      description: "A full-stack POS system built with Spring Boot and MySQL featuring JWT stateless authentication, role-based access control, 15+ secured REST API endpoints, Stripe payment processing, OpenPDF receipt generation, and MinIO object storage.",
      image: "/billing_app.png",
      link: "https://github.com/chinigami122/Billing_Sotware",
      tags: ["Spring Boot", "Java", "MySQL", "JWT", "Stripe", "React", "Docker"],
    },
    {
      title: "Hospital Management System",
      category: "Full-Stack",
      description: "A dual-interface clinical management system built with Python and Oracle SQL, combining a desktop application and a web interface to handle patient records, case tracking, and structured data workflows backed by a normalised relational schema.",
      image: "/hospital.png",
      link: "https://github.com/chinigami122",
      tags: ["Python", "Oracle SQL", "Pandas", "HTML", "CSS", "JavaScript", "PHP"],
    },
  ],
  "Automation Scripts": [
    {
      title: "Web Scraper",
      category: "Automation",
      description: "Python script to scrape data from multiple websites.",
      image: "/azerty.webp",
      link: "#",
      tags: ["Python", "BeautifulSoup", "Selenium"],
    },
    {
      title: "File Organizer",
      category: "Automation",
      description: "Automated script to organize files by type and date.",
      image: "/azerty.webp",
      link: "#",
      tags: ["Python", "OS", "Bash"],
    },
  ],
};

export default function Projects() {
  const categories = Object.keys(projectsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="projects" className="py-20 bg-[var(--color-background)] relative">
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
              Featured Projects
            </span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category 
                  ? "bg-[var(--color-accent)] text-white shadow-[0_0_15px_var(--color-accent)]" 
                  : "bg-[var(--color-card)] text-[var(--color-foreground)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projectsData[activeTab].map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-[var(--color-card)] backdrop-blur-md rounded-2xl overflow-hidden border border-[var(--color-card-border)] hover:border-[var(--color-accent)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,90,60,0.15)] flex flex-col h-full"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/azerty.webp";
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h4>
        <p className="text-[var(--color-foreground)] opacity-70 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 bg-black/40 text-[var(--color-foreground)] opacity-80 rounded-full border border-[var(--color-card-border)]">
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] transition-colors w-fit"
        >
          View Project <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>
    </motion.div>
  );
}
