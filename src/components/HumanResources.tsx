"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Wrench,
  Calculator,
  Megaphone,
  Briefcase,
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
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
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

export default function HumanResources() {
  const team = [
    { name: "Ingénieur en énergies renouvelables", icon: Cpu },
    { name: "Technicien bureau d’études", icon: Wrench },
    { name: "Spécialiste métreur / chiffreur", icon: Calculator },
    { name: "Spécialiste marketing", icon: Megaphone },
    { name: "Spécialiste en plan d’affaire", icon: Briefcase },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
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
            Nos <span className="text-blue-600">moyens humains</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un bureau d’études structuré, qualifié et orienté performance pour la réussite de vos projets énergétiques
          </p>
        </motion.div>

        {/* SECTION PRINCIPALE */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT - DESCRIPTION */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <div className="p-6 bg-white rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Bureau d’études
              </h3>

              <p>
                Notre bureau d’études réalise des devis estimatifs et quantitatifs,
                des études techniques à tous les stades des projets ainsi que la
                conception des plans et le dimensionnement énergétique.
              </p>

              <p className="mt-4">
                Il assure également une veille technologique permanente et apporte
                une assistance technique aux conducteurs de travaux et à la maîtrise d’œuvre.
              </p>

              <p className="mt-4">
                Selon les besoins, nos ingénieurs et techniciens peuvent être déployés
                directement sur site pour garantir un suivi optimal.
              </p>

              <p className="mt-4">
                Nos équipes sont qualifiées et habilitées, notamment dans les domaines
                électriques et réglementaires.
              </p>
            </div>

            {/* BLOC FORMATION */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Accompagnement & Formation
              </h3>

              <p>
                Nous accompagnons les entreprises à travers des diagnostics techniques
                afin d’identifier les axes d’amélioration et proposer des solutions adaptées.
              </p>

              <p className="mt-4">
                Nous formons également les entreprises en développement durable et en
                gestion de projets énergétiques pour renforcer leurs capacités.
              </p>
            </div>
          </motion.div>

          {/* RIGHT - TEAM */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {team.map((member, i) => {
              const Icon = member.icon;

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition text-center"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500" />

                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* TEXT */}
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                    {member.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}