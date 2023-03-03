import { CircleBrand, Container, GridArea, Title } from "./styles";

import LogoVtex from "../../assets/images/LogoVtex.svg";

export default function BrandsSection() {
  return (
    <section>
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
    </section>
  );
}
