import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Technical Skills",
    items: ["AutoCAD 2D", "MS Office Suite", "Documentation", "Inspection", "Reporting", "Quality Control"],
  },
  {
    title: "Standards & Codes",
    items: ["BNBC 2020", "ASTM", "ACI", "BS/EN", "OSHA", "NFPA", "RSC", "NIRAPON"],
  },
  {
    title: "Professional Skills",
    items: ["Coordination", "Communication", "Planning", "Compliance", "Client/Consultant Handling", "Project Support"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technical expertise & professional competencies" />

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-display text-lg font-semibold gold-gradient-text mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-xs font-body px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:border-primary/30 border border-transparent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
