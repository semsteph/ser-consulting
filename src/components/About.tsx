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
      ease: "easeOut", // ✅ CORRECTION
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
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold uppercase tracking-[3px] mb-4"
          >
            Qui sommes-nous ?
          </motion.p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            À propos de{" "}
            <span className="text-blue-600">SER Consulting</span>
          </h2>
        </motion.div>

        {/* CONTENU */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >

          {/* TEXTE */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed text-lg"
            >
              Fondé en Janvier 2022, SER Consulting accompagne les entreprises
              et ONG dans la conception, la planification et l’installation de
              systèmes électriques et d’énergies renouvelables, notamment le
              solaire photovoltaïque.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed text-lg"
            >
              Grâce à une équipe d’ingénieurs qualifiés et un personnel
              expérimenté, nous proposons des solutions personnalisées adaptées
              aux besoins et aux budgets de nos clients.
            </motion.p>

            {/* PHILOSOPHIE */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative mt-8 p-6 rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 pointer-events-none" />

              <h3 className="font-bold mb-3 text-gray-900 text-lg relative z-10">
                Notre philosophie
              </h3>

              <p className="italic text-gray-600 relative z-10 leading-relaxed">
                "Réaliser des prestations de qualité dans une recherche constante
                de la satisfaction du client"
              </p>
            </motion.div>
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
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="group relative bg-white p-7 rounded-2xl shadow-sm hover:shadow-2xl transition border border-gray-100 overflow-hidden"
                >
                  {/* glow hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-green-500/5 transition duration-500" />

                  {/* icon */}
                  <div className="flex justify-center mb-5 relative z-10">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-br ${value.color} text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* title */}
                  <h4 className="text-center font-semibold text-gray-900 text-lg relative z-10">
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