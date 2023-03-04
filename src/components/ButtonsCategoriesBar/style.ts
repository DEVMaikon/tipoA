import styled from "styled-components";

interface ButtonCategoryProps {
  active?: boolean;
}

export const ButtonCategory = styled.button<ButtonCategoryProps>`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  ${(props) => (props.active ? `color:#F71963;` : `color:#9F9F9F;`)}
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
