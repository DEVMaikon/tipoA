import { CardContainer, Card, Container } from "./styles";

import TechnologyIcon from "../../assets/images/icons/TechnologyIcon.webp";
import MarketIcon from "../../assets/images/icons/MarketIcon.webp";
import DrinkIcon from "../../assets/images/icons/DrinkIcon.webp";
import ToolsIcon from "../../assets/images/icons/ToolsIcon.webp";
import HealthIcon from "../../assets/images/icons/HealthIcon.webp";
import FitnessIcon from "../../assets/images/icons/FitnessIcon.webp";
import DressIcon from "../../assets/images/icons/DressIcon.webp";

export default function CardFilterArea() {
  return (
    <div className="section">
      <Container>
        <CardContainer>
          <Card aria-label="Tecnologia">
            <img src={TechnologyIcon} alt="Ícone Tecnologia" />
          </Card>
          <span className="highlight">Tecnologia</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Supermercado">
            <img src={MarketIcon} alt="Ícone Supermercado" />
          </Card>
          <span>Supermercado</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Bebidas">
            <img src={DrinkIcon} alt="Ícone Bebidas" />
          </Card>
          <span>Bebidas</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Ferramentas">
            <img src={ToolsIcon} alt="Ícone Ferramentas" />
          </Card>
          <span>Ferramentas</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Saúde">
            <img src={HealthIcon} alt="Ícone Saúde" />
          </Card>
          <span>Saúde</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Fitness">
            <img src={FitnessIcon} alt="Ícone Fitness" />
          </Card>
          <span>Fitness</span>
        </CardContainer>

        <CardContainer>
          <Card aria-label="Moda">
            <img src={DressIcon} alt="Ícone Moda" />
          </Card>
          <span>Moda</span>
        </CardContainer>
      </Container>
    </div>
  );
}
