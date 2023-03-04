import { useState, useEffect } from "react";

import Button from "../Button";
import Modal from "../Modal";

import Arrow from "../../assets/images/icons/Arrow.svg";

import { Section, Container, Title, CardArea, Card } from "./styles";

import { productData } from "../../types/productData";

type ProductsSectionProps = {
  children?: JSX.Element;
};

export default function ProductSection({ children }: ProductsSectionProps) {
  const [products, setProducts] = useState<productData[]>([]);
  const [productModal, setProductModal] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then(async (response) => {
        const json = await response.json();
        const array = [...json.products];
        setProducts(array);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  function handleClick(index: number) {
    setProductModal(index);
    setShowModal(true);
  }

  return (
    <>
      <Section>
        <Container>
          <Title>Produtos relacionados</Title>
          {children}
          <CardArea>
            {products.map((product, index) => (
              <Card key={index}>
                <div className="image">
                  <img
                    src={product.photo}
                    alt={product.descriptionShort}
                    title={product.descriptionShort}
                  />
                </div>
                <div className="content">
                  <h2>{product.productName}</h2>
                  <span className="oldPrice">R$ 30,90</span>
                  <strong>{`R$ ${product.price}`}</strong>
                  <small>ou 2x de R$ 49,95 sem juros</small>
                  <span className="deliveryCondition">Frete grátis</span>
                  <Button label="Comprar" onClick={() => handleClick(index)} />
                </div>
              </Card>
            ))}
          </CardArea>
        </Container>
        <button className="btn-left">
          <img src={Arrow} alt="Seta para Esquerda" />
        </button>
        <button className="btn-right">
          <img src={Arrow} alt="Seta para Direita" />
        </button>
      </Section>

      {productModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          productModal={products[productModal]}
        />
      )}
    </>
  );
}
