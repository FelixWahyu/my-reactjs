import AuthLayout from "../components/Layouts/AuthLayout";

export default function Dashboard() {
  return (
    <AuthLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total User</h2>
            <h1 className="text-3xl font-semibold">10</h1>
          </div>
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total User</h2>
            <h1 className="text-3xl font-semibold">10</h1>
          </div>
          <div className="px-6 py-4 border border-gray-300 shadow-md rounded-md">
            <h2 className="text-lg mb-2">Total User</h2>
            <h1 className="text-3xl font-semibold">10</h1>
          </div>
        </div>
        <div></div>
      </div>
    </AuthLayout>
  );
}
