import AuthLayout from "../components/Layouts/AuthLayout";
import Produks from "../data/DataProduk";
import UserData from "../data/DataUsers";

export default function Dashboard() {
  const CountProduk = Produks.length;
  const CountUser = UserData.length;
  return (
    <AuthLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total Pendapatan</h2>
            <h1 className="text-3xl font-semibold">10</h1>
          </div>
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total Produks</h2>
            <h1 className="text-3xl font-semibold">{CountProduk}</h1>
          </div>
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total User</h2>
            <h1 className="text-3xl font-semibold">{CountUser}</h1>
          </div>
        </div>
        <div></div>
      </div>
    </AuthLayout>
  );
}
