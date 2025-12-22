import AuthLayout from "../components/Layouts/AuthLayout";
import UserData from "../data/DataUsers";
import UserCard from "../components/Fragments/Card/UserCard";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { Backpack, Mail, User, Trash2 } from "lucide-react";
import { useState } from "react";

export default function UsersContent() {
  const [dataUsers, setDataUsers] = useState(UserData);
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [jobUser, setJobUser] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  console.log(dataUsers);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let newError = {};

    if (!nameUser.trim()) {
      // setErrorMessage({ name: "Silahkan isi nama lengkap anda!" });
      newError.name = "Silahkan isi nama lengkap anda!";
    } else if (nameUser.length < 3) {
      // setErrorMessage({ email: "Silahkan isi email anda!" });
      newError.name = "Nama minimal menggunakan 3 karakter";
    }

    if (!emailUser.trim()) {
      newError.email = "Silahkan isi email anda!";
    }

    if (!jobUser.trim()) {
      // setErrorMessage({ job: "Silahkan isi pekerjaan anda!" });
      newError.job = "Silahkan isi pekerjaan anda!";
    }

    setErrorMessage(newError);

    if (Object.keys(newError).length > 0) return;

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
    setErrorMessage({});
  };

  const handleDeleteData = (id) => {
    setDataUsers(dataUsers.filter((data) => data.id !== id));
  };

  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto p-4 mb-6">
        <div className="max-w-md rounded-lg p-6 mb-6 border border-gray-300 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Tambah User Baru</h2>
          <form onSubmit={handleSubmitForm} action="">
            <TextInput
              title="Nama Lengkap"
              type="text"
              nama="name"
              value={nameUser}
              onChange={(event) => setNameUser(event.target.value)}
              icon={User}
              placeholder="Masukan Nama Lengkap"
              validation={errorMessage.name ? "border-red-600" : "border-gray-300"}
            ></TextInput>
            {errorMessage.name && <p className="text-red-500 mb-1 text-sm">{errorMessage.name}</p>}
            <TextInput
              title="Email"
              type="email"
              nama="email"
              icon={Mail}
              value={emailUser}
              onChange={(event) => setEmailUser(event.target.value)}
              placeholder="Masukan Alamat Email"
              validation={errorMessage.email ? "border-red-600" : "border-gray-300"}
            ></TextInput>
            {errorMessage.email && <p className="text-red-500 mb-1 text-sm">{errorMessage.email}</p>}
            <TextInput
              title="Pekerjaan/Karir"
              type="job"
              nama="job"
              icon={Backpack}
              value={jobUser}
              onChange={(event) => setJobUser(event.target.value)}
              placeholder="Masukan Karir"
              validation={errorMessage.job ? "border-red-600" : "border-gray-300"}
            ></TextInput>
            {errorMessage.job ? <p className="text-red-500 mb-1 text-sm">{errorMessage.job}</p> : ""}
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
                <th className="px-4 py-2 text-white text-center font-semibold">Aksi</th>
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
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => handleDeleteData(user.id)} className="px-2 py-1 cursor-pointer bg-red-50 text-red-500 rounded-md hover:bg-red-100 hover:text-red-600">
                        <Trash2 className="w-5 h-5"></Trash2>
                      </button>
                    </td>
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
              <UserCard name={data.name} job={data.job} email={data.email} onClick={() => handleDeleteData(data.id)}></UserCard>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}
