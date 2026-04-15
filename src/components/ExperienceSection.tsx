import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Ingress Solutions Ltd.",
    role: "Project Engineer (New Installation)",
    period: "Nov 2025 – Present",
    bullets: [
      "Leading on-site project execution for new installation projects",
      "Coordinating with vendors, consultants, and clients for seamless delivery",
      "Overseeing documentation, scheduling, and quality checkpoints",
    ],
  },
  {
    company: "Aridod Tech Serve Limited",
    role: "Quality Control Engineer",
    project: "HSIA Terminal 3 Project",
    period: "Previous",
    bullets: [
      "Managed QA/QC documentation including WIR, MIR, MAR, and RI submissions",
      "Conducted site inspections ensuring compliance with project specifications",
      "Coordinated with consultants and clients on inspection and approval processes",
    ],
  },
  {
    company: "SMCC-ITD JV",
    role: "QC Engineer",
    project: "Dhaka Mass Rapid Transit Project",
    period: "Previous",
    bullets: [
      "Executed quality control inspections across structural and finishing works",
      "Prepared layout demarcation and survey coordination for alignment accuracy",
      "Ensured adherence to international standards (ACI, ASTM, BS/EN)",
    ],
  },
  {
    company: "Momotaj Engineers Ltd.",
    role: "Site Engineer / Engineering Support",
    period: "Earlier Career",
    bullets: [
      "Assisted in construction supervision and site management",
      "Supported material testing, quality monitoring, and reporting",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-surface/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Experience" subtitle="Career timeline & professional journey" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <div className="glass-card-hover rounded-xl p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-body text-sm flex items-center gap-1.5">
                      <Briefcase size={13} /> {exp.company}
                    </p>
                    {exp.project && (
                      <p className="text-xs text-muted-foreground font-body mt-0.5">{exp.project}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
