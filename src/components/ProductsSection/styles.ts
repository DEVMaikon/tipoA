import styled from "styled-components";

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  padding-top: 4rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 3.4rem;
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #dedede;
    flex: 1;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #dedede;
    flex: 1;
  }
`;

export const ProductsCategoryBar = styled.div`
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

export const CardArea = styled.div`
  max-width: 126.6rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6.2rem;
`;
