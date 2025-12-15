import { Links } from "../../Elements/Link";
import { Users, LayoutDashboard, FolderOpen, Package, X, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

const menuLink = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/user", icon: Users, label: "Users" },
  { path: "/category", icon: FolderOpen, label: "Category" },
  { path: "/product", icon: Package, label: "Product" },
  { path: "/orders", icon: ShoppingCart, label: "Orders" },
];

export const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuLink.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Links key={item.path} to={item.path} classname={"flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 " + (isActive ? "bg-indigo-600 text-white" : "text-gray-100 hover:text-gray-800 hover:bg-indigo-100")}>
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Links>
          );
        })}
      </nav>
    </>
  );
};
