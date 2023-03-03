import styled from "styled-components";

export const Card = styled.div`
  max-width: 27rem;
  width: 100%;
  padding: 2.2rem 1.2rem 1.6rem 1.2rem;
  background: #ffffff;
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  .image {
    margin-bottom: 1.9rem;
  }
  .content {
    h2 {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 2.2rem;
      color: ${({ theme }) => theme.colors.gray5};
    }
    .oldPrice {
      display: block;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-decoration-line: line-through;
      color: #808080;
      margin-bottom: 0.2rem;
    }
    strong {
      display: block;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.gray5};
      margin-bottom: 0.2rem;
    }
    small {
      display: block;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.gray5};
      margin-bottom: 0.7rem;
    }
    .deliveryCondition {
      display: block;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1.2rem;
    }
  }
`;
