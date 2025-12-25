// import { FormAuth } from "../components/Fragments/Form/FormAuth";
import { Button } from "../components/Elements/Button";
import { Label } from "../components/Elements/Label";
import { Links } from "../components/Elements/Link";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { Lock, Mail } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import UserData from "../data/DataUsers";

function AuthForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = (email, password) => {
    if (!email || !password) {
      return "EMPTY";
    }

    const user = UserData.find((user) => user.email === email && user.password === password);

    return user ? "OK" : "INVALID";
  };

  const handleToSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const statusLogin = validateLogin(email, password);

    if (statusLogin === "EMPTY") {
      alert("Silahkan masukan data diri Anda!");
      return;
    } else if (statusLogin === "INVALID") {
      alert("Email atau password yang Anda masukan salah!");
      return;
    }

    alert("Anda berhasil login");
    navigate("/dashboard");

    setEmail("");
    setPassword("");
  };

  return (
    <GuestLayout title="Selamat Datang" view="login">
      <form onSubmit={handleToSubmit} autoComplete="off" method="post" className="space-y-4">
        <TextInput type="email" title="Email" nama="email" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></TextInput>
        <TextInput type="password" title="Password" nama="password" icon={Lock} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password"></TextInput>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <Label htmlfor="remember">Remember me</Label>
          </div>
          <Links to={"/register"} classname="text-sm underline text-blue-500 hover:text-blue-600">
            Forgot Password
          </Links>
        </div>
        <div className="mt-6">
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </GuestLayout>
  );
}

export default AuthForm;
