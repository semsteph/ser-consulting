"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// animations
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function Suppliers() {
  const suppliers = [
    {
      name: "NOLLET / FRANCO BELGE / REXEL",
      desc: "Matériels électriques",
      logo: "/suppliers/nollet.png",
    },
    {
      name: "GDV / FRANCOFA",
      desc: "Contrôle d’accès",
      logo: "/suppliers/gdv.png",
    },
    {
      name: "SCHNEIDER ELECTRIC",
      desc: "Formation / Habilitation",
      logo: "/suppliers/schneider.png",
    },
    {
      name: "FERMAX / URMET / COGELEC / NORALSY",
      desc: "Interphonie & contrôle d’accès",
      logo: "/suppliers/fermax.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nos <span className="text-blue-600">fournisseurs</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Nous sélectionnons des partenaires fiables garantissant la qualité et la performance
            de nos solutions techniques.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {suppliers.map((sup, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition text-center"
            >
              {/* LOGO */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={sup.logo}
                    alt={sup.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* NOM */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {sup.name}
              </h3>

              {/* DESC */}
              <p className="text-xs text-gray-600">
                {sup.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}