import { useState, type ChangeEvent, type FormEvent } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { File } from "lucide-react";

export default function CategoryContent() {
  const [Category, setCategory] = useState(["Makanan"]);
  const [nameCategory, setNameCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handelTambahCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newError = "";

    if (!nameCategory.trim()) {
      newError = "Silahkan isi data kategori!";
    } else if (nameCategory.length < 3) {
      newError = "Nama kategori minimal 3 karakter";
    }

    setErrorMessage(newError);

    if (newError) return;

    setCategory((prev) => [...prev, nameCategory]);
    setNameCategory("");
    setErrorMessage("");
  };

  return (
    <AuthLayout>
      <div className="max-w-3xl mx-auto p-4">
        <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tambah Kategori</h2>
          <form onSubmit={handelTambahCategory} action="">
            <TextInput
              type="text"
              title="Nama Kategori"
              name="category"
              icon={File}
              value={nameCategory}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setNameCategory(event.target.value)}
              placeholder="Masukan Nama"
              validation={errorMessage ? "border-red-600" : "border-gray-300"}
            ></TextInput>
            {errorMessage && <p className="text-red-500 text-sm mb-1">{errorMessage}</p>}
            <button type="submit" className="self-end cursor-pointer mt-6 bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300">
              Tambah
            </button>
          </form>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Daftar Kategori</h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-center font-semibold text-white">No</th>
                <th className="px-4 py-2 text-left font-semibold text-white">Nama</th>
              </tr>
            </thead>
            <tbody>
              {Category.length > 0 ? (
                Category.map((item, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{item}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center text-red-500 bg-red-50 py-4">
                    Data kategori belum tersedia.
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
