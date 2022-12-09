import React from "react";
import { ThemeProvider } from "@emotion/react";
import {theme} from "../ui/styles";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import { HomePage } from "../ui/templates/Home-page";


export const App = () =>  
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledContainer>
            <HomePage/>
          </StyledContainer>
        </CssBaseline>
      </ThemeProvider>
