import { Package, X, Menu, LogOut } from "lucide-react";
import { Navigation } from "../Fragments/Navbar/NavLink";
import { useState } from "react";
import UserData from "../../data/DataUsers";
import { useNavigate } from "react-router-dom";

export default function AuthLayout(props) {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    confirm("Apakah yakin ingin keluar?");
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-gray-800/70 backdrop-blur-md lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
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
          <div className="p-4 border-t border-gray-600">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 px-2 py-1 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-md">{UserData[0]?.name?.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-gray-100">{UserData[0].email}</p>
                  <p className="text-xs text-gray-100/60">{UserData[0].name}</p>
                </div>
              </div>
              <button type="submit" onClick={handleLogout} className="flex text-gray-100 w-full justify-center items-center cursor-pointer rounded-lg px-4 py-2 hover:bg-red-500">
                <LogOut className="w-4 h-4 mr-2" />
                Log Out
              </button>
            </div>
          </div>
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
