"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Wrench,
  Calculator,
  Megaphone,
  Briefcase,
} from "lucide-react";

// Animation container (stagger fluide)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Animation carte
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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

export default function Team() {
  const members = [
    {
      title: "Ingénieur en énergies renouvelables",
      icon: Cpu,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Technicien bureau d’études",
      icon: Wrench,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Spécialiste métreur / chiffreur",
      icon: Calculator,
      color: "from-blue-500 to-green-500",
    },
    {
      title: "Spécialiste marketing",
      icon: Megaphone,
      color: "from-green-400 to-blue-500",
    },
    {
      title: "Spécialiste en plan d’affaire",
      icon: Briefcase,
      color: "from-blue-700 to-green-600",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
      
      {/* TITRE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-gray-900"
      >
        Notre <span className="text-blue-600">équipe</span>
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {members.map((member, i) => {
          const Icon = member.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {/* Glow subtil */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition duration-500`}
              />

              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${member.color} text-white shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* TEXTE */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {member.title}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}