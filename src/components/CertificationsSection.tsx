import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const certs = [
  "PMP Certification: Unit 3",
  "OSHA Safety Standards and Compliance",
  "HSE Engineering",
  "Construction Project Management",
  "ISO 45001:2018 Awareness",
  "ISO 14001:2015 Awareness",
  "Standard First Aid, CPR & AED",
  "Basic Safety Training",
  "Health & Safety Induction Certificate",
  "Managing Project Risks and Changes",
  "Initiating and Planning Projects",
  "High-Impact Business Writing",
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding bg-surface/50">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Certifications & Trainings" subtitle="Professional development & industry credentials" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="glass-card-hover rounded-lg p-4 flex items-start gap-3"
          >
            <Award size={18} className="text-primary shrink-0 mt-0.5" />
            <span className="text-sm font-body text-foreground">{c}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
