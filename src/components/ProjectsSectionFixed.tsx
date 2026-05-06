import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

const hsiaMain = "data:image/jpeg;base64,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[... truncated for brevity ...]";

const hsiaThumbTwo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQ4PGhAQGzclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIANwBQAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD0QAAEDAgQEBAQEBQIHAAAAAAEAAgMEBREGEiExQQcTIlFhcYGRoRQjQrHR8BQjYnKSwfEWY3OD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAJhEBAAICAgICAgMBAAAAAAAAAAECAxEEEiExBEFRIjJhEzKB8P/aAAwDAQACEQMRAD8A6fGAAcDgT20QXc6xxBlmfLg9BxjH0r5p+If/BQn9oj9jD4gXH7Sn7Yf7Mni34e6d4g1PUL7WvFFrqt1pl1Y3tvbXjTR2vmySIGYERgB8AV6f+1p8ev2i/2gf2jPiT+0B8Qf2cP2hf2i/Hnwz8G+N9R1LQPD3hS7v7y40+0vpLO6lt2ZiIY3ZQc5I9q/KH4Lft9/t+/8ABRz4n/sx/F7Wv2Xv2hPjPoXw+1LxNo+ieJvGniXxLqMEmmh7W6W4WFGH2fZkKTg8YxX1mYV8zw+YZQ6t92+l3b/h+J8N4owk8Nm2KlS9m5PXv/wCO+9WfV1FFFfPn7uFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX8hn/BQf9tL9qr/goB+3T8Vv20fGXxM/Zp8BeEdZ+EXiaHVv8AVvD+ozXESW0a5JKtG+MMeBir6f/AODf7/g5j8cf8Esv2lPh58Jf2fvi9pX/AAUM+HnjPVfD+tar4+0PSNW8KveSXdhMDNsyCNth+Y7WHzD0r5K/aC/ap/az/ao+MXxJ8bftH/ALUXirxt4x1C0TUtd1jUru91W+c7mJOST0HoK/Y/D72XJ+FK06W2jV11/qeTl3ifgHF+Q1KyEuW7/rWp83UUUV88fuAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/2Q==";

const hsiaThumbThree = "data:image/jpeg;base64,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";

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
    image: hsiaMain,
    gallery: [hsiaThumbOne, hsiaThumbTwo, hsiaThumbThree],
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

const ProjectsSectionFixed = () => (
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
                width={800}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-primary text-xs font-body mt-1">{p.role}</p>
              <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">
                {p.description}
              </p>

              {p.gallery && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {p.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="h-16 rounded-lg overflow-hidden border border-white/10 bg-card/40"
                    >
                      <img
                        src={img}
                        alt={`${p.title} ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                  >
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

export default ProjectsSectionFixed;
