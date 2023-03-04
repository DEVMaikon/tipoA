import styled from "styled-components";

export const Section = styled.section`
  max-width: 147rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  .btn-right-circle {
    z-index: 2;
    position: absolute;
    top: 55%;
    right: 11rem;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background-color: transparent;
    }
  }
`;

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  margin-top: 15.5rem;
  margin-bottom: 8.9rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5.2rem;
`;

export const GridArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CircleBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21.1rem;
  height: 21.1rem;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.13);
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 17.2rem;
    width: 100%;
    object-fit: cover;
  }
`;
