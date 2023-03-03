import styled from "styled-components";

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 3.6rem 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5.3rem;
`;

export const CardContainer = styled.div`
  width: 12.8rem;
  height: 12.8rem;
  span {
    margin-top: 2.2rem;
    display: block;
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.gray3};
    &.highlight {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Card = styled.button`
  width: 12.8rem;
  height: 12.8rem;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
