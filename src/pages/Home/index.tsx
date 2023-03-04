import { useState } from "react";

import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import CardFilterArea from "../../components/CardFilterArea";
import ProductSection from "../../components/ProductsSection";
import ProductsCategoryBar from "../../components/ProductsCategoryBar";
import CardPartners from "../../components/CardPartners";
import BrandsSection from "../../components/BrandsSection";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import { PartnersArea, ProductsSubtitle } from "./styles";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Header />
      <BannerHome
        title="Venha conhecer nossas promoçõe"
        subtitle="50% Off nos produtos"
      />

      <CardFilterArea />

      <ProductSection setShowModal={setShowModal}>
        <ProductsCategoryBar />
      </ProductSection>

      <PartnersArea>
        <CardPartners />
        <CardPartners />
      </PartnersArea>

      <ProductSection setShowModal={setShowModal}>
        <ProductsSubtitle>Ver todos</ProductsSubtitle>
      </ProductSection>

      <PartnersArea>
        <CardPartners />
        <CardPartners />
      </PartnersArea>

      <BrandsSection />

      <ProductSection setShowModal={setShowModal}>
        <ProductsSubtitle>Ver todos</ProductsSubtitle>
      </ProductSection>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
