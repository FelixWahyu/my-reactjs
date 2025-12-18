import { useState, useEffect } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import { getProduk } from "../api/ProdukApi";

export default function ProductContent() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    getProduk()
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredProduct = products.filter((produk) => produk.title.toLowerCase().includes(search.toLowerCase()) || produk.category.toLowerCase().includes(search.toLowerCase()));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  const totalPage = Math.ceil(filteredProduct.length / itemsPerPage);

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
                <th className="text-white px-4 py-2 text-center font-semibold">Gambar</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : currentProducts.length > 0 ? (
                currentProducts.map((item, index) => (
                  <tr key={item.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="px-4 py-2 text-center">{indexOfFirstItem + index + 1}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-cover" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center text-red-500 bg-red-50 py-4">
                    Data produk tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end gap-1 mt-6">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border border-gray-400 rounded-md cursor-pointer">
            Prev
          </button>
          {[...Array(totalPage)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border border-gray-400 rounded-md cursor-pointer ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPage))} disabled={currentPage === totalPage} className="px-3 py-1 border border-gray-400 rounded-md cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
