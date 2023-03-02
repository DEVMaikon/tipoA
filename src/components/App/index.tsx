import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../assets/styles/global";
import DefaultTheme from "../../assets/styles/themes/default";

import { Container } from "./styles";

import Home from "../../pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}
