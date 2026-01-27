import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

const projectsData: Record<string, Project[]> = {
  "Data Engineering": [
    {
      title: "ETL Pipeline",
      category: "Data Engineering",
      description: "A scalable data lakehouse ingestion and transformation pipeline using HDFS, Trino, and PostgreSQL to process and model retail procurement data across Bronze → Silver → Gold layers.",
      image: "/architecture.png",
      link: "https://github.com/chinigami122/BigData",
    },
    {
      title: "Data Warehouse",
      category: "Data Engineering",
      description: "Designed a star schema data warehouse for analytics.",
      image: "/azerty.webp",
      link: "#",
    },
  ],
  "Web Development": [
    {
      title: "Portfolio Website",
      category: "Web Development",
      description: "My personal portfolio built with React and Tailwind CSS.",
      image: "/azerty.webp",
      link: "https://github.com/chinigami122/Portfolio/tree/main/portfolio-next",
    },
    {
      title: "E-commerce Dashboard",
      category: "Web Development",
      description: "Admin dashboard for managing products and orders.",
      image: "/azerty.webp",
      link: "#",
    },
  ],
  "Automation Scripts": [
    {
      title: "Web Scraper",
      category: "Automation",
      description: "Python script to scrape data from multiple websites.",
      image: "/azerty.webp",
      link: "#",
    },
    {
      title: "File Organizer",
      category: "Automation",
      description: "Automated script to organize files by type and date.",
      image: "/azerty.webp",
      link: "#",
    },
  ],
};

export default function Projects() {
  const categories = Object.keys(projectsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="projects" className="py-20 bg-black text-[#faebd7]">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-[#ff6347] mb-16">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-lg font-medium capitalize relative pb-2 transition-colors ${
                activeTab === category ? "text-[#ff6347]" : "text-[#faebd7] hover:text-white"
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff6347]"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData[activeTab].map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#353333] rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h4 className="text-xl font-bold text-white mt-2 mb-3">
          {project.title}
        </h4>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#ff6347] font-medium hover:text-[#a52a2a] transition-colors"
        >
          More Details &rarr;
        </a>
      </div>
    </motion.div>
  );
}
