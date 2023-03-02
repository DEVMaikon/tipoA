import styled from "styled-components";

export const Container = styled.div`
  max-width: 131rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
`;

export const AlertsBar = styled.div`
  ul {
    max-width: 76.4rem;
    width: 100%;
    margin: 0 auto;
    padding: 0.6rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      .icon {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
        display: flex;
        align-items: center;
      }
      .text {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.colors.gray1};
        span {
          &.highlight {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 5.6rem;
  border-top: 0.1rem solid #f0f0f0;
  border-bottom: 0.1rem solid #f0f0f0;
  .logo {
    margin-right: 9.5rem;
  }
  .searchBar {
    margin-right: 6.1rem;
    input {
      width: 65.7rem;
      height: 4.8rem;
      background-color: ${({ theme }) => theme.colors.gray2};
      background-image: url("../images/icons/MagnifyingGlass.svg");
      border-radius: 1rem;
      &::placeholder {
        padding: 1.4rem 1.4rem 1.4rem 2.4rem;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.colors.gray1};
      }
    }
  }
  .userArea {
    display: flex;
    gap: 3.2rem;
  }
`;

export const ButtonUserActions = styled.button`
  background-color: transparent;
  outline: none;
`;

export const CategoriesBar = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;
  padding: 1rem 7rem;
  box-shadow: 0px 8px 16px rgba(57, 48, 19, 0.12);
`;
