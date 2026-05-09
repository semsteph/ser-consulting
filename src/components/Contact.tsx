"use client";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

// animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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
      
    },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

      {/* animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={item}
          className="space-y-8"
        >
          {/* title */}
          <div>
            <motion.p
              variants={item}
              className="text-blue-600 uppercase tracking-[4px] font-semibold mb-4"
            >
              Contact
            </motion.p>

            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Parlons de votre{" "}
              <span className="text-blue-600">
                projet énergétique
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-600 mt-6 text-lg leading-relaxed"
            >
              Notre équipe vous accompagne dans la
              conception et la réalisation de solutions
              énergétiques fiables, modernes et durables.
            </motion.p>
          </div>

          {/* contact cards */}
          <motion.div
            variants={container}
            className="space-y-5"
          >
            {/* phone */}
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.03,
                x: 6,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100"
            >
              <div className="p-4 rounded-2xl bg-green-100 group-hover:bg-green-600 transition duration-300">
                <Phone className="text-green-600 group-hover:text-white transition" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Téléphone
                </p>

                <p className="text-gray-600">
                  +229 67 34 88 68
                </p>
              </div>
            </motion.div>

            {/* email */}
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.03,
                x: 6,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100"
            >
              <div className="p-4 rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition duration-300">
                <Mail className="text-blue-600 group-hover:text-white transition" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Email
                </p>

                <p className="text-gray-600">
                  contact@serconsulting.bj
                </p>
              </div>
            </motion.div>

            {/* location */}
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.03,
                x: 6,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100"
            >
              <div className="p-4 rounded-2xl bg-red-100 group-hover:bg-red-500 transition duration-300">
                <MapPin className="text-red-500 group-hover:text-white transition" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Adresse
                </p>

                <p className="text-gray-600">
                  Abomey-Calavi, Quartier AWAKE
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="relative bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/10 pointer-events-none" />

          {/* title */}
          <motion.div
            variants={item}
            className="relative z-10 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Envoyez-nous un message
            </h3>

            <p className="text-gray-600">
              Nous vous répondrons dans les plus
              brefs délais.
            </p>
          </motion.div>

          {/* inputs */}
          <div className="relative z-10 space-y-5">
            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              name="name"
              type="text"
              placeholder="Nom complet"
              required
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              name="email"
              type="email"
              placeholder="Adresse email"
              required
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <motion.textarea
              whileFocus={{
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              name="message"
              placeholder="Votre message..."
              required
              rows={5}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />

            {/* submit */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold shadow-lg transition disabled:opacity-70"
            >
              <Send className="w-5 h-5" />

              {loading
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </motion.button>

            {/* success */}
            {success && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-center text-green-600 font-medium"
              >
                ✅ Message envoyé avec succès !
              </motion.div>
            )}

            {/* whatsapp */}
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              href="https://wa.me/22967348868"
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}