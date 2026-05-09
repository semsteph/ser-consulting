"use client";

import { ShieldCheck, Users, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";

// Animation container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Animation des cartes
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
      
    },
  },
};

// Animation texte
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut", // ✅ CORRECTION
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
    <section
      id="why-us"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-center mb-20"
        >
          <motion.p
            variants={textVariants}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Pourquoi nous choisir
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Pourquoi choisir{" "}
            <span className="text-blue-600">
              SER Consulting
            </span>{" "}
            ?
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg leading-relaxed"
          >
            Nous mettons notre expertise et notre passion au service
            de solutions énergétiques fiables, durables et adaptées
            à chaque besoin.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-green-500/10 transition duration-500" />

                {/* top border animation */}
                <div
                  className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                />

                {/* ICON */}
                <div className="relative z-10 flex justify-center mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* TITLE */}
                <motion.h3
                  variants={textVariants}
                  className="relative z-10 text-xl font-bold mb-4 text-gray-900 text-center"
                >
                  {item.title}
                </motion.h3>

                {/* DESCRIPTION */}
                <motion.p
                  variants={textVariants}
                  className="relative z-10 text-gray-600 text-sm leading-relaxed text-center"
                >
                  {item.description}
                </motion.p>

                {/* decoration */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/5 to-green-500/10 blur-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}