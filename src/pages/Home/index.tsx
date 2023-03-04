import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import CardFilterArea from "../../components/CardFilterArea";
import ProductSection from "../../components/ProductsSection";
import ProductsCategoryBar from "../../components/ProductsCategoryBar";
import CardPartners from "../../components/CardPartners";
import BrandsSection from "../../components/BrandsSection";

import { PartnersArea, ProductsSubtitle } from "./styles";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome
        title="Venha conhecer nossas promoçõe"
        subtitle="50% Off nos produtos"
      />

      <CardFilterArea />

      <ProductSection>
        <ProductsCategoryBar />
      </ProductSection>

      <PartnersArea>
        <CardPartners />
        <CardPartners />
      </PartnersArea>

      <ProductSection>
        <ProductsSubtitle>Ver todos</ProductsSubtitle>
      </ProductSection>

      <PartnersArea>
        <CardPartners />
        <CardPartners />
      </PartnersArea>

      <BrandsSection />

      <ProductSection>
        <ProductsSubtitle>Ver todos</ProductsSubtitle>
      </ProductSection>

      <Footer />
    </>
  );
}
