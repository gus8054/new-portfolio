import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "@/themes/default";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
