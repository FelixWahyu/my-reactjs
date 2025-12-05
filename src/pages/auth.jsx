import { FormAuth } from "../components/Fragments/Form/FormAuth";
import GuestLayout from "../components/Layouts/GuestLayout";

function AuthForm() {
  return (
    <GuestLayout title="Selamat Datang">
      <FormAuth autoComplete="off" action="#"></FormAuth>
    </GuestLayout>
  );
}

export default AuthForm;
