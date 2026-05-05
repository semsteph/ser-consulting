"use client";

import {
  Settings,
  Sun,
  Flame,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

// container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// item animation
const item = {
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

// 🔥 animation texte mot par mot
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// composant texte animé
function AnimatedText({ text }: { text: string }) {
  return (
    <motion.span variants={textContainer} initial="hidden" animate="show">
      {text.split(" ").map((wordText, index) => (
        <motion.span
          key={index}
          variants={word}
          className="inline-block mr-1"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Services() {
  const services = [
    {
      title: "Études techniques",
      description:
        "Analyse, dimensionnement et conception de solutions énergétiques adaptées à vos besoins.",
      icon: Settings,
    },
    {
      title: "Solaire photovoltaïque",
      description:
        "Installation et optimisation de systèmes solaires pour une énergie propre et durable.",
      icon: Sun,
    },
    {
      title: "Production de biogaz",
      description:
        "Mise en place de solutions de cuisson et d’énergie à base de biogaz.",
      icon: Flame,
    },
    {
      title: "Formation & accompagnement",
      description:
        "Renforcement des capacités en planification, marketing et gestion de projets énergétiques.",
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 overflow-hidden"
    >

      {/* 🔷 IMAGE + TEXTE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        
        {/* IMAGE */}
        <motion.div
          variants={item}
          className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="/images.png"
            alt="Énergie renouvelable"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>

        {/* TEXTE */}
        <motion.div variants={item} className="space-y-4">

          <p className="text-green-600 font-semibold uppercase tracking-wide">
            <AnimatedText text="Nos services" />
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            <AnimatedText text="Des solutions énergétiques durables" />
          </h2>

          <p className="text-gray-600">
            <AnimatedText text="Nous accompagnons les entreprises et particuliers dans la conception et la mise en œuvre de solutions énergétiques modernes, efficaces et durables." />
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md"
          >
            Demander un devis
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🔷 CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-600 transition duration-300">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
}