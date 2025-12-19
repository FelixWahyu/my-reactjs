import { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const handleTambah = () => {
    setCounter((prev) => prev + 1);
  };

  const handleKurangi = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <AuthLayout>
      <div className="flex max-w-md mx-auto border border-gray-300 shadow-md p-4 rounded-lg justify-center items-center gap-4">
        <button onClick={handleKurangi} disabled={counter === 0} className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 border border-gray-300 disabled:opacity-40 font-medium">
          -
        </button>
        <span className={`font-semibold ${counter >= 10 ? "text-red-500" : "text-gray-800"}`}>{counter}</span>
        <button onClick={handleTambah} className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 border border-gray-300 font-medium">
          +
        </button>
        <button onClick={handleReset} className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 font-semibold text-white">
          Reset
        </button>
      </div>
    </AuthLayout>
  );
};

export default CounterPage;
