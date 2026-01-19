import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useEffect, useState } from "react";
import { getProduk, type Product } from "../api/produkApi";

const KatalogProduct: React.FC = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const data = await getProduk();
        setProducts(data);
      } catch (error) {
        console.log("Gagal mengambil data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataProducts();
  }, []);

  return (
    <div className="py-20 px-4 lg:px-0 max-w-7xl mx-auto">
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Katalog Produk</h2>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit quibusdam beatae.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
        {loading ? (
          <div className="col-span-full py-20 text-center text-gray-500">Memuat produk...</div>
        ) : (
          products.map((item) => {
            const isLiked = isInWishlist(item.id);
            return (
              <div key={item.id} className="border border-gray-300 shadow-md rounded-lg p-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                <div className="relative w-full h-72 overflow-hidden rounded-md">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10 cursor-pointer"
                    title={isLiked ? "Hapus dari favorit" : "Tambah ke favorit"}
                  >
                    <Heart className={`w-5 h-5 transition-colors duration-300 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500 hover:text-red-500"}`} />
                  </button>
                </div>
                <div className="flex-1 my-4">
                  <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>
                  <span className="text-sm text-gray-600">{item.category}</span>
                </div>
                <div className="flex justify-between items-center mx-auto">
                  <h2 className="font-medium text-amber-600">Rp {item.price.toLocaleString("id-ID")}</h2>
                  <div>
                    <button className="px-4 py-2 w-full bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 cursor-pointer">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default KatalogProduct;
