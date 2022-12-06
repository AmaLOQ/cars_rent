import React from "react";
import Header from "../ui/organism/header/header";
import {Promo} from "../ui/organism/promo/promo";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import {theme} from "../ui/styles";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledContainer>
            <Header/>
            <Promo/>
          </StyledContainer>
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;