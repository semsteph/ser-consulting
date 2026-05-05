"use client";

import { ShieldCheck, Users, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";

// Animation container (plus lente + élégante)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Animation des cartes (cinématique)
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1], // easing premium
    },
  },
};

export default function WhyUs() {
  const items = [
    {
      title: "Qualité & Expertise",
      description:
        "Des ingénieurs qualifiés et une maîtrise technique dans les systèmes énergétiques.",
      icon: Award,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Engagement",
      description:
        "Un accompagnement sérieux et personnalisé pour chaque projet.",
      icon: ShieldCheck,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Confiance",
      description:
        "Une relation durable basée sur la transparence et la satisfaction client.",
      icon: Handshake,
      color: "from-blue-500 to-green-500",
    },
    {
      title: "Proximité",
      description:
        "Une équipe disponible et à l’écoute pour répondre à vos besoins.",
      icon: Users,
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100 text-center">
      
      {/* TITRE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-gray-900"
      >
        Pourquoi choisir{" "}
        <span className="text-blue-600">SER Consulting</span> ?
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="group relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition"
            >
              {/* Glow subtil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none" />

              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${item.color} text-white shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}