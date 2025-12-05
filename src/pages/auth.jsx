import { Package, User, Lock, Loader2, Mail } from "lucide-react";
import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";

function AuthForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-6 py-12 flex items-center justify-center w-full">
        <div className="max-w-md w-full p-6 border border-gray-300 shadow-md rounded-lg">
          <div className="mb-6 space-y-4 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-800 text-2xl font-bold">Selamat Datang</h2>
            <p className="text-gray-7800 text-sm">Masuk ke akun Anda untuk melanjutkan</p>
          </div>

          <form action="" className="space-y-4">
            <TextInput type="text" nama="nama" title="Nama Lengkap" icon={User} placeholder="Masukan Nama Anda"></TextInput>
            <TextInput type="email" title="Email" nama="email" icon={Mail} placeholder="example@gmail.com"></TextInput>
            <TextInput type="password" title="Password" nama="password" icon={Lock} placeholder="Masukan Password"></TextInput>
            <TextInput type="password" title="Konfirmasi Password" nama="password" icon={Lock} placeholder="Konfirmasi Password Anda"></TextInput>
            <div className="mt-6">
              <Button type="submit">Masuk</Button>
            </div>
          </form>
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

export default AuthForm;
