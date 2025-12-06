import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { User, Mail, Lock, Loader2 } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";

function RegisterForm() {
  return (
    <GuestLayout title="Mendaftar Akun" view="register">
      <form action="#" method="post" autoComplete="off" className="space-y-4">
        <TextInput type="text" nama="nama" title="Nama Lengkap" icon={User} placeholder="Masukan Nama Anda"></TextInput>
        <TextInput type="email" title="Email" nama="email" icon={Mail} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" icon={Lock} placeholder="Masukan Password"></TextInput>
        <TextInput type="password" title="Konfirmasi Password" nama="confirmPassword" icon={Lock} placeholder="Konfirmasi Password Anda"></TextInput>
        <div className="mt-6">
          <Button type="submit">Daftar</Button>
        </div>
      </form>
    </GuestLayout>
  );
}

export default RegisterForm;
