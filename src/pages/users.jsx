import AuthLayout from "../components/Layouts/AuthLayout";
import UserData from "../data/DataUsers";

export default function UsersContent() {
  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Daftar Users</h2>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-white text-center font-semibold">No</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Nama</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Username</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {UserData?.length > 0 ? (
                UserData.map((user, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-red-500 bg-red-50">
                    Data user belum tersedia.
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
