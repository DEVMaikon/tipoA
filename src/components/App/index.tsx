import { ThemeProvider } from "styled-components";

import DefaultTheme from "../../assets/styles/themes/default";
import GlobalStyles from "../../assets/styles/global";

import Home from "../../pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}
