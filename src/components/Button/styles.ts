import styled from "styled-components";

export const ButtonDefault = styled.button`
  max-width: 24.5rem;
  width: 100%;
  height: 4.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #ffffff;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(1.2);
  }
`;
