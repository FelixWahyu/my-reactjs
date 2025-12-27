import { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import Produks from "../data/DataProduk";

export default function OrdersPage() {
  const [Orders, setOrders] = useState(Produks);

  const handleTambah = (id: string | number) => {
    setOrders((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  };

  const handleKurangi = (id: string | number) => {
    setOrders((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 } : item)));
  };

  return (
    <AuthLayout>
      <div className="max-w-2xl mx-auto space-y-3">
        {Orders.map((item) => {
          const SubTotal = item.price * item.qty;

          return (
            <div key={item.id} className="grid grid-cols-[1fr_120px_140px] items-center p-4 border border-gray-300 bg-white shadow-md rounded-lg">
              <div className="space-y-1">
                <h2 className="text-gray-800 font-semibold">{item.product_name}</h2>
                <p className="text-sm">Rp {item.price.toLocaleString("id-ID")}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <button onClick={() => handleTambah(item.id)} className="bg-gray-100 flex items-center justify-center w-6 h-6 rounded-md shadow-sm cursor-pointer font-medium text-sm border border-gray-300 hover:bg-gray-200">
                  +
                </button>
                <span className="w-6 text-center text-sm tabular-nums">{item.qty}</span>
                <button
                  onClick={() => handleKurangi(item.id)}
                  disabled={item.qty === 0}
                  className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-md shadow-sm cursor-pointer font-medium text-sm border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                >
                  -
                </button>
              </div>
              <div className="text-right font-semibold tabular-nums">Rp {SubTotal.toLocaleString("id-ID")}</div>
            </div>
          );
        })}
      </div>
    </AuthLayout>
  );
}
