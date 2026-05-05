"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home" // ✅ IMPORTANT POUR NAVBAR
      className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >

      {/* IMAGE AVEC ZOOM LENT */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/oser.png"
          alt="énergie solaire"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />

      {/* CONTENU */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 max-w-4xl"
      >

        {/* TITRE */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Votre partenaire en énergie durable
        </motion.h1>

        {/* TEXTE */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          SER Consulting accompagne les entreprises et ONG dans la conception,
          l’installation et l’optimisation de solutions énergétiques
          renouvelables performantes.
        </motion.p>

        {/* BOUTONS */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition shadow-lg"
          >
            Demander un devis
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Nos services
          </motion.button>
        </motion.div>
      </motion.div>

      {/* INDICATEUR SCROLL (bonus pro) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 flex flex-col items-center text-white text-sm"
      >
        <span>Scroll</span>
        <div className="w-[2px] h-8 bg-white mt-2 animate-pulse" />
      </motion.div>

    </section>
  );
}