import { Package, X, Menu } from "lucide-react";
import { Navigation } from "../Fragments/Navbar/NavLink";
import { useState } from "react";

export default function AuthLayout(props) {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <aside className={"fixed h-full top-0 left-0 w-64 z-50 bg-gray-800 border-x border-gray-400 transform transition-transform duration-300 lg:translate-x-0 " + (sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <Package className="w-5 h-5 text-white"></Package>
              </div>
              <span className="text-lg font-semibold text-gray-100">Admin Panel</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden cursor-pointer text-gray-100 hover:text-blue-500">
              <X className="w-5 h-5"></X>
            </button>
          </div>

          <Navigation></Navigation>
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 h-16 backdrop-blur-sm border-b border-gray-400 shadow-sm">
          <div className="flex items-center justify-between h-full px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden cursor-pointer rounded-lg p-2 hover:bg-gray-100">
              <Menu className="w-5 h-5 "></Menu>
            </button>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
