"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

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
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ FIX IMPORTANT

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset(); // ✅ fonctionne maintenant
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        
        {/* LEFT */}
        <motion.div variants={item}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Contactez-nous
          </h2>

          <p className="text-gray-600 mb-8">
            Besoin d’un accompagnement pour vos projets énergétiques ?
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
              <Phone className="text-green-600" />
              <span>+229 67 34 88 68</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
              <Mail className="text-blue-600" />
              <span>contact@serconsulting.bj</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
              <MapPin className="text-red-500" />
              <span>Abomey-Calavi, Quartier AWAKE</span>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Nom complet"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && (
            <p className="text-green-600 text-center">
              ✅ Message envoyé !
            </p>
          )}

          {/* WHATSAPP */}
          <a
            href="https://wa.me/22967348868"
            target="_blank"
            className="block text-center mt-4 bg-green-500 text-white py-3 rounded-lg"
          >
            💬 WhatsApp
          </a>
        </motion.form>
      </motion.div>
    </section>
  );
}