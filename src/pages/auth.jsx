import { Package, User, Lock, Loader2, Mail } from "lucide-react";
import { Input } from "../components/Elements/Input";
import { Label } from "../components/Elements/Label";
import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";

function AuthForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 border border-gray-300 shadow-md rounded-lg">
        <div className="mb-6 space-y-4 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-gray-800 text-2xl font-bold">Selamat Datang</h2>
          <p className="text-gray-7800 text-sm">Masuk ke akun Anda untuk melanjutkan</p>
        </div>

        <form action="" className="space-y-4">
          <div className="space-y-2">
            <Label htmlfor="nama">Nama Lengkap</Label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></User>
              <Input Type="text" Id="nama" Name="nama" Placeholder="Masukan Nama Lengkap"></Input>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlfor="email">Email</Label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></Mail>
              <Input Type="email" Id="email" Name="email" Placeholder="example@gmail.com"></Input>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></Lock>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukan Password"
                className="bg-gray-100 mt-1 pl-10 pr-3 py-2 w-full border border-gray-300 shadow-sm rounded-lg outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <TextInput type="password" title="Konfirmasi Password" nama="password" icon={Lock} placeholder="Konfirmasi Password Anda"></TextInput>
          </div>
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
  );
}

export default AuthForm;
