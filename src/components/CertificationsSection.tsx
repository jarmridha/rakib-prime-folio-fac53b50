import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import certPlaceholder from "@/assets/cert-placeholder.jpg";
import certPmpUnit3 from "@/assets/cert-pmp-unit-3.jpg";

const certs = [
  { title: "PMP Certification: Unit 3", image: certPmpUnit3, pdf: "/certificates/pmp-unit-3.pdf" },
  { title: "OSHA Safety Standards and Compliance", image: certPlaceholder },
  { title: "HSE Engineering", image: certPlaceholder },
  { title: "Construction Project Management", image: certPlaceholder },
  { title: "ISO 45001:2018 Awareness", image: certPlaceholder },
  { title: "ISO 14001:2015 Awareness", image: certPlaceholder },
  { title: "Standard First Aid, CPR & AED", image: certPlaceholder },
  { title: "Basic Safety Training", image: certPlaceholder },
  { title: "Health & Safety Induction Certificate", image: certPlaceholder },
  { title: "Managing Project Risks and Changes", image: certPlaceholder },
  { title: "Initiating and Planning Projects", image: certPlaceholder },
  { title: "High-Impact Business Writing", image: certPlaceholder },
];

const CertificationsSection = () => {
  const isMobile = useIsMobile();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [modalCert, setModalCert] = useState<typeof certs[0] | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="certifications" className="section-padding bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Certifications & Trainings" subtitle="Professional development & industry credentials" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="glass-card-hover rounded-lg p-4 flex items-start gap-3 cursor-pointer relative"
              onMouseEnter={() => !isMobile && setHoveredIdx(i)}
              onMouseLeave={() => !isMobile && setHoveredIdx(null)}
              onClick={() => isMobile && setModalCert(c)}
            >
              <Award size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-sm font-body text-foreground">{c.title}</span>

              {/* Desktop floating preview */}
              <AnimatePresence>
                {!isMobile && hoveredIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 pointer-events-none"
                  >
                    <div className="glass-card rounded-xl overflow-hidden shadow-[0_8px_40px_hsl(var(--gold-glow)/0.15)] border border-primary/20 w-[280px]">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="px-3 py-2 text-xs text-muted-foreground text-center font-body truncate">
                        {c.title}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile lightbox modal */}
      <AnimatePresence>
        {modalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setModalCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-card rounded-2xl overflow-hidden shadow-[0_16px_60px_hsl(var(--gold-glow)/0.2)] border border-primary/20 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={modalCert.image}
                  alt={modalCert.title}
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => setModalCert(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-primary shrink-0" />
                  <h3 className="text-sm font-body font-medium text-foreground">{modalCert.title}</h3>
                </div>
                {modalCert.pdf && (
                  <a
                    href={modalCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-body text-primary hover:underline"
                  >
                    View full certificate (PDF) →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
