import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="py-20 bg-black text-[#faebd7]">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between flex-wrap">
          <div className="w-full md:w-[30%] mb-10 md:mb-0">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/image (1).webp" 
                alt="Soufiane Bouziani" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-[65%]">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              I'm Soufiane Bouziani, a versatile professional with a passion for
              technology and problem-solving. With expertise in Python, Front End
              development, and MySQL, I bring a well-rounded skill set that
              bridges the gap between data management and user-centric design. My
              experience includes building dynamic web applications, designing
              intuitive user interfaces, and managing robust databases. I leverage
              my technical skills to create seamless and efficient solutions,
              whether it's developing interactive front-end experiences or
              optimizing database performance. I'm constantly expanding my
              knowledge and seeking opportunities to apply my expertise in Python,
              Front End development, and MySQL to deliver innovative and impactful
              solutions.
            </p>

            <div className="flex space-x-8 mb-8 border-b border-gray-700 pb-2">
              {["education", "skills", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`text-lg font-medium capitalize relative pb-2 transition-colors ${
                    activeTab === tab ? "text-[#ff6347]" : "text-[#faebd7]"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-[#ff6347]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              {activeTab === "education" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <li>
                    <span className="text-[#ff6347] text-sm block mb-1">
                      2024 - Current
                    </span>
                    <span className="text-[#b66262] font-semibold block">
                      First year Data Engineering student
                    </span>
                    National School of Applied Science of Al Hoceima (ENSAH)
                  </li>
                  <li>
                    <span className="text-[#ff6347] text-sm block mb-1">
                      2022 - 2024
                    </span>
                    <span className="text-[#b66262] font-semibold block">
                      Preparatory Classes in Mathematics and Physics
                    </span>
                    National School of Applied Science of Al Hoceima (ENSAH)
                  </li>
                  <li>
                    <span className="text-[#ff6347] text-sm block mb-1">
                      2019 - 2022
                    </span>
                    <span className="text-[#b66262] font-semibold block">
                      High School Diploma in physical Science
                    </span>
                    Meknes, Morroco
                  </li>
                </motion.ul>
              )}

              {activeTab === "skills" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <li>
                    <a
                      href="#skills"
                      className="text-[#ff6347] hover:text-[#a52a2a] transition-colors"
                    >
                      Click here to view detailed skills section
                    </a>
                  </li>
                </motion.ul>
              )}

              {activeTab === "experience" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <li>
                    <span className="text-[#ff6347] text-sm block mb-1">
                      3 Months Internship
                    </span>
                    <span className="text-[#b66262] font-semibold block text-lg">
                      Front-End Developer Intern
                    </span>
                    <span className="text-gray-300 block mb-2">Shiftbricks</span>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Joined Shiftbricks with a mission to turn lines of code into meaningful products.
                      <br />
                      <span className="block mt-2">• Built the showcase website for the AI-powered accounting solution <strong>Metadooc</strong> using HTML, CSS, JavaScript, and Bootstrap.</span>
                      <span className="block mt-1">• Explored modern front-end development with <strong>React, TypeScript, and Chakra UI</strong>.</span>
                      <span className="block mt-1">• Gained experience in product evolution, balancing design with functionality, and working in a fast-paced startup environment.</span>
                    </p>
                  </li>
                </motion.ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
