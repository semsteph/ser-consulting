"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  User,
  Building2,
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

export default function References() {
  const references = [
    {
      name: "HBC Services",
      logo: "/logos/hbc.png",
      contact: "Louise DOSSOU",
      phone: "+229 97 64 08 29",
      email: "info@hbc-services.bj",
    },

    {
      name: "CAP ENERGYS",
      logo: "/logos/cap.png",
      contact: "Edgar ZINZINDOHOUÉ",
      phone: "+229 56 45 52 24 / +33 6 50 18 5218",
      email: "edgar.landry@cap-energys.com",
    },

    {
      name: "Africa Green Power",
      logo: "/logos/africa.png",
      contact: "SATIKOUA SANTIEKOU",
      phone: "+229 96 36 82 33",
      email: "africagreenpower599@gmail.com",
    },
  ];

  return (
    <section
      id="references"
      className="relative py-28 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-50 overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* TITRE */}
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Références professionnelles
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              références
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Des partenaires et collaborations qui témoignent
            de notre expertise et de la confiance accordée
            à SER Consulting.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {references.map((ref, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
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
                  className="relative w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 shadow-md p-4"
                >
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    fill
                    sizes="96px"
                    className="object-contain p-3"
                  />
                </motion.div>
              </div>

              {/* COMPANY */}
              <div className="relative z-10 text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-blue-600" />

                  <h3 className="text-2xl font-bold text-gray-900">
                    {ref.name}
                  </h3>
                </div>

                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
              </div>

              {/* INFOS */}
              <div className="relative z-10 space-y-5">
                {/* contact */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-blue-100">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Contact
                    </p>

                    <p className="font-medium text-gray-800 leading-snug">
                      {ref.contact}
                    </p>
                  </div>
                </motion.div>

                {/* phone */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-green-100">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Téléphone
                    </p>

                    <p className="font-medium text-gray-800 leading-snug">
                      {ref.phone}
                    </p>
                  </div>
                </motion.div>

                {/* email */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-red-100">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 mb-1">
                      Email
                    </p>

                    <p className="font-medium text-gray-800 break-words">
                      {ref.email}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/5 to-green-500/10 blur-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}