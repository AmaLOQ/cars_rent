import React from "react";
import {Header} from "../ui/organisms/header/header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import {theme} from "../ui/styles";
import { PositionedMenu } from "../ui/atoms/menu-active/menu-active";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledContainer>
            <Header/>
            {/* <PositionedMenu/> */}
          </StyledContainer>
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;