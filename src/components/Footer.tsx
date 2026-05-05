import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LOGO / DESCRIPTION */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            SER Consulting
          </h2>
          <p className="text-sm text-gray-400">
            Votre partenaire en énergie durable. Nous accompagnons
            entreprises et ONG dans leurs projets énergétiques.
          </p>
        </div>

        {/* LIENS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Accueil</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">À propos</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} /> +229 67 34 88 68
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} /> contact@serconsulting.bj
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} /> Abomey-Calavi
            </div>
          </div>
        </div>
      </div>

      {/* BAS */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} SER Consulting — Tous droits réservés
      </div>
    </footer>
  );
}