// import { FormAuth } from "../components/Fragments/Form/FormAuth";
import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { User, Lock, Mail, Loader2 } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserData from "../data/DataUsers";

function AuthForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToSubmit = (e) => {
    e.preventDefault();

    if (email === UserData[0].email && password === UserData[0].password) {
      alert("Anda berhasil login");
      navigate("/dashboard");
    } else if (email === "" && password === "") {
      alert("Silahkan masukan data diri Anda!");
      navigate("/");
    } else {
      alert("Email atau password yang Anda masukan salah!");
      navigate("/");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <GuestLayout title="Selamat Datang" view="login">
      <form onSubmit={handleToSubmit} autoComplete="off" method="post" className="space-y-4">
        <TextInput type="email" title="Email" nama="email" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" icon={Lock} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password"></TextInput>
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </GuestLayout>
  );
}

export default AuthForm;
