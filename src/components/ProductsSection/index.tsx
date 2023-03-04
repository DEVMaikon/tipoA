import CardProdut from "../CardProduct";

import ProductSmartphone from "../../assets/images/ProductSmartphone.webp";

import { Container, Title, CardArea } from "./styles";

type ProductsSectionProps = {
  children?: JSX.Element;
  setShowModal: (state: boolean) => void;
};

export default function ProductSection({
  children,
  setShowModal,
}: ProductsSectionProps) {
  return (
    <section>
      <Container>
        <Title>Produtos relacionados</Title>
        {children}
        <CardArea>
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
            setShowModal={setShowModal}
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
            setShowModal={setShowModal}
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
            setShowModal={setShowModal}
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
            setShowModal={setShowModal}
          />
        </CardArea>
      </Container>
    </section>
  );
}
