import { Section, Container, CircleBrand, GridArea, Title } from "./styles";

import LogoVtex from "../../assets/images/LogoVtex.svg";
import ArrowBlue from "../../assets/images/icons/ArrowBlue.svg";

export default function BrandsSection() {
  return (
    <Section>
      <Container>
        <Title>Navegue por marcas</Title>
        <GridArea>
          <CircleBrand>
            <div className="image">
              <img src={LogoVtex} alt="Logo Vtex" />
            </div>
          </CircleBrand>
          <CircleBrand>
            <div className="image">
              <img src={LogoVtex} alt="Logo Vtex" />
            </div>
          </CircleBrand>
          <CircleBrand>
            <div className="image">
              <img src={LogoVtex} alt="Logo Vtex" />
            </div>
          </CircleBrand>
          <CircleBrand>
            <div className="image">
              <img src={LogoVtex} alt="Logo Vtex" />
            </div>
          </CircleBrand>
          <CircleBrand>
            <div className="image">
              <img src={LogoVtex} alt="Logo Vtex" />
            </div>
          </CircleBrand>
        </GridArea>
      </Container>
      <div className="btn-right-circle">
        <button>
          <img src={ArrowBlue} alt="Seta para Direita" />
        </button>
      </div>
    </Section>
  );
}
