import { Button } from "../../Elements/Button";
import { TextInput } from "../TextInput/TextInput";
import { User, Lock, Mail, Loader2 } from "lucide-react";

export const FormAuth = (props) => {
  const { action, autoComplete, value, method } = props;
  return (
    <>
      <form action={action} autoComplete={autoComplete} method={method} className="space-y-4">
        <TextInput type="text" nama="nama" title="Nama Lengkap" value={value} icon={User} placeholder="Masukan Nama Anda"></TextInput>
        <TextInput type="email" title="Email" nama="email" value={value} icon={Mail} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" value={value} icon={Lock} placeholder="Masukan Password"></TextInput>
        <TextInput type="password" title="Konfirmasi Password" nama="password" value={value} icon={Lock} placeholder="Konfirmasi Password Anda"></TextInput>
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </>
  );
};
