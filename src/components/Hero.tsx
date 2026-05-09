"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

// animation container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// animation items
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
      duration: 0.9,
      ease: "easeOut", // ✅ CORRECTION
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* IMAGE BACKGROUND */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/oser.png"
          alt="SER Consulting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/50" />

      {/* glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm md:text-base text-white/90 font-medium">
            Solutions énergétiques durables & innovantes
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
        >
          Votre partenaire en{" "}
          <span className="text-green-400">
            énergie durable
          </span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          variants={item}
          className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-200 leading-relaxed mb-10"
        >
          SER Consulting accompagne les entreprises,
          ONG et particuliers dans la conception,
          l’installation et l’optimisation de solutions
          énergétiques renouvelables performantes.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          {/* devis */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition"
            >
              Demander un devis

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>

          {/* services */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            {
              number: "2022",
              label: "Création",
            },
            {
              number: "100%",
              label: "Énergie durable",
            },
            {
              number: "24/7",
              label: "Accompagnement",
            },
            {
              number: "Pro",
              label: "Expertise technique",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-20"
      >
        <span className="text-sm tracking-[3px] uppercase text-white/80">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-2"
        >
          <ChevronDown className="w-6 h-6 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}