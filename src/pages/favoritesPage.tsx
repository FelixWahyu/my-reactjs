import { Trash2 } from "lucide-react";
import MainLayout from "../components/Layouts/MainLayout";

const FavoritePage = () => {
  return (
    <MainLayout>
      <div>
        <div className="max-w-2xl mx-auto py-8 px-4 md:px-2">
          <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
        </div>
        <div className="relative p-4 mb-4 flex justify-between items-center max-w-sm md:max-w-2xl mx-auto border border-gray-300 shadow-md rounded-lg">
          <div className="flex justify-between items-center gap-8">
            <div className="w-32 h-32 overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-auto object-cover" />
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-xl text-gray-800 font-semibold">Nama Produk</h2>
                <span className="text-sm text-gray-600 my-0.5">Kategori</span>
                <h2 className="text-gray-800 font-medium">Rp 120000</h2>
              </div>

              <button className="bg-blue-600 text-white font-medium cursor-pointer px-4 py-1.5 rounded-lg w-full hover:bg-blue-700">Add to Chart</button>
            </div>
          </div>
          <button className="absolute z-20 top-4 right-6 text-red-500 hover:bg-red-50 p-2 cursor-pointer rounded-lg">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default FavoritePage;
