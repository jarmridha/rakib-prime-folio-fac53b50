import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CheckCircle } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.png";

const strengths = [
  "Quality Control & Assurance",
  "Site Inspection & Observation",
  "Technical Documentation (WIR, MIR, MAR, RI)",
  "Consultant & Client Coordination",
  "Layout Demarcation & Surveying",
  "Project Planning & Execution",
  "Safety & Compliance Management",
  "Reporting & Communication",
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <img
          src={aboutIllustration}
          alt="Engineer illustration"
          className="h-32 md:h-40 object-contain opacity-70 invert brightness-90"
        />
      </motion.div>
      <SectionHeading title="About Me" subtitle="Professional profile & core strengths" />

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">
            Professional Summary
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground font-body leading-relaxed">
            <p>
              A dedicated and performance-oriented Civil Engineer with proven expertise in 
              quality control, site inspection, and project coordination across large-scale 
              infrastructure developments in Bangladesh.
            </p>
            <p>
              Key project exposure includes <span className="text-foreground font-medium">HSIA Terminal 3</span> and 
              the <span className="text-foreground font-medium">Dhaka Mass Rapid Transit (MRT)</span> project — 
              contributing to WIR, MIR, MAR, and RI inspection processes, layout demarcation, 
              and end-to-end consultant/client coordination.
            </p>
            <p>
              Skilled in documentation management, compliance tracking, reporting, and 
              cross-functional team collaboration. Committed to delivering projects on time, 
              within budget, and to the highest quality standards.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">
            Core Strengths
          </h3>
          <ul className="space-y-2.5">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
