import React from "react";
import Header from "../ui/organism/header/header";
import Main from "../ui/organism/promo/promo";
import Footer from "../ui/organism/footer/footer";
import { ThemeProvider } from "@emotion/react";
import {StyledContainer} from "../ui/container";
import theme from "../ui/styles";

function App() {
  return (
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <Header/>
            <Main/>
            <Footer/>
          </StyledContainer>
      </ThemeProvider>
  );
}

export default App;