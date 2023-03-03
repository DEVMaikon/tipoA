import { Card } from "./styles";

import { CardProductProps } from "../../types/cardProduct";

import Button from "../Button";

export default function CardProdut({
  image,
  title,
  oldPrice,
  price,
  condition,
  delivery,
}: CardProductProps) {
  return (
    <Card>
      <div className="image">
        <img src={image} alt="Smartphone" title="Smartphone" />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <span className="oldPrice">{oldPrice}</span>
        <strong>{price}</strong>
        <small>{condition}</small>
        <span className="deliveryCondition">{delivery}</span>
        <Button label="Comprar" />
      </div>
    </Card>
  );
}
