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
    },
  },
};

// animation texte mot par mot
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
function AnimatedText({
  text,
}: {
  text: string;
}) {
  return (
    <motion.span
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
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
      className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 blur-3xl rounded-full" />

      {/* IMAGE + TEXTE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* IMAGE */}
        <motion.div
          variants={item}

          whileHover={{
            scale: 1.02,
          }}

          transition={{
            duration: 0.4,
          }}

          className="relative w-full h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-green-500/10 z-10" />

          <img
            src="/images.png"
            alt="Énergie renouvelable"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500 z-20" />
        </motion.div>

        {/* TEXTE */}
        <motion.div
          variants={item}
          className="space-y-8"
        >
          {/* subtitle */}
          <motion.p
            variants={item}
            className="text-green-600 font-semibold uppercase tracking-[4px]"
          >
            <AnimatedText text="Nos services" />
          </motion.p>

          {/* title */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            <AnimatedText text="Des solutions énergétiques modernes et durables" />
          </motion.h2>

          {/* text */}
          <motion.p
            variants={item}
            className="text-gray-600 text-lg leading-relaxed"
          >
            <AnimatedText text="Nous accompagnons les entreprises, ONG et particuliers dans la conception et la mise en œuvre de solutions énergétiques performantes, fiables et adaptées à leurs besoins." />
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-2"
          >
            {/* button 1 */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.2,
              }}

              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Demander un devis
            </motion.button>

            {/* button 2 */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.2,
              }}

              className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-7 py-3 rounded-full font-semibold text-gray-700 transition"
            >
              Découvrir nos services
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 mt-28"
      >
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}

                variants={item}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-green-500/10 transition duration-500" />

                {/* top line */}
                <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500" />

                {/* icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="bg-green-100 p-5 rounded-2xl group-hover:bg-green-600 transition duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                  </div>
                </div>

                {/* title */}
                <h3 className="relative z-10 text-xl font-bold mb-4 text-gray-900 text-center">
                  {service.title}
                </h3>

                {/* separator */}
                <div className="relative z-10 w-14 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-5" />

                {/* description */}
                <p className="relative z-10 text-gray-600 text-sm text-center leading-relaxed">
                  {service.description}
                </p>

                {/* decorative blur */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/5 to-green-500/10 blur-2xl" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}