import CardProdut from "../CardProduct";

import ProductSmartphone from "../../assets/images/ProductSmartphone.webp";

import {
  Container,
  Title,
  ProductsCategoryBar,
  CategoryButton,
  CardArea,
} from "./styles";

export default function ProductSection() {
  return (
    <section>
      <Container>
        <Title>Produtos relacionados</Title>
        <ProductsCategoryBar>
          <CategoryButton>
            <span className="highlight">Celular</span>
          </CategoryButton>
          <CategoryButton>
            <span>Acessórios</span>
          </CategoryButton>
          <CategoryButton>
            <span>Tablets</span>
          </CategoryButton>
          <CategoryButton>
            <span>Notebooks</span>
          </CategoryButton>
          <CategoryButton>
            <span>Tvs</span>
          </CategoryButton>
          <CategoryButton>
            <span>Ver todos</span>
          </CategoryButton>
        </ProductsCategoryBar>
        <CardArea>
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
          />
          <CardProdut
            image={ProductSmartphone}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            oldPrice="R$ 30,90"
            price="R$ 28,90"
            condition="ou 2x de R$ 49,95 sem juros"
            delivery="Frete grátis"
          />
        </CardArea>
      </Container>
    </section>
  );
}
