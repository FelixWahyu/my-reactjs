import AuthLayout from "../components/Layouts/AuthLayout";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { File, X } from "lucide-react";
import { useState } from "react";

const TodoPage = () => {
  const [listItem, setListItem] = useState([]);
  const [nameItem, setNameItem] = useState("");

  const handleTambahTodoList = (event) => {
    event.preventDefault();

    if (!nameItem.trim()) return;

    setListItem((newItem) => [...newItem, nameItem]);
    setNameItem("");
  };

  const handleHapus = (indexHapus) => {
    setListItem(listItem.filter((_, index) => index !== indexHapus));
  };

  return (
    <AuthLayout>
      <div className="max-w-lg p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Todo List</h2>
        <div className="mb-6">
          <ul>
            {listItem.map((list, index) => (
              <li key={index} className="text-lg flex items-center justify-between my-1 font-medium">
                <span>{index + 1}</span>
                {list}
                <button onClick={() => handleHapus(index)} className="text-gray-800 cursor-pointer hover:text-red-500">
                  <X className="w-5 h-5"></X>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleTambahTodoList} action="">
            <TextInput title="List Nama" type="text" nama="todo" icon={File} value={nameItem} onChange={(e) => setNameItem(e.target.value)} placeholder="Masukan list"></TextInput>
            <div>
              <button type="submit" className="bg-gray-200 cursor-pointer hover:bg-gray-300 px-3 py-1 rounded-lg">
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default TodoPage;
