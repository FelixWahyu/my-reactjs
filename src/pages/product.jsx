import { useState, useEffect } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import Produks from "../data/DataProduk";
import { getProduk } from "../api/ProdukApi";

export default function ProductContent() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduk()
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  // const filterProduk = Produks.filter((produk) => produk.product_name.toLowerCase().includes(search.toLowerCase()) || produk.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <AuthLayout>
      <div className="p-4">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">Produk List</h2>
        <div className="mb-4 max-w-md">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="px-3 py-2 w-full bg-gray-100 border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-1 focus:border-blue-600 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="border border-gray-300 border-collapse w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-white px-4 py-2 text-center font-semibold">No</th>
                <th className="text-white px-4 py-2 text-left font-semibold">Nama Produk</th>
                <th className="text-white px-4 py-2 text-left font-semibold">Kategori</th>
                <th className="text-white px-4 py-2 text-left font-semibold">Harga</th>
                <th className="text-white px-4 py-2 text-center font-semibold">Kuantitas</th>
              </tr>
            </thead>
            <tbody>
              {/* {filterProduk?.length > 0 ? (
                filterProduk.map((product, index) => (
                  <tr key={product.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{product.product_name}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">Rp {product.price.toLocaleString("id-ID")}</td>
                    <td className="px-4 py-2 text-center">{product.qty}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-4 text-center bg-red-50 text-red-500">
                    Data Produk belum tersedia.
                  </td>
                </tr>
              )} */}
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : (
                products.map((item, index) => (
                  <tr key={item.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">$ {item.price}</td>
                    <td className="px-4 py-2 text-center">
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-cover" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthLayout>
  );
}
