import { 
  FaJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase, 
  FaReact, FaNodeJs, FaGitAlt, FaJava, FaDocker 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPandas, SiNumpy, SiApachespark 
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Spark", icon: <SiApachespark /> },
];

export default function Skills() {
  // Duplicate skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-black text-[#faebd7] overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 text-center mb-16">
        <h2 className="text-4xl font-bold text-[#ff6347]">Skills</h2>
      </div>
        
      <div className="w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-[#353333] min-w-[160px] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-colors duration-300 hover:bg-[#403d3d] border border-transparent hover:border-[#ff6347]"
            >
              <div className="text-[#ff6347] text-6xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium text-[#faebd7]">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
