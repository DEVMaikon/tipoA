import styled from "styled-components";

export const PartnersArea = styled.article`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;

export const ProductsSubtitle = styled.strong`
  margin-top: 0.4rem;
  margin-bottom: 3.2rem;
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.gray5};
`;
