"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Wrench,
  Calculator,
  Megaphone,
  Briefcase,
  Users,
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

// animation cards
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
      ease: "easeOut", // ✅ CORRECTION
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
    <section
      id="team"
      className="relative py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-5"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-xl">
              <Users className="w-7 h-7" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Notre équipe
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Une équipe{" "}
            <span className="text-blue-600">
              multidisciplinaire
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Des experts qualifiés réunis pour concevoir,
            piloter et réaliser des solutions énergétiques
            performantes et durables.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {members.map((member, i) => {
            const Icon = member.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
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
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${member.color} transition duration-500`}
                  style={{
                    opacity: 0.04,
                  }}
                />

                {/* top animated line */}
                <div
                  className={`absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r ${member.color} transition-all duration-500`}
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
                    className={`p-5 rounded-2xl bg-gradient-to-br ${member.color} text-white shadow-xl`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* title */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                    {member.title}
                  </h3>

                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${member.color} mx-auto rounded-full mb-4`}
                  />

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expertise technique, accompagnement
                    stratégique et solutions adaptées
                    aux besoins énergétiques modernes.
                  </p>
                </div>

                {/* decorative blur */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${member.color} blur-3xl opacity-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}