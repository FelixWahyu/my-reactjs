import { Menu, X, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      <nav className="sticky z-40 top-0 bg-white/80 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex gap-2">
              <div className="flex md:hidden items-center">
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-gray-800 border border-gray-200 rounded-lg p-2 cursor-pointer hover:bg-blue-600 hover:text-white focus:outline-none">
                  {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800 tracking-tight">
                  Toko<span className="text-blue-600">Baju</span>
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-500">
                Beranda
              </a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-500">
                Tentang Kami
              </a>
              <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-500">
                Katalog Produk
              </a>
            </div>
            <div className="flex items-center">
              <button className="text-gray-800 hover:text-blue-600 cursor-pointer md:mr-8">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <div className="hidden md:flex items-center gap-3">
                <Link to={"/login"} className="px-4 py-1 border-none bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700">
                  Login
                </Link>
                <Link to={"/register"} className="px-4 py-1 border border-blue-600 text-blue-600 font-medium rounded-lg hover:text-white hover:bg-blue-700">
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden">Mobile</div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
