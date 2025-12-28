import AuthLayout from "../components/Layouts/AuthLayout";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { File, X } from "lucide-react";
import { useState, type FormEvent } from "react";

type TodoItem = {
  id: number;
  text: string;
};

const TodoPage = () => {
  const [listItem, setListItem] = useState<TodoItem[]>([]);
  const [nameItem, setNameItem] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleTambahTodoList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newError = "";

    if (!nameItem.trim()) {
      newError = "Silahkan isi nama list anda!";
    } else if (nameItem.length < 3) {
      newError = "Nama list minimal 3 karakter!";
    }

    setErrorMessage(newError);

    if (newError) return;

    const newItemObject: TodoItem = {
      id: Date.now(),
      text: nameItem,
    };

    setListItem((prevList) => [...prevList, newItemObject]);
    setNameItem("");
    setErrorMessage("");
  };

  const handleHapus = (id: number) => {
    setListItem((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <AuthLayout>
      <div className="max-w-lg p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Todo List</h2>
        <div className="mb-6">
          {listItem.length > 0 ? (
            <ul>
              {listItem.map((list, index) => (
                <li key={list.id} className="text-lg flex items-center justify-between my-1 font-medium">
                  <div className="flex gap-3 items-center">
                    <span className="text-gray-700 font-semibold">{index + 1}.</span>
                    <span>{list.text}</span>
                  </div>
                  <button onClick={() => handleHapus(list.id)} className="text-red-500 cursor-pointer hover:text-red-600">
                    <X className="w-5 h-5"></X>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-6 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
              <h2>Belum ada list</h2>
            </div>
          )}
        </div>
        <div>
          <form className="flex flex-col gap-4" onSubmit={handleTambahTodoList} action="">
            <TextInput
              title="List Nama"
              type="text"
              name="todo"
              icon={File}
              value={nameItem}
              onChange={(e) => setNameItem(e.target.value)}
              placeholder="Masukan list"
              validation={errorMessage ? "border-red-600" : "border-gray-300"}
            ></TextInput>
            {errorMessage && <p className="text-red-500 text-sm mb-1">{errorMessage}</p>}
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
