"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  Building2,
  ShieldCheck,
  Zap,
} from "lucide-react";

// animations
const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

export default function Suppliers() {
  const suppliers = [
    {
      name: "NOLLET / FRANCO BELGE / REXEL",

      desc: "Matériels électriques",

      logo: "/suppliers/nollet.png",

      icon: Zap,
    },

    {
      name: "GDV / FRANCOFA",

      desc: "Contrôle d’accès",

      logo: "/suppliers/gdv.png",

      icon: ShieldCheck,
    },

    {
      name: "SCHNEIDER ELECTRIC",

      desc: "Formation / Habilitation",

      logo: "/suppliers/schneider.png",

      icon: Building2,
    },

    {
      name:
        "FERMAX / URMET / COGELEC / NORALSY",

      desc:
        "Interphonie & contrôle d’accès",

      logo: "/suppliers/fermax.png",

      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="suppliers"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* background glow */}
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
          }}

          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Partenaires techniques
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              fournisseurs
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Nous collaborons avec des partenaires
            reconnus afin de garantir la qualité,
            la fiabilité et la performance de nos
            solutions énergétiques et techniques.
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
          {suppliers.map((sup, i) => {
            const Icon = sup.icon;

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
                }}

                className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-green-500/10 transition duration-500" />

                {/* top line */}
                <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500" />

                {/* LOGO */}
                <div className="relative z-10 flex justify-center mb-6">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}

                    transition={{
                      duration: 0.3,
                    }}

                    className="relative w-28 h-28 rounded-2xl bg-gray-50 border border-gray-100 shadow-md p-4"
                  >
                    <Image
                      src={sup.logo}
                      alt={sup.name}
                      fill
                      sizes="112px"
                      className="object-contain p-3"
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 text-center">

                  {/* icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* name */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-4">
                    {sup.name}
                  </h3>

                  {/* separator */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-4" />

                  {/* desc */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {sup.desc}
                  </p>
                </div>

                {/* decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/5 to-green-500/10 blur-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}