import styled from "styled-components";

import bgCardPartner from "../../assets/images/bgCardPartner.webp";

export const PartnersArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;

export const Card = styled.div`
  max-width: 58.9rem;
  width: 100%;
  height: 28.4rem;
  background-image: url(${bgCardPartner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  position: relative;
  .filter {
    /* position: absolute;
    z-index: 1;
    width: 99%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%);
    mix-blend-mode: normal;
    opacity: 0.8; */
  }
  .content {
    padding-top: 4.8rem;
    padding-left: 3.9rem;
    z-index: 2;
    position: relative;
    h3 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 6rem;
      color: #ffffff;
      margin-bottom: 0.9rem;
    }
    p {
      max-width: 18.5rem;
      width: 100%;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #ffffff;
      margin-bottom: 3.2rem;
    }
  }
`;
