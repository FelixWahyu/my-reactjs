import { Button } from "../components/Elements/Button";
import { TextInput } from "../components/Fragments/TextInput/TextInput";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";
import GuestLayout from "../components/Layouts/GuestLayout";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ErrorState = Partial<FormState>;

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState<ErrorState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    let ErrorInput = "";

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (name) {
      case "name":
        if (value.trim().length > 0 && value.trim().length < 3) {
          ErrorInput = "Nama minimal 3 karakter";
        }
        break;
      case "email":
        if (value.trim().length > 0 && !EmailRegex.test(value.trim())) {
          ErrorInput = "Format email tidak valid";
        }
        break;
      case "password":
        if (value.trim().length > 0 && value.trim().length < 8) {
          ErrorInput = "Password minimal 8 karakter";
        }
        break;
      default:
        break;
    }

    setErrorMsg((prev) => ({ ...prev, [name]: ErrorInput }));
  };

  const handelSubmited = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg({});

    const newError: ErrorState = {};

    if (!formData.name.trim()) {
      newError.name = "Masukan nama lengkap Anda!";
    }

    if (!formData.email) {
      newError.email = "Masukan alamat email yang valid!";
    }

    if (!formData.password) {
      newError.password = "Masukan password yang valid!";
    }

    if (!formData.confirmPassword) {
      newError.confirmPassword = "Masukan ulang password!";
    } else if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = "Confirm password yang anda masukan tidak sesuai!";
    }

    if (Object.keys(newError).length > 0) {
      setErrorMsg(newError);
      return;
    }

    alert("Berhasil daftar!");
    navigate("/");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <GuestLayout title="Mendaftar Akun" view="register">
      <form action="" onSubmit={handelSubmited} method="post" autoComplete="off" className="space-y-4">
        <TextInput type="text" name="name" title="Nama Lengkap" icon={User} value={formData.name} onChange={handleChange} validation={errorMsg.name ? "border-red-600" : "border-gray-300"} placeholder="Masukan Nama Anda"></TextInput>
        {errorMsg.name && <p className="text-red-500 text-sm mb-1">{errorMsg.name}</p>}
        <TextInput type="email" title="Email" name="email" icon={Mail} value={formData.email} onChange={handleChange} validation={errorMsg.email ? "border-red-600" : "border-gray-300"} placeholder="example@gmail.com"></TextInput>
        {errorMsg.email && <p className="text-red-500 text-sm mb-1">{errorMsg.email}</p>}
        <TextInput
          type="password"
          title="Password"
          name="password"
          icon={Lock}
          value={formData.password}
          onChange={handleChange}
          validation={errorMsg.password ? "border-red-600" : "border-gray-300"}
          placeholder="Masukan Password"
        ></TextInput>
        {errorMsg.password && <p className="text-red-500 text-sm mb-1">{errorMsg.password}</p>}
        <TextInput
          type="password"
          title="Konfirmasi Password"
          name="confirmPassword"
          icon={Lock}
          value={formData.confirmPassword}
          onChange={handleChange}
          validation={errorMsg.confirmPassword ? "border-red-600" : "border-gray-300"}
          placeholder="Konfirmasi Password Anda"
        ></TextInput>
        {errorMsg.confirmPassword && <p className="text-red-500 text-sm mb-1">{errorMsg.confirmPassword}</p>}
        <div className="mt-6">
          <Button type="submit">Daftar</Button>
        </div>
      </form>
    </GuestLayout>
  );
}

export default RegisterForm;
