import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-header)] py-10 border-t border-[var(--color-card-border)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white uppercase tracking-wider relative group block mb-2">
              <span className="text-[var(--color-accent)]">S</span>B<span className="text-[var(--color-accent)]">.</span>
            </a>
            <p className="text-[var(--color-foreground)] opacity-50 text-sm">
              &copy; {new Date().getFullYear()} Soufiane Bouziani. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://www.linkedin.com/in/soufiane-bouziani-354497254/" icon={<FaLinkedin />} />
            <SocialLink href="https://github.com/chinigami122" icon={<FaGithub />} />
            <SocialLink href="https://www.instagram.com/soufiane.bouziani/" icon={<FaInstagram />} />
            <SocialLink href="https://www.facebook.com/bouziani.bouziani.5" icon={<FaFacebook />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[var(--color-card)] border border-[var(--color-card-border)] flex items-center justify-center text-[var(--color-foreground)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
