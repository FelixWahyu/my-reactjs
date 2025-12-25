import { Button } from "../../Elements/Button";
import { TextInput } from "../TextInput/TextInput";
import { User, Lock, Mail } from "lucide-react";

type FormAuthProps = {
  action?: string;
  autoComplete?: string;
  value: string | number;
  method?: string;
};

export const FormAuth = (props: FormAuthProps) => {
  const { action, autoComplete, value, method } = props;
  return (
    <>
      <form action={action} autoComplete={autoComplete} method={method} className="space-y-4">
        <TextInput type="text" nama="nama" title="Nama Lengkap" value={value} icon={User} onChange={() => {}} placeholder="Masukan Nama Anda" />
        <TextInput type="email" title="Email" nama="email" value={value} icon={Mail} onChange={() => {}} placeholder="example@gmail.com" />
        <TextInput type="password" title="Password" nama="password" value={value} icon={Lock} onChange={() => {}} placeholder="Masukan Password" />
        <TextInput type="password" title="Konfirmasi Password" nama="password" value={value} icon={Lock} onChange={() => {}} placeholder="Konfirmasi Password Anda" />
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </>
  );
};
