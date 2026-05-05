import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SER Consulting",
  description:
    "Votre partenaire en énergie verte et solutions techniques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer ajouté */}
        <Footer />
        
      </body>
    </html>
  );
}