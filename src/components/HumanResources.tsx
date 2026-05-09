"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Wrench,
  Calculator,
  Megaphone,
  Briefcase,
  CheckCircle2,
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
    y: 50,
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

export default function HumanResources() {
  const team = [
    {
      name: "Ingénieur en énergies renouvelables",
      icon: Cpu,
    },

    {
      name: "Technicien bureau d’études",
      icon: Wrench,
    },

    {
      name: "Spécialiste métreur / chiffreur",
      icon: Calculator,
    },

    {
      name: "Spécialiste marketing",
      icon: Megaphone,
    },

    {
      name: "Spécialiste en plan d’affaire",
      icon: Briefcase,
    },
  ];

  const missions = [
    "Études techniques et dimensionnement énergétique",

    "Conception des plans et intégration des systèmes",

    "Veille technologique et assistance technique",

    "Diagnostics et accompagnement des entreprises",

    "Formation en développement durable et gestion énergétique",
  ];

  return (
    <section
      id="human-resources"
      className="relative py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* glow backgrounds */}
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
            Organisation & expertise
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              moyens humains
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Une équipe structurée, expérimentée et engagée
            pour garantir la réussite de vos projets
            énergétiques et de développement durable.
          </p>
        </motion.div>

        {/* SECTION PRINCIPALE */}
        <div className="grid xl:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* bureau d'etudes */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}

              transition={{
                duration: 0.3,
              }}

              className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Bureau d’études
                </h3>

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Notre bureau d’études réalise les devis
                    estimatifs et quantitatifs, les études
                    techniques à tous les stades des projets
                    ainsi que le dimensionnement énergétique
                    et la conception des plans techniques.
                  </p>

                  <p>
                    Il assure également une veille technologique
                    permanente et apporte une assistance technique
                    aux conducteurs de travaux et à la maîtrise
                    d’œuvre désignée par le client.
                  </p>

                  <p>
                    Selon les besoins, nos ingénieurs et techniciens
                    peuvent être déployés directement sur site afin
                    d’assurer un suivi optimal et une meilleure
                    exécution des projets.
                  </p>

                  <p>
                    Nos équipes sont qualifiées et habilitées
                    dans les domaines électriques, réglementaires
                    et environnementaux.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* missions */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}

              transition={{
                duration: 0.3,
              }}

              className="relative bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl border border-blue-100 overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Accompagnement & Formation
                </h3>

                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <motion.div
                      key={index}

                      initial={{
                        opacity: 0,
                        x: -20,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}

                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />

                      <p className="text-gray-700 leading-relaxed">
                        {mission}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT TEAM */}
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
                    y: -8,
                    scale: 1.03,
                  }}

                  transition={{
                    duration: 0.3,
                  }}

                  className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden"
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-green-500/10 transition duration-500" />

                  {/* top line */}
                  <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500" />

                  {/* icon */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}

                      transition={{
                        duration: 0.3,
                      }}

                      className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-lg"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* text */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {member.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-3">
                      Expertise & accompagnement professionnel
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}