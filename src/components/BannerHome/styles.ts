import styled from "styled-components";
import bgSHero from "../../assets/images/bgSHero.webp";

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 5rem 1.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  height: 40.5rem;
`;

export const BannerContainer = styled.div`
  position: relative;
  background-image: url(${bgSHero});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FilterBannerContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 0px;
`;

export const Title = styled.h1`
  max-width: 80rem;
  width: 100%;
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 7.2rem;
  color: #ffffff;
  margin-bottom: 1.6rem;
`;

export const Subtitle = styled.h2`
  z-index: 2;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 5.4rem;
  color: #ffffff;
  margin-bottom: 3.5rem;
`;
