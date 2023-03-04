import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Section, Container, CircleBrand, GridArea, Title } from "./styles";
import "swiper/css";

import LogoVtex from "../../assets/images/LogoVtex.svg";
import ArrowBlue from "../../assets/images/icons/ArrowBlue.svg";

export default function BrandsSection() {
  return (
    <Section>
      <Container>
        <Title>Navegue por marcas</Title>
        <GridArea>
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={5}
            navigation={{
              nextEl: ".btn-right-brand",
            }}
          >
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
            <SwiperSlide>
              <CircleBrand>
                <div className="image">
                  <img src={LogoVtex} alt="Logo Vtex" />
                </div>
              </CircleBrand>
            </SwiperSlide>
          </Swiper>
        </GridArea>
      </Container>
      <div className="btn-right-circle btn-right-brand">
        <button>
          <img src={ArrowBlue} alt="Seta para Direita" />
        </button>
      </div>
    </Section>
  );
}
