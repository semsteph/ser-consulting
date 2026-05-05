"use client";

import { motion } from "framer-motion";
import { Settings, Sun, Flame, BarChart3, Zap, BookOpen } from "lucide-react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
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
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-100"
    >
      {/* TITRE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Nos <span className="text-blue-600">domaines d’activités</span>
        </h2>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {activities.map((activity, i) => {
          const Icon = activity.icon;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border"
            >
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-full bg-gradient-to-br ${activity.color} text-white`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activity.title}
                </h3>
              </div>

              {/* LIST */}
              <ul className="space-y-3 text-gray-600 text-sm">
                {activity.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}