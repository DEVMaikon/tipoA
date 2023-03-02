import styled from "styled-components";

export const ButtonCategory = styled.button`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray1};
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  .image {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    display: inline-block;
  }
`;
