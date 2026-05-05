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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// 🔥 fonction pour adapter la grille selon le nombre d’images
const getGridClass = (count) => {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  return "grid-cols-2 md:grid-cols-4";
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
      title: "Installation climatiseur solaire (centres numériques)",
      images: [
        "/projects/P2/R1.jpg",
        "/projects/P2/R2.jpg",
      ],
    },
    {
      title: "Installation de pompage solaire",
      images: [
         "/projects/P3/R1.jpg",,
        "/projects/P3/R2.jpg",
      ],
    },
    {
      title: "Installation solaire – Hôpital de Likele (Kétou)",
      images: ["/projects/P4/R2.jpg"],
    },
    {
      title: "Installation solaire – Résidence Mr Dacruz",
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
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nos <span className="text-blue-600">réalisations</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Quelques projets réalisés par SER Consulting dans le domaine des énergies renouvelables
          </p>
        </motion.div>

        {/* PROJETS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              
              {/* TITRE PROJET */}
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-900">
                {project.title}
              </h3>

              {/* GRID ADAPTATIVE */}
              <div
                className={`grid ${getGridClass(
                  project.images.length
                )} gap-6`}
              >
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`project-${i}-${index}`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition">
                        Voir
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}