// import { FormAuth } from "../components/Fragments/Form/FormAuth";
import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { User, Lock, Mail, Loader2 } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";
// import { useState } from "react";

function AuthForm() {
  return (
    <GuestLayout title="Selamat Datang" view="login">
      <form action="#" autoComplete="off" method="post" className="space-y-4">
        <TextInput type="email" title="Email" nama="email" icon={Mail} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" icon={Lock} placeholder="Masukan Password"></TextInput>
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </GuestLayout>
  );
}

export default AuthForm;
