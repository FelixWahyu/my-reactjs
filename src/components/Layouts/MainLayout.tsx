import { Menu, X, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children, cartCount = 0 }) => {
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
              <div className="relative mr-4 md:mr-8">
                <button className="text-gray-800 hover:text-blue-600 cursor-pointer p-1">
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center border-2 border-white">{cartCount}</span>}
                </button>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Link to={"/login"} className="px-4 py-1 border border-blue-600 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700">
                  Login
                </Link>
                <Link to={"/register"} className="px-4 py-1 border border-blue-600 text-blue-600 font-medium rounded-lg hover:text-white hover:bg-blue-700">
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isMobileOpen && (
          <div className="md:hidden bg-white border-y border-gray-300 animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                Beranda
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                Tentang Kami
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                Katalog Produk
              </a>
              <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link to={"/login"} className="block text-center w-full px-4 py-1 text-white font-medium border border-blue-600 rounded-lg bg-blue-600 hover:bg-blue-700">
                  Login
                </Link>
                <Link to={"/register"} className="block text-center w-full px-4 py-1 text-blue-600 border border-blue-600 font-medium rounded-lg hover:text-white hover:bg-blue-700">
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
