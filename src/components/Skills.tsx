import { motion } from "framer-motion";
import {
  FaJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase,
  FaReact, FaGitAlt, FaJava, FaDocker, FaLinux
} from "react-icons/fa";
import {
  SiTailwindcss, SiPandas, SiNumpy, SiApachespark,
  SiScikitlearn, SiApachekafka, SiDbt, SiSnowflake,
  SiPostgresql, SiMysql, SiSpring, SiTypescript,
  SiBootstrap, SiPhp, SiApachehadoop, SiOracle

} from "react-icons/si";
import { BiCoinStack, BiBarChartAlt2 } from "react-icons/bi";
import { TbApi, TbWind } from "react-icons/tb";

const skillGroups = [
  {
    title: "Data Engineering",
    skills: [
      { name: "Python",        icon: <FaPython className="text-blue-400" />,          level: 90 },
      { name: "SQL",           icon: <FaDatabase className="text-blue-300" />,         level: 85 },
      { name: "Apache Kafka",  icon: <SiApachekafka className="text-white" />,         level: 75 },
      { name: "Apache Airflow",icon: <TbWind className="text-[#017CEE]" />,   level: 72 },
      { name: "dbt",           icon: <SiDbt className="text-orange-400" />,            level: 70 },
      { name: "Spark / PySpark",icon: <SiApachespark className="text-orange-500" />,  level: 75 },
      { name: "Pandas",        icon: <SiPandas className="text-purple-400" />,         level: 90 },
      { name: "NumPy",         icon: <SiNumpy className="text-blue-300" />,            level: 85 },
      { name: "Power BI",      icon: <BiBarChartAlt2 className="text-yellow-400" />, level: 70 },
      { name: "Machine Learning", icon: <SiScikitlearn className="text-orange-400" />, level: 70 },
    ]
  },
  {
    title: "Backend & Frontend",
    skills: [
      { name: "Spring Boot",   icon: <SiSpring className="text-green-400" />,          level: 75 },
      { name: "REST APIs / JWT", icon: <TbApi className="text-emerald-400" />,         level: 78 },
      { name: "Java",          icon: <FaJava className="text-red-400" />,              level: 70 },
      { name: "React",         icon: <FaReact className="text-blue-400" />,            level: 85 },
      { name: "TypeScript",    icon: <SiTypescript className="text-blue-500" />,       level: 78 },
      { name: "JavaScript",    icon: <FaJs className="text-yellow-400" />,             level: 85 },
      { name: "HTML5",         icon: <FaHtml5 className="text-orange-500" />,          level: 95 },
      { name: "CSS3",          icon: <FaCss3Alt className="text-blue-500" />,          level: 90 },
      { name: "Tailwind CSS",  icon: <SiTailwindcss className="text-cyan-400" />,      level: 85 },
      { name: "Bootstrap",     icon: <SiBootstrap className="text-purple-500" />,      level: 85 },
      { name: "PHP",           icon: <SiPhp className="text-indigo-400" />,            level: 65 },
    ]
  },
  {
    title: "Databases, Tools & Systems",
    skills: [
      { name: "PostgreSQL",    icon: <SiPostgresql className="text-blue-400" />,       level: 80 },
      { name: "Snowflake",     icon: <SiSnowflake className="text-cyan-300" />,        level: 72 },
      { name: "MySQL",         icon: <SiMysql className="text-blue-300" />,            level: 80 },
      { name: "Oracle SQL",    icon: <SiOracle className="text-red-500" />,            level: 72 },
      { name: "HDFS / Hadoop", icon: <SiApachehadoop className="text-yellow-500" />,   level: 68 },
      { name: "Docker",        icon: <FaDocker className="text-blue-500" />,           level: 75 },
      { name: "Git / GitHub",  icon: <FaGitAlt className="text-orange-500" />,         level: 85 },
      { name: "Linux",         icon: <FaLinux className="text-yellow-300" />,          level: 78 },
      { name: "Data Structures", icon: <BiCoinStack className="text-yellow-500" />,    level: 80 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--color-background)] relative">
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
              Technical Arsenal
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.2 }}
              className="bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-card-border)] rounded-2xl p-8 hover:border-[var(--color-accent)] transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-8 border-b border-[var(--color-card-border)] pb-4 inline-block">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">
                          {skill.icon}
                        </span>
                        <span className="text-[var(--color-foreground)] font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--color-foreground)] opacity-50">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
