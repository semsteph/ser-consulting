"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, User } from "lucide-react";

// animations
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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
      ease: [0.25, 0.8, 0.25, 1],
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
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nos <span className="text-blue-600">références</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {references.map((ref, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {/* LOGO */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* NOM */}
              <h3 className="text-center font-semibold text-gray-900 mb-4">
                {ref.name}
              </h3>

              {/* INFOS */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {ref.contact}
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  {ref.phone}
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {ref.email}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}