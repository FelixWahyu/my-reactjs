import { useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kaos Hitam Polos",
    price: 150000,
    category: "Kaos",
    image: "https://images.unsplash.com/photo-1654570818480-54524bf0186b?q=80&w=478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 2,
    name: "Celana Panjang",
    price: 120000,
    category: "Celana Panjang",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 3,
    name: "Kaos Polos",
    price: 100000,
    category: "Kaos",
    image: "https://images.unsplash.com/photo-1716541424893-734612ddcabb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 4,
    name: "Kemeja Kotak-kotak",
    price: 180000,
    category: "Kemeja",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
];

const KatalogProduct = () => {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  return (
    <MainLayout favoriteCount={favorites.length}>
      <div className="py-20 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Katalog Produk</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit quibusdam beatae.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
          {products.map((item) => {
            const isLiked = favorites.includes(item.id);
            return (
              <div key={item.id} className="border border-gray-300 shadow-md rounded-lg p-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                <div className="relative w-full h-72 overflow-hidden rounded-md">
                  <img src={item.image} alt={item.name} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                  <button
                    onClick={() => toggleFavorites(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10 cursor-pointer"
                    title={isLiked ? "Hapus dari favorit" : "Tambah ke favorit"}
                  >
                    <Heart className={`w-5 h-5 transition-colors duration-300 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500 hover:text-red-500"}`} />
                  </button>
                </div>
                <div className="my-4">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <span className="text-sm text-gray-600">{item.category}</span>
                  </div>
                  <p className="text-sm text-gray-800 my-1">{item.description}</p>
                  <h2 className="font-medium">Rp {item.price.toLocaleString("id-ID")}</h2>
                </div>
                <div>
                  <button className="px-4 py-2 w-full bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 cursor-pointer">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default KatalogProduct;
