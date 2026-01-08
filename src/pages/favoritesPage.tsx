import React from "react";
import { Trash2, HeartOff } from "lucide-react";
import MainLayout from "../components/Layouts/MainLayout";
import { useWishlist } from "../context/WishlistContext";

const FavoritePage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-10 px-4 min-h-screen">
        <div className="border-b border-gray-400 pb-4 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">My Wishlist</h2>
          <p className="text-gray-500 mt-1">{wishlist.length} barang disimpan</p>
        </div>
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <HeartOff className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">Wishlist Kosong</h3>
            <p className="text-gray-500">Belum ada barang yang kamu sukai.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div key={item.id} className="md:flex items-center bg-white border border-gray-200 shadow-sm rounded-xl p-4 gap-6">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 w-full text-left">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1 mb-2">{item.category}</p>
                    <h3 className="text-blue-600 font-semibold text-lg">Rp {item.price.toLocaleString("id-ID")}</h3>
                  </div>
                </div>

                <div className="w-full md:w-auto flex flex-row md:flex-col gap-3 mt-4">
                  <button className="bg-gray-900 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 text-sm cursor-pointer">+ Keranjang</button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center justify-center gap-2 cursor-pointer text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-red-100"
                  >
                    <Trash2 className="w-4 h-4" /> Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FavoritePage;
