import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

const hsiaInterior = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Waiting_area_of_Hazrat_Shahjalal_International_Airport_3.jpg/800px-Waiting_area_of_Hazrat_Shahjalal_International_Airport_3.jpg";
const hsiaExterior = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/HSIA_Terminal_3.jpg/800px-HSIA_Terminal_3.jpg";
const hsiaInauguration = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sheikh_Hasina_inaugurates_Hazrat_Shahjalal_International_Airport_Terminal_3%2C_Dhaka%2C_2023-10-07_%28PID-0013277%29.jpg/800px-Sheikh_Hasina_inaugurates_Hazrat_Shahjalal_International_Airport_Terminal_3%2C_Dhaka%2C_2023-10-07_%28PID-0013277%29.jpg";

type Project = {
  title: string;
  image: string;
  role: string;
  description: string;
  tags: string[];
  gallery?: string[];
};

const projects: Project[] = [
  {
    title: "HSIA Terminal 03",
    image: hsiaInterior,
    gallery: [hsiaExterior, hsiaInauguration, hsiaInterior],
    role: "Quality Control Engineer",
    description:
      "Managed end-to-end QA/QC processes for one of Bangladesh's most significant aviation infrastructure projects, ensuring compliance with international standards.",
    tags: ["QA/QC", "Documentation", "Inspection", "Aviation"],
  },
  {
    title: "Dhaka MRT Project",
    image: mrtImg,
    role: "QC Engineer",
    description:
      "Executed quality inspections and layout demarcation for the country's first mass rapid transit system, coordinating with Japanese and local engineering teams.",
    tags: ["Quality Control", "Structural", "Transit", "Surveying"],
  },
  {
    title: "Dormakaba ES 250 Pro Easy",
    image: doorImg,
    role: "Project Engineer – Installation",
    description:
      "Overseeing installation of automatic sliding door systems, managing vendor coordination, site execution, and commissioning for commercial projects.",
    tags: ["Installation", "Automation", "Project Execution"],
  },
];

const ProjectsSectionLite = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Projects"
        subtitle="Key infrastructure and engineering projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-hover rounded-xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden bg-card/40">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-primary text-xs font-body mt-1">{p.role}</p>
              <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">
                {p.description}
              </p>
              {p.gallery && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.gallery.map((img, idx) => (
                    <div key={idx} className="h-16 rounded-lg overflow-hidden border border-white/10 bg-card/40">
                      <img
                        src={img}
                        alt={`${p.title} ${idx + 1}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSectionLite;
