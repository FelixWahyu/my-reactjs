import { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function OrdersPage() {
  const [Jumlah, setJumlah] = useState(0);

  const handleTambah = () => {
    setJumlah((prev) => prev + 1);
  };

  const handleKurangi = () => {
    setJumlah((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <AuthLayout>
      <div className="flex gap-4">
        <button onClick={handleTambah} className="bg-gray-100 p-2 rounded-lg shadow-sm cursor-pointer font-medium text-xl">
          +
        </button>
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-medium">{Jumlah}</h2>
        </div>
        <button onClick={handleKurangi} className="bg-gray-100 p-2 rounded-lg shadow-sm cursor-pointer font-medium text-xl">
          -
        </button>
      </div>
    </AuthLayout>
  );
}
