import { Button } from "../../Elements/Button";
import { TextInput } from "../TextInput/TextInput";
import { User, Lock, Mail, Loader2 } from "lucide-react";

export const FormAuth = (props) => {
  const { action, autoComplete } = props;
  return (
    <>
      <form action={action} autoComplete={autoComplete} className="space-y-4">
        <TextInput type="text" nama="nama" title="Nama Lengkap" icon={User} placeholder="Masukan Nama Anda"></TextInput>
        <TextInput type="email" title="Email" nama="email" icon={Mail} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" icon={Lock} placeholder="Masukan Password"></TextInput>
        <TextInput type="password" title="Konfirmasi Password" nama="password" icon={Lock} placeholder="Konfirmasi Password Anda"></TextInput>
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </>
  );
};
