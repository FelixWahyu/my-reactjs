import { Package } from "lucide-react";

function GuestLayout(props) {
  const { title, children } = props;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-6 py-12 flex items-center justify-center w-full">
        <div className="max-w-md w-full p-6 border border-gray-300 shadow-md rounded-lg">
          <div className="mb-6 space-y-4 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-800 text-2xl font-bold">{title}</h2>
            <p className="text-gray-7800 text-sm">Silahkan masukan detail data diri Anda</p>
          </div>
          {children}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-800">
              Belum punya akun?{" "}
              <a href="#" className="text-sm text-blue-600 hover:underline hover:text-blue-700">
                Daftar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestLayout;
