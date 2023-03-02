import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button{
  cursor: pointer;
}
`;
