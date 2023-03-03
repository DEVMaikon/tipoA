import { Card } from "./styles";

import Button from "../Button";

export default function CardPartners() {
  return (
    <Card>
      <div className="filter"></div>
      <div className="content">
        <h3>Produtos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button label="Confira" />
      </div>
    </Card>
  );
}
