import { Package } from "lucide-react";
import { Links } from "../Elements/Link";

function GuestLayout(props) {
  const { title, children, view } = props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/bg-image.png')" }}>
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 px-6 py-12 flex items-center justify-center w-full">
        <div className="max-w-md w-full p-6 border bg-white/70 backdrop-blur-sm border-gray-300 shadow-md rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
          <div className="mb-6 space-y-4 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-800 text-2xl font-bold">{title}</h2>
            <p className="text-gray-7800 text-sm">Silahkan masukan detail data diri Anda</p>
          </div>
          {children}
          <div className="text-center mt-6">
            <Navigasi contenType={view}></Navigasi>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navigasi = (props) => {
  const { contenType } = props;

  if (contenType === "login") {
    return (
      <>
        <p className="text-sm text-gray-800">
          Belum punya akun?{" "}
          <Links to={"/register"} classname="text-sm text-blue-600 hover:underline hover:text-blue-700">
            Daftar
          </Links>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p className="text-sm text-gray-800">
          Sudah memiliki punya akun?{" "}
          <Links to={"/"} classname="text-sm text-blue-600 hover:underline hover:text-blue-700">
            Login
          </Links>
        </p>
      </>
    );
  }
};

export default GuestLayout;
