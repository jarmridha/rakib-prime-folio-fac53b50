import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

const hsiaImg = "data:image/jpeg;base64,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";
const hsiaThumbOne = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQZJCAmJiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJP/AABEIANwBQAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgMEB//EADwQAAEDAgMFBQYEBgMAAAAAAAEAAgMEEQUhMQYSQVFhEyJxgZEUMqGxwdEjQlJy4RVikvEHQ//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQEAAgIBAwMDAAIDAQAAAAAAAAECEQMhEjEEQVEiYXGBkaETMkKx/9oADAMBAAIRAxEAPwD8i6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9i+E37R/ij9mzwfZ/Ff4o+MtA8N2qXIt7e81K5vL6KNAWZIwR1JP4V9gf8FqP2kP2Rfjf8Asi/DT4h/Er4e+I7fxR4v8A7R8S2mraVfQW1rNE0jtLHjY4Yj0PQ1+YH/BP39sT4x/8FDv2+vh9+0L8P7Pwh4D8T2V9qvii0tNQ8P2s7FdQjgzxofLHtX6Jf8ABRz/AIJi/H7/AIKf/sm/Fj4qfB/4b+HPGeh6R4YtPE1zZf2f4n1m3lltrWKNFJdC3Qknkk9q+NyvD4rM8JVqKcp2u1npb7j9T4dw1xZl+Y0YtJ6rY/UDxh/wVg/Zl+CP7DvwK8YfET9pj9kH4raN4V8Sa14jv9R8T+HtQnvbYzW11cSguwQG27R+ldV/wAFtv2bPGH7R3/BQLw7+wH8K/ij4f8ACvjr4l6r4f8AE2n+Gb77FrllBOsP2mWRzJLGixxgHapJHUBq/N3/goj/wAFiv2nv+CnX7On7HXwM+Fv7Qfw7+H+j+I9I8O2dxr3hLRr2dbbU/MbLR3f5n2yp4GDxX0j+1n/wcj/tXf8E2v2atX+AP7N3iT4d6L/wAJj4pl8Q6hbeJr6C2hlu7u7gVvKllZiW8w8LliRU2efj+H6RSp0ff+uJ8Z4f8YcO5nmNHD4m9vo9D6r/Yf8A2f8A9pn/AIKLf8HGfif4yfsn/GD4V+CdA+IHi6LQ9A0u11u6s7WG3vLx7hzIUS3EQQyyn5T0NfJv/BKj9s79rz/gp1+3z8U9Y/aV/ZY+HPw90r4fz6f4jutW0fQtJ0a2gjsrW3SNCxj8xslvwHsK+b6KK9fD8AcUZVQjKXVdlj9W4c4lyXM8T7Ofsq1rL8j9UPjB/wAFV/2aPgH+w78CvGHxE/aY/ZB+K2jeFfEmteI7fUfE/h7UJ722M1tdXIoLsEBtu0frXWf8Gm/wDwdGaZ+2f/AMEqvhf4o+GHhTRPFNj4s1Sx8TeIlkj1HTfNkm8j7NL8hwAnq3wqdBR+FH/BvD/wAF4P2zv+Cef7QXwV+J3wX8M+KPBPw6uNV8I6b4e0XT7TVLWWf7QGvXjzkwysUZcKDjtX6S/wDBT3/glh+y7/AMFHf2Mf2W/2cP2fPhV4u8I+K7fwrpviOS8i1W7uVvYobmGJmNxKrjc4IB+R4r6vL8DQx8Jxprk+p+G+LfBfA+XZdHC4nWfLpa+v5n8beEvgZ4o+EnxQ+Fvjv4h+EfEXhnxB4o1PXrG61LwzrN7cS3NjdQqSFkjY5B4PWv3J+Bn/AAWE/bV/4Jq6d4P8cfA34X2PjHxH4j8I2mt2tfWHiG1iW2maK4hUqLi2DFXBO1jtYj5jXwf/wAEsf2pf2Jv2qP2afB37Vf7MniP4A+LfDN9q97rnh+3+LbeIrNlYx6fKs6oqW6sQAMEL3rzb/gtz+2T8Xv2tP2W9D+K/7Gvw7sPCHiy9tYdO1nU7W4j1i3t4ZZJIpG2FfLQ4GQcj1xXj4niuOGzTMKvpWV3bR6H9VnFsG5vxpw1k9KisW/q8z9cPh5/wUT+NH/BQb/gmJ+zV8GvD2m2N9PqVh4v8AEXhC1sZJba1ur1bfV5bqPfgSE7cD0r4q/4I0ftSfsl/sj/sbXH7Yf7d3wQ0P4f8AgDxVc+HvEms2Ts4WSC0W3VvOYpdlvJtwFfK/Mx1r6K/4NN/2WfF3/Bfz46/tKfGj4TeHf2nvhDqvw31/w7DaR6zqVlcSRlNQv7p7dLeNQu4+6Dk+avm3/gs5/wAFBv2fv2S/GX7O3wz/ZQ/YL/ZP1vxN4x0XWrPSrK61XxTd6owha4s7JjI/wCyck5GQcg1+Y5zm3BfBtDKquIh7S1v3P39jnhvhfmnD+NhnOUYc9fM/rhoorhPiwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+i/2fP2pP2ev2TvBWofGj9kL4meHfg/4q0i0S+vrfwr4hs4buxuEZQ6TSBIohj1JUDv1r6d/4K/f8ABVX4P8A/BNr4HeNf2zf2g9Y8S/Fj4rS+KdK8H6Tp8WlaPd3SBl1iUjcxj5wxJU5IBz8/4J8fsSftj/APBZD9tb9sf9s39m/wCL/jjxL4j0/wz4c0m4vYNQvLjMN0D5bKykA4Ow5O3J6V+hn/BW39vb9sD4Pftf/ALM3xZ/ZB8Y+EdZ+EWoaZbxa1baj4d1G2kVYLuTDEySE4A2jk8jB/OvBwXj+IcupRrJpXv+H0P3jMzxAweH4h0sL9Jaa9D5B+Av7Z/x8/aD/YU/Ys+Kf7dP7Yvga90DwxH4w0XStJ8K3es3NrK8sM0CzzxkhXRSEYg5FfXP7Q3/Bvf+0f+x/4m1b4X/BL9s39nvw1aafBfQ39kOtjWptLkaMSQyX1m6SpdEjzGC0eD06e9fPP/Baf9gf9sP8AZu/aa+I37IXiT4u/tAeJ/Anjrw/Xkk2mWvhy1u4or+0LoVnWVMgF0A5+UEgkD2715P8AGj9vD9qH9pb4mfELxv8AtdftM+LPiPr0k+p6zquoajfa3NBPIHjMkjM0ik9Mnn3r9Pw+ccQ5BRj7WW9nbVdeh+BcQ8LcUZZkftXfy0P3IKKK+IP1MKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK+R/8Agpv+3N+yv/wTc/ZPvv2lfiz8QPBnw80Pxh4hhnaDwr4X03zVaeRXSQFIZVC5GMcivib9r7/g5J/b4/YB+PHjH4a/tE/8ABRD4T+CPiP4x8P6N4U0Xwlpwt8L6Tqi2kE1xql2yqI5OZd0jysMg8MMDNe3k3D+HqZr7N32dD4WPCfgfD4jl/GnLZ3PsL9j39qL9nr9kzwVqPxo/ZC+Jnh34P+KtItEvb638K+IbOG7sbhGUOk0gSKIY9SVA79a+p/+Cv3/BVX4P8A/BNr4HeNf2zf2g9Y8S/Fj4rS+KdK8H6Tp8WlaPd3SBl1iUjcxj5wxJU5IBz8/4J8fsSftj/wDBZD9tb9sf9s39m/wCL/jjxL4j0/wz4c0m4vYNQvLjMN0D5bKykA4Ow5O3J6V+hn/AAVu/b2/bA+D37X/AOzN8Wf2QfGPhHWfhFqGmW8WtW2o+HdRtpFWC7kwxMkhONNo5PIwfzrvwXn+Gc+pRrJpXv+H0P0Hibx3weH4h0sL9Jaa9D5B+Av7Z/x8/aD/YU/Ys+Kf7dP7Yvga90DwxH4w0XStJ8K3es3NrK8sM0CzzxkhXRSEYg5FfXP7Q3/Bvf+0f+x/4m1b4X/BL9s39nvw1aafBfQ39kOtjWptLkaMSQyX1m6SpdEjzGC0eD06e9fPP8AwWn/AGB/2w/2bv2mviN+yF4k+Lv7QHifwJ468P15JNplr4ctbuKK/tC6FZ1lTIBdAOfmBIJ7V5P8aP28P2of2lviZ8QvG/7XX7TPiz4j69JPqes6rqGo32tzQTyB4zJIzNIpPTJ599a+G4pzribJKMvaS3s7avr9D6nM+L+D8sur9LC/StHbr5nvgUUV8Xf2sFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX8hn/BQf9tL9qr/goB+3T8Vv20fGXxM/Zp8BeEdZ+EXiaHVv9W8P6jNcRJbRrkkq0b4wx4GK+n/+Df7/g5j8cf8Esv2lPh58Jf2fvi9pX/BQz4eeM9V8P61qvj7Q9I1bwq95Jd2EwM2zII22H5jtYfMPSvkr9oL9qn9rP9qj4xfEnxt+0f+1F4q8beMdQtE1LXdY1K7vdVvnO5iTkk9B6Cv2vw+9lyfhStOlto1ddf6nk5d4n4BxfkNSshLlu/61qfN1FFFfPH7gFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z";
const hsiaThumbTwo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQ4PGhAQGzclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIANwBQAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD0QAAEDAgQEBAQEBQIHAAAAAAEAAgMEBREGEiExQQcTIlFhcYGRoRQjQrHR8BQjYnKSwfEWY3OD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAJhEBAAICAgICAgMBAAAAAAAAAAECAxEEEiExBEFRIjJhEzKB8P/aAAwDAQACEQMRAD8A6fGAAcDgT20QXc6xxBlmfLg9BxjH0r5p+If/BQn9oj9jD4gXH7Sn7Yf7Mni34e6d4g1PUL7WvFFrqt1pl1Y3tvbXjTR2vmySIGYERgB8AV6f+1p8ev2i/2gf2jPiT+0B8Qf2cP2hf2i/Hnwz8G+N9R1LQPD3hS7v7y40+0vpLO6lt2ZiIY3ZQc5I9q/KH4Lft9/t+/8ABRz4n/sx/F7Wv2Xv2hPjPoXw+1LxNo+ieJvGniXxLqMEmmh7W6W4WFGH2fZkKTg8YxX1mYV8zw+YZQ6t92+l3b/h+J8N4owk8Nm2KlS9m5PXv/wCO+9WfV1FFFfPn7uFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX8hn/BQf9tL9qr/goB+3T8Vv20fGXxM/Zp8BeEdZ+EXiaHVv8AVvD+ozXESW0a5JKtG+MMeBir6f/AODf7/g5j8cf8Esv2lPh58Jf2fvi9pX/AAUM+HnjPVfD+tar4+0PSNW8KveSXdhMDNsyCNth+Y7WHzD0r5K/aC/ap/az/ao+MXxJ8bftH/ALUXirxt4x1C0TUtd1jUru91W+c7mJOST0HoK/Y/D72XJ+FK06W2jV11/qeTl3ifgHF+Q1KyEuW7/rWp83UUUV88fuAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/2Q==";

import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

const projects = [
  {
    title: "HSIA Terminal 03",
    image: hsiaImg,
    gallery: [hsiaImg, hsiaThumbOne, hsiaThumbTwo],
    role: "Quality Control Engineer",
    description: "Managed end-to-end QA/QC processes for one of Bangladesh's most significant aviation infrastructure projects, ensuring compliance with international standards.",
    tags: ["QA/QC", "Documentation", "Inspection", "Aviation"],
  },
  {
    title: "Dhaka MRT Project",
    image: mrtImg,
    role: "QC Engineer",
    description: "Executed quality inspections and layout demarcation for the country's first mass rapid transit system, coordinating with Japanese and local engineering teams.",
    tags: ["Quality Control", "Structural", "Transit", "Surveying"],
  },
  {
    title: "Dormakaba ES 250 Pro Easy",
    image: doorImg,
    role: "Project Engineer – Installation",
    description: "Overseeing installation of automatic sliding door systems, managing vendor coordination, site execution, and commissioning for commercial projects.",
    tags: ["Installation", "Automation", "Project Execution"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Featured Projects" subtitle="Key infrastructure and engineering projects" />

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
            <div className="h-48 overflow-hidden">
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
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-primary text-xs font-body mt-1">{p.role}</p>
              <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">
                {p.description}
              </p>
              {p.gallery && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.gallery.map((img, idx) => (
                    <div key={idx} className="h-16 rounded-lg overflow-hidden border border-white/10">
                      <img src={img} alt={`${p.title} ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
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

export default ProjectsSection;
