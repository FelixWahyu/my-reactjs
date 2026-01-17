import HeroSection from "../components/HeroSection";
import KatalogProduct from "../components/KatalogProduct";
import MainLayout from "../components/Layouts/MainLayout";

function LandingPage() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <KatalogProduct />
      </MainLayout>
    </>
  );
}

export default LandingPage;
