import React from "react";
import {Header} from "../ui/organisms/header/header";
import {Promo} from "../ui/organisms/promo/promo";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import {theme} from "../ui/styles";
import { Footer } from "../ui/organisms/footer/footer";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledContainer>
            <Header/>
            <Promo/>
            <Footer/>
          </StyledContainer>
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;