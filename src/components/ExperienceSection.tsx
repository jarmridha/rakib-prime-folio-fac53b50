import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Ingress Solutions Ltd.",
    role: "Project Engineer (New Installation)",
    period: "Nov 2025 – Present",
    logoType: "ingress",
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
    logoType: "adc",
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
    logoType: "smcc",
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
    logoType: "momotaj",
    bullets: [
      "Assisted in construction supervision and site management",
      "Supported material testing, quality monitoring, and reporting",
    ],
  },
];

const IngressLogo = () => (
  <div className="w-32 h-24 md:w-36 md:h-28 rounded-lg bg-white p-3 flex items-center justify-center shadow-md border border-primary/20">
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-9 h-16 rounded-full bg-blue-700 overflow-hidden shrink-0">
        <div className="absolute left-1.5 top-2 w-5 h-5 rounded-full bg-white" />
        <div className="absolute -left-2 bottom-0 w-12 h-9 rounded-t-full bg-red-600" />
      </div>
      <div className="font-serif text-black leading-[0.9] text-[17px] md:text-[19px] tracking-wide">
        <div>INGRESS</div>
        <div>SOLUTIONS</div>
        <div>LTD.</div>
      </div>
    </div>
  </div>
);

const ADCLogo = () => (
  <div className="w-44 h-24 md:w-52 md:h-28 rounded-lg bg-white p-3 flex items-center justify-center shadow-md border border-primary/20 overflow-hidden">
    <div className="relative w-full h-full flex flex-col justify-center">
      <div className="flex items-start gap-2">
        <div className="font-sans font-black text-black leading-none text-[54px] md:text-[62px] tracking-[-0.08em]">
          ADC
        </div>
        <div className="font-sans font-extrabold text-gray-500 leading-[1.05] text-[11px] md:text-[13px] pt-1 uppercase">
          <div>Aviation</div>
          <div>Dhaka</div>
          <div>Consortium</div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-2 h-[3px] bg-blue-700" />
      <div className="absolute right-0 bottom-0 text-blue-700 text-[35px] md:text-[41px] leading-none font-black">✈</div>
    </div>
  </div>
);

const SMCCLogo = () => (
  <div className="w-32 h-24 md:w-36 md:h-28 rounded-lg bg-white p-3 flex items-center justify-center shadow-md border border-primary/20">
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-black text-xl">
          S
        </div>
        <div className="w-14 h-14 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-600 font-black text-xl">
          ITD
        </div>
      </div>
      <div className="mt-1 text-black font-black text-sm">SMCC-ITD JV</div>
    </div>
  </div>
);

const MomotajLogo = () => (
  <div className="w-32 h-24 md:w-36 md:h-28 rounded-lg bg-white p-3 flex items-center justify-center shadow-md border border-primary/20">
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-[52px] leading-none font-black tracking-[-0.1em] text-red-700 italic">
        ML
      </div>
      <div className="text-[10px] text-gray-700 font-semibold text-center leading-tight mt-1">
        Manufacturers, Engineers & Builders
      </div>
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-surface/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Experience" subtitle="Career timeline & professional journey" />
      <div className="relative">
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
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <div className="glass-card-hover rounded-xl p-5 md:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-body text-sm flex items-center gap-1.5">
                      <Briefcase size={13} /> {exp.company}
                    </p>
                    {exp.project && (
                      <p className="text-xs text-muted-foreground font-body mt-0.5">{exp.project}</p>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-3 sm:flex-col sm:items-end sm:shrink-0">
                    <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.logoType === "ingress" && <IngressLogo />}
                    {exp.logoType === "adc" && <ADCLogo />}
                    {exp.logoType === "smcc" && <SMCCLogo />}
                    {exp.logoType === "momotaj" && <MomotajLogo />}
                  </div>
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
