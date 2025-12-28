import { Button } from "../components/Elements/Button";
import { Label } from "../components/Elements/Label";
import { Links } from "../components/Elements/Link";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { Lock, Mail } from "lucide-react";
import GuestLayout from "../components/Layouts/GuestLayout";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";
import UserData from "../data/DataUsers";

type LoginState = {
  email: string;
  password: string;
  general?: string;
};

type ErrorState = Partial<LoginState>;

function AuthForm() {
  const navigate = useNavigate();
  const [LoginForm, setLoginForm] = useState<LoginState>({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState<ErrorState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg({});

    const newError: ErrorState = {};

    if (!LoginForm.email) {
      newError.email = "Masukan alamat email yang valid!";
    }

    if (!LoginForm.password) {
      newError.password = "Masukan password yang valid!";
    } else if (LoginForm.password.length < 8) {
      newError.password = "Password minimal 8 karakter";
    }

    if (Object.keys(newError).length > 0) {
      setErrorMsg(newError);
      return;
    }

    const ValidateLogin = UserData.find((user) => user.email === LoginForm.email && user.password === LoginForm.password);

    if (!ValidateLogin) {
      setErrorMsg({
        general: "Email yang Anda masukan tidak terdaftar!",
        email: "",
        password: "",
      });
      return;
    } else if (UserData.find((user) => user.email !== LoginForm.email)) {
      setErrorMsg({
        general: "",
        email: "Email yang Anda masukan salah, coba lagi!",
        password: "",
      });
      return;
    } else if (UserData.find((user) => user.password !== LoginForm.password)) {
      setErrorMsg({
        general: "",
        email: "",
        password: "Password yang Anda masukan salah, coba lagi!",
      });
    }

    alert("Berhasil login");
    navigate("/dashboard");
    setLoginForm({
      email: "",
      password: "",
    });
  };

  return (
    <GuestLayout title="Selamat Datang" view="login">
      {errorMsg.general && <div className="text-sm text-red-600 px-3 py-1 bg-red-100 rounded-lg mb-3">{errorMsg.general}</div>}
      <form onSubmit={handleToSubmit} autoComplete="off" method="post" className="space-y-4">
        <TextInput type="email" title="Email" name="email" icon={Mail} value={LoginForm.email} onChange={handleChange} placeholder="example@gmail.com" validation={errorMsg.email ? "border-red-600" : "border-gray-300"}></TextInput>
        {errorMsg.email && <p className="text-sm text-red-500 mb-1">{errorMsg.email}</p>}
        <TextInput
          type="password"
          title="Password"
          name="password"
          icon={Lock}
          value={LoginForm.password}
          onChange={handleChange}
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
