"use client";

import { motion } from "framer-motion";

import {
  DraftingCompass,
  Cpu,
  Lightbulb,
  Settings,
  Wrench,
} from "lucide-react";

// animation container
const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

// animation item
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
      
    },
  },
};

export default function Tools() {
  const tools = [
    {
      name: "AUTOCAD",
      icon: DraftingCompass,
      desc: "Conception et dessin industriel assistés par ordinateur (CAO).",
      color: "from-blue-600 to-blue-800",
    },

    {
      name: "CANECO BT",
      icon: Cpu,
      desc: "Dimensionnement électrique conforme aux normes techniques.",
      color: "from-green-500 to-green-700",
    },

    {
      name: "DIALUX",
      icon: Lightbulb,
      desc: "Études et simulations professionnelles d’éclairage.",
      color: "from-blue-500 to-green-500",
    },

    {
      name: "RAPSODIE / XLPRO / ELCOM",
      icon: Settings,
      desc: "Conception, configuration et chiffrage d’armoires électriques.",
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section
      id="tools"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* glow backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 blur-3xl rounded-full" />

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
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* icon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-5"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-xl">
              <Wrench className="w-7 h-7" />
            </div>
          </motion.div>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Solutions & logiciels
          </motion.p>

          {/* title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              outils techniques
            </span>
          </h2>

          {/* description */}
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Nous utilisons des outils professionnels
            performants pour garantir la précision,
            la fiabilité et l’efficacité de nos études
            et réalisations techniques.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${tool.color} transition duration-500`}
                  style={{
                    opacity: 0.04,
                  }}
                />

                {/* top animated line */}
                <div
                  className={`absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r ${tool.color} transition-all duration-500`}
                />

                {/* icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-xl`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* content */}
                <div className="relative z-10 text-center">
                  {/* title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                    {tool.name}
                  </h3>

                  {/* separator */}
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${tool.color} mx-auto rounded-full mb-4`}
                  />

                  {/* description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                {/* decorative blur */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${tool.color} blur-3xl opacity-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}