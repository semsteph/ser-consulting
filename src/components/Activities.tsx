"use client";

import { motion } from "framer-motion";

import {
  Settings,
  BookOpen,
  CheckCircle2,
  Activity,
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

export default function Activities() {
  const activities = [
    {
      title: "Études techniques",
      icon: Settings,
      color: "from-blue-600 to-blue-800",

      items: [
        "Élaboration d’offres techniques (appels d’offre / projets)",
        "Études d’installation solaire photovoltaïque",
        "Études de systèmes de production de biogaz",
        "Ingénierie de projets en énergies renouvelables",
        "Mini-réseaux énergétiques et solutions optimales",
        "Analyse de profil de charge et efficacité énergétique",
      ],
    },

    {
      title: "Formation & accompagnement",
      icon: BookOpen,
      color: "from-green-500 to-green-700",

      items: [
        "Formation en planification de projet",
        "Formation en reporting",
        "Encadrement en marketing",
        "Élaboration de plans d’affaires",
      ],
    },
  ];

  return (
    <section
      id="activities"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* glow backgrounds */}
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
          {/* icon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-5"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-xl">
              <Activity className="w-7 h-7" />
            </div>
          </motion.div>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4"
          >
            Domaines d’intervention
          </motion.p>

          {/* title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos{" "}
            <span className="text-blue-600">
              domaines d’activités
            </span>
          </h2>

          {/* description */}
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            SER Consulting accompagne les entreprises,
            collectivités et organisations dans la
            réalisation de projets énergétiques
            modernes et durables.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {activities.map((activity, i) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${activity.color} transition duration-500`}
                  style={{
                    opacity: 0.04,
                  }}
                />

                {/* top animated line */}
                <div
                  className={`absolute top-0 left-0 w-0 h-1 group-hover:w-full bg-gradient-to-r ${activity.color} transition-all duration-500`}
                />

                {/* HEADER */}
                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${activity.color} text-white shadow-xl`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activity.title}
                    </h3>

                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${activity.color} rounded-full mt-3`}
                    />
                  </div>
                </div>

                {/* LIST */}
                <ul className="relative z-10 space-y-4">
                  {activity.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 text-gray-700"
                    >
                      <div className="mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>

                      <span className="leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* decorative blur */}
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${activity.color} blur-3xl opacity-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}