import styled from "styled-components";

export const FooterBackground = styled.footer`
  background-color: #2a2a2a;
`;

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
`;

export const GridContet = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  justify-items: end;
`;

export const AreaLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 5.9rem;
  margin-bottom: 3.2rem;
  h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #ffffff;
    margin-bottom: 3.8rem;
  }
  .about {
    max-width: 15rem;
    display: flex;
    flex-direction: column;
    gap: 9rem;
    .links {
      ul {
        li {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 1.2rem;
          color: #ffffff;
          &:not(:last-child) {
            margin-bottom: 2.2rem;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .social {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .info {
    ul {
      li {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.2rem;
        color: #ffffff;
        &:not(:last-child) {
          margin-bottom: 2.2rem;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .payment {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.9rem;
    }
  }
`;

export const AreaNewsletter = styled.div`
  max-width: 39rem;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 4rem 3.2rem;
  margin-bottom: 3.2rem;
  .content {
    max-width: 32.7rem;
    width: 100%;
    height: 18rem;
    h4 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2.1rem;
      line-height: 2.6rem;
      color: ${({ theme }) => theme.colors.gray5};
      margin-bottom: 1.5rem;
      span {
        display: block;
        font-weight: 300;
        font-size: 1.8rem;
      }
    }
    p {
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.9rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray5};
      margin-bottom: 3.1rem;
    }
    input {
      width: 23rem;
      height: 4.5rem;
      padding: 2.5rem 1.3rem;
      border: 1px solid #2a2a2a;
      border-radius: 0.4rem;
      margin-right: 3.2rem;
      &::placeholder {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2rem;
        text-transform: uppercase;
        color: #c0c0c0;
      }
    }
    button {
      width: 6.2rem;
      height: 4.5rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 0.4rem;
      font-family: "Poppins";
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const AreaCopy = styled.div`
  padding: 2.2rem 0;
  border-top: 1px solid #ffffff;
  .content-container {
    max-width: 131rem;
    width: 100%;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copy {
      max-width: 70rem;
      width: 100%;
      small {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    .brands {
      display: flex;
      align-items: center;
      gap: 3.2rem;
    }
  }
`;
