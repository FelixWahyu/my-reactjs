import { Button } from "../components/Elements/Button";
import { Label } from "../components/Elements/Label";
import { Links } from "../components/Elements/Link";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { Lock, Mail } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import UserData from "../data/DataUsers";

type ErrorState = {
  email?: string;
  password?: string;
  general?: string;
};

function AuthForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState<ErrorState>({});

  const handleToSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg({});

    const newError: ErrorState = {};

    if (!email) {
      newError.email = "Masukan alamat email yang valid!";
    }

    if (!password) {
      newError.password = "Masukan password yang valid!";
    } else if (password.length < 8) {
      newError.password = "Password minimal 8 karakter";
    }

    if (Object.keys(newError).length > 0) {
      setErrorMsg(newError);
      return;
    }

    const ValidateLogin = UserData.find((user) => user.email === email && user.password === password);

    if (!ValidateLogin) {
      setErrorMsg({
        general: "Email atau Password Anda salah, coba lagi!",
        email: "",
        password: "",
      });
      return;
    }

    alert("Anda berhasil login");
    navigate("/dashboard");

    setEmail("");
    setPassword("");
  };

  return (
    <GuestLayout title="Selamat Datang" view="login">
      {errorMsg.general && <div className="text-sm text-red-600 px-3 py-1 bg-red-100 rounded-lg mb-3">{errorMsg.general}</div>}
      <form onSubmit={handleToSubmit} autoComplete="off" method="post" className="space-y-4">
        <TextInput type="email" title="Email" nama="email" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" validation={errorMsg.email ? "border-red-600" : "border-gray-300"}></TextInput>
        {errorMsg.email && <p className="text-sm text-red-500 mb-1">{errorMsg.email}</p>}
        <TextInput
          type="password"
          title="Password"
          nama="password"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukan Password"
          validation={errorMsg.password ? "border-red-600" : "border-gray-300"}
        ></TextInput>
        {errorMsg.password && <p className="text-sm mb-1 text-red-500">{errorMsg.password}</p>}
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
