import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Toko<span className="text-blue-500">Baju</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Destinasi fashion pilihan untuk gaya modern, kasual, dan elegan. Kami berkomitmen memberikan kualitas bahan terbaik dengan kenyamanan maksimal untuk setiap aktivitas Anda.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/katalog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Wishlist Favorit
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Bantuan</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Panduan Ukuran</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Kebijakan Garansi & Retur</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Informasi Pengiriman</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">FAQ & Bantuan</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Kontak Kami</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Jl. Sudirman No. 128, Jakarta Pusat, 10220</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+62 (021) 8899-7722</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>halo@tokobaju.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} TokoBaju. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-500">
            <span>Dibuat </span>
            <span>untuk pecinta fashion Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
