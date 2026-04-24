import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Link2, Send } from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = "21b0bd26-b33f-4e84-99da-09cda85add30";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill in your name, email, and message." });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus(null);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact from ${name}`,
          from_name: "Jahangir Alam Rakib Portfolio",
          name,
          email,
          message,
          replyto: email,
          to: "jarakibmridha@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", text: "Message sent successfully. It will arrive in my email inbox." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: result.message || "Message sending failed. Please try again." });
      }
    } catch {
      setStatus({ type: "error", text: "Something went wrong while sending your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next engineering project" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-xl p-6 space-y-5"
          >
            <h3 className="font-display text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4 text-sm font-body">
              {[
                { icon: Mail, label: "jarakibmridha@gmail.com", href: "mailto:jarakibmridha@gmail.com" },
                { icon: Phone, label: "+880 1676080995, +8801735027724", href: "tel:+8801676080995" },
                { icon: Link2, label: "linkedin.com/in/jahangiralamrakib", href: "https://linkedin.com/in/jahangiralamrakib" },
                { icon: MapPin, label: "Bangladesh" },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-muted-foreground">
                  <Icon size={16} className="text-primary shrink-0" />
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-xl p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={14} /> {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className={`text-xs font-body ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {status.text}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
