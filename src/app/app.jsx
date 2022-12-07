import React from "react";
import {Header} from "../ui/organisms/header/header";
import {Promo} from "../ui/organisms/promo/promo";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import {theme} from "../ui/styles";
import { Footer } from "../ui/organisms/footer/footer";
import { LinksGroup } from "../ui/molecules/promo-links-group/promo-links-group";


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