import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(117, 117, 117, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 3;
  background-color: #ffffff;
  padding: 1.6rem 3.2rem;
  max-width: 76.9rem;
  width: 100%;
  min-height: 30rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 8rem;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    button {
      font-size: 2rem;
      color: #707070;
      font-weight: 500;
      padding: 1rem;
      background-color: transparent;
    }
  }
  .image {
    max-width: 24.7rem;
    width: 100%;
  }
  .content {
    h3,
    strong {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: 0.05em;
      color: #041e50;
      margin-bottom: 2rem;
    }
    strong {
      display: block;
      font-weight: 700;
    }
    p {
      max-width: 29rem;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.05em;
      color: #222222;
      margin-bottom: 2.5rem;
    }
    a {
      display: block;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.2rem;
      letter-spacing: 0.05em;
      color: #041e50;
    }
  }
`;
