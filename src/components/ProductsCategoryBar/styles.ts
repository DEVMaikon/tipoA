import styled from "styled-components";

export const ProductsCategoryContainer = styled.div`
  padding: 1.7rem 0;
`;

export const CategoryButton = styled.button`
  max-width: 21.1rem;
  width: 100%;
  height: 4rem;
  padding: 1.2rem 5.8rem;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  margin-bottom: 2rem;
  span {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.gray4};
    &.highlight {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
