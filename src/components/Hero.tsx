import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="main"
      className="w-full min-h-screen flex items-center bg-[url('/azerty.webp')] bg-cover bg-center bg-fixed relative"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#faebd7] text-2xl md:text-4xl font-medium mb-4">
            Hello, I'm Soufiane Bouziani
            <br />
            <span className="text-[#ff6347] text-3xl md:text-5xl font-bold inline-block mt-2">
              Data Engineering Student
            </span>
          </h2>
          
          <a
            href="#projects"
            className="inline-block bg-[#ff6347] text-[#faebd7] font-semibold py-3 px-8 rounded-2xl mt-6 mb-8 hover:bg-[#a52a2a] hover:scale-110 transition-all duration-300"
          >
            View my Projects
          </a>

          <div className="flex space-x-6">
            <SocialLink href="https://www.linkedin.com/in/soufiane-bouziani-354497254/" icon={<FaLinkedin />} />
            <SocialLink href="https://www.instagram.com/soufiane.bouziani/" icon={<FaInstagram />} />
            <SocialLink href="https://www.facebook.com/bouziani.bouziani.5" icon={<FaFacebook />} />
            <SocialLink href="https://github.com/chinigami122" icon={<FaGithub />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#faebd7] text-3xl hover:text-[#ff6347] hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
