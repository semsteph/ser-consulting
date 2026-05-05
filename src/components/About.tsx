"use client";

import { motion } from "framer-motion";
import { Leaf, Lightbulb, Target, Users } from "lucide-react";

// Animation container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Animation élément
const itemVariants = {
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
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function About() {
  const values = [
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Durabilité",
      icon: Leaf,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Performance",
      icon: Target,
      color: "from-blue-500 to-green-500",
    },
    {
      title: "Proximité",
      icon: Users,
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section
      id="about" // ✅ AJOUT IMPORTANT
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            À propos de{" "}
            <span className="text-blue-600">SER Consulting</span>
          </h2>
        </motion.div>

        {/* CONTENU PRINCIPAL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* TEXTE */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fondé en Janvier 2022, SER Consulting accompagne les entreprises et ONG
              dans la conception, la planification et l’installation de systèmes
              électriques et d’énergies renouvelables, notamment le solaire photovoltaïque.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Grâce à une équipe d’ingénieurs qualifiés et un personnel expérimenté,
              nous proposons des solutions personnalisées adaptées aux besoins et aux
              budgets de nos clients.
            </p>

            {/* PHILOSOPHIE */}
            <div className="mt-8 p-6 rounded-xl bg-gray-100 border-l-4 border-blue-600">
              <h3 className="font-semibold mb-2 text-gray-900">
                Notre philosophie
              </h3>
              <p className="italic text-gray-600">
                "Réaliser des prestations de qualité dans une recherche constante de la satisfaction du client"
              </p>
            </div>
          </motion.div>

          {/* VALEURS */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, i) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${value.color} text-white`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-center font-semibold text-gray-900">
                    {value.title}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}