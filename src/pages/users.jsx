import AuthLayout from "../components/Layouts/AuthLayout";
import UserData from "../data/DataUsers";
import UserCard from "../components/Fragments/Card/UserCard";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { Backpack, Mail, User } from "lucide-react";
import { useState } from "react";

export default function UsersContent() {
  const [dataUsers, setDataUsers] = useState(UserData);
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [jobUser, setJobUser] = useState("");

  console.log(dataUsers);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!nameUser.trim() || !emailUser.trim() || !jobUser.trim()) return;

    const itemUsers = {
      id: Date.now(),
      name: nameUser,
      email: emailUser,
      job: jobUser,
    };

    setDataUsers((data) => [...data, itemUsers]);
    setNameUser("");
    setEmailUser("");
    setJobUser("");
  };

  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto p-4 mb-6">
        <div className="max-w-md rounded-lg p-6 mb-6 border border-gray-300 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Tambah User Baru</h2>
          <form onSubmit={handleSubmitForm} action="">
            <TextInput title="Nama Lengkap" type="text" nama="name" value={nameUser} onChange={(event) => setNameUser(event.target.value)} icon={User} placeholder="Masukan Nama Lengkap"></TextInput>
            <TextInput title="Email" type="email" nama="email" icon={Mail} value={emailUser} onChange={(event) => setEmailUser(event.target.value)} placeholder="Masukan Alamat Email"></TextInput>
            <TextInput title="Pekerjaan/Karir" type="job" nama="job" icon={Backpack} value={jobUser} onChange={(event) => setJobUser(event.target.value)} placeholder="Masukan Karir"></TextInput>
            <div className="mt-4">
              <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg">Tambah</button>
            </div>
          </form>
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Daftar Users</h2>
        <div className="overflow-x-auto shadow-md rounded-lg mb-6">
          <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-white text-center font-semibold">No</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Nama</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Pekerjaan</th>
                <th className="px-4 py-2 text-white text-left font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {dataUsers?.length > 0 ? (
                dataUsers.map((user, index) => (
                  <tr key={user.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.job}</td>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {dataUsers.map((data) => (
            <div key={data.id}>
              <UserCard name={data.name} job={data.job} email={data.email}></UserCard>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}
