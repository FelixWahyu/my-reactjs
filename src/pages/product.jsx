import AuthLayout from "../components/Layouts/AuthLayout";
import Produks from "../data/DataProduk";

export default function ProductContent() {
  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">Produk List</h2>
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
              {Produks?.length > 0 ? (
                Produks.map((product, index) => (
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
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthLayout>
  );
}
