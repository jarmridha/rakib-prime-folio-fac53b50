import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  image?: string;
  role: string;
  description: string;
  tags: string[];
  gallery?: string[];
};

const projects: Project[] = [
  {
    title: "HSIA Terminal 03",
    image: "/hsia/hsia-main.jpg",
    gallery: [
      "/hsia/hsia-thumb-1.jpg",
      "/hsia/hsia-thumb-2.jpg",
      "/hsia/hsia-thumb-3.jpg",
    ],
    role: "Quality Control Engineer",
    description:
      "Managed end-to-end QA/QC processes for one of Bangladesh's most significant aviation infrastructure projects, ensuring compliance with international standards.",
    tags: ["QA/QC", "Documentation", "Inspection", "Aviation"],
  },
  {
    title: "Dhaka MRT Project",
    image: "/mrt/mrt-main.jpg",
    gallery: [
      "/mrt/mrt-thumb-1.jpg",
      "/mrt/mrt-thumb-2.jpg",
      "/mrt/mrt-thumb-3.jpg",
    ],
    role: "QC Engineer",
    description:
      "Executed quality inspections and layout demarcation for the country's first mass rapid transit system, coordinating with Japanese and local engineering teams.",
    tags: ["Quality Control", "Structural", "Transit", "Surveying"],
  },
];

const ProjectImageSlider = ({ project }: { project: Project }) => {
  const images = useMemo(
    () => [project.image, ...(project.gallery ?? [])].filter(Boolean) as string[],
    [project.image, project.gallery]
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative h-48 overflow-hidden bg-card/40">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`${project.title} image ${idx + 1}`}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
            active === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show ${project.title} image ${idx + 1}`}
              onClick={() => setActive(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === idx ? "w-6 bg-primary" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsSectionLite = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Projects"
        subtitle="Key infrastructure and engineering projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-hover rounded-xl overflow-hidden group"
          >
            <ProjectImageSlider project={p} />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-primary text-xs font-body mt-1">{p.role}</p>
              <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">
                {p.description}
              </p>
              {p.gallery && p.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.gallery.map((img, idx) => (
                    <div key={idx} className="h-16 rounded-lg overflow-hidden border border-white/10 bg-card/40">
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
