"use client";

import { motion } from "framer-motion";
import {
  DraftingCompass,
  Cpu,
  Lightbulb,
  Settings,
} from "lucide-react";

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

// Animation item
const itemVariants = {
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

export default function Tools() {
  const tools = [
    {
      name: "AUTOCAD",
      icon: DraftingCompass,
      desc: "Conception et dessin industriel (CAO)",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "CANECO BT",
      icon: Cpu,
      desc: "Dimensionnement électrique conforme aux normes",
      color: "from-green-500 to-green-700",
    },
    {
      name: "DIALUX",
      icon: Lightbulb,
      desc: "Études et simulation d’éclairage",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "RAPSODIE / XLPRO / ELCOM",
      icon: Settings,
      desc: "Conception et chiffrage d’armoires électriques",
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
      
      {/* TITRE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-gray-900"
      >
        Nos <span className="text-blue-600">outils techniques</span>
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {tools.map((tool, i) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {/* Glow subtil */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition duration-500`}
              />

              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${tool.color} text-white shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* NOM */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tool.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {tool.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}