import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="SER Consulting" width={50} height={50} />
        <span className="font-bold text-xl text-blue-700">
          SER Consulting
        </span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Bouton */}
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Devis
      </button>
    </nav>
  );
}