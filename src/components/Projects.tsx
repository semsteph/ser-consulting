"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// animations
const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.6,
    },
  },
};

// 🔥 grille adaptative
const getGridClass = (count: number) => {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";

  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
};

export default function Projects() {
  const projects = [
    {
      title:
        "Alimentation d’afficheur solaire PV – Mairies (Ouinhi, Zogbodomey, Zè, Zangnanado, Pobè)",

      images: [
        "/projects/P1/R1.jpg",
        "/projects/P1/R2.jpg",
        "/projects/P1/R3.jpg",
        "/projects/P1/R4.jpg",
      ],
    },

    {
      title:
        "Installation climatiseur solaire (centres numériques)",

      images: [
        "/projects/P2/R1.jpg",
        "/projects/P2/R2.jpg",
      ],
    },

    {
      title: "Installation de pompage solaire",

      images: [
        "/projects/P3/R1.jpg",
        "/projects/P3/R2.jpg",
      ],
    },

    {
      title:
        "Installation solaire – Hôpital de Likele (Kétou)",

      images: ["/projects/P4/R2.jpg"],
    },

    {
      title:
        "Installation solaire – Résidence Mr Dacruz",

      images: [
        "/projects/P5/R1.jpg",
        "/projects/P5/R2.jpg",
      ],
    },

    {
      title: "Vente de couveuses solaires",

      images: [
        "/projects/P6/R1.jpg",
        "/projects/P6/R2.jpg",
        "/projects/P6/R3.jpg",
        "/projects/P6/R4.jpg",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="text-blue-600 uppercase tracking-[4px] font-semibold mb-4"
          >
            Réalisations
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              réalisations
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Découvrez quelques projets réalisés par
            SER Consulting dans le domaine des
            énergies renouvelables et des solutions
            énergétiques durables.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 hover:opacity-100 transition duration-500" />

              {/* top line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-green-500" />

              <div className="relative z-10">

                {/* TITLE */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-snug"
                >
                  {project.title}
                </motion.h3>

                {/* GRID */}
                <div
                  className={`grid ${getGridClass(
                    project.images.length
                  )} gap-6`}
                >
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}

                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}

                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}

                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}

                      viewport={{ once: true }}

                      whileHover={{
                        y: -6,
                      }}

                      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl"
                    >
                      {/* IMAGE */}
                      <Image
                        src={img}
                        alt={`project-${i}-${index}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-start p-5">
                        <div>
                          <p className="text-white font-semibold text-lg">
                            Projet SER Consulting
                          </p>

                          <p className="text-gray-200 text-sm">
                            Énergies renouvelables
                          </p>
                        </div>
                      </div>

                      {/* shine */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transform translate-x-[500px] transition-all duration-1000" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}