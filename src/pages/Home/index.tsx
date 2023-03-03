import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import CardFilterArea from "../../components/CardFilterArea";
import ProductSection from "../../components/ProductsSection";
import ProductsCategoryBar from "../../components/ProductsCategoryBar";
import PartnersCard from "../../components/PartnersCard";

import { PartnersArea } from "./styles";

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
        <PartnersCard />
        <PartnersCard />
      </PartnersArea>
    </>
  );
}
