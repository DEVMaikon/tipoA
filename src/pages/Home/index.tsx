import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import CardFilterArea from "../../components/CardFilterArea";
import ProductSection from "../../components/ProductsSection";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome
        title="Venha conhecer nossas promoçõe"
        subtitle="50% Off nos produtos"
      />
      <CardFilterArea />
      <ProductSection />
    </>
  );
}
