import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate email sending since no backend is connected yet.
    // Recommended to use EmailJS here
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-background)] relative">
      <div className="container mx-auto px-6 md:px-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#ffa99f] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-[var(--color-foreground)] opacity-70">
            Have a project in mind or want to discuss opportunities? Send me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-card-border)] rounded-2xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-foreground)] opacity-80">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#000000] border border-[var(--color-card-border)] rounded-xl px-4 py-3 text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-foreground)] opacity-80">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#000000] border border-[var(--color-card-border)] rounded-xl px-4 py-3 text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--color-foreground)] opacity-80">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#000000] border border-[var(--color-card-border)] rounded-xl px-4 py-3 text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center"
            >
              {status === "loading" ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm mt-4">Message sent successfully!</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
