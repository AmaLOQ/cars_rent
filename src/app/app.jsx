import React from "react";
import {Header} from "../ui/organisms/header/header";
import Main from "../ui/organism/promo/promo";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {StyledContainer} from "../ui/container";
import {theme} from "../ui/styles";
import { Footer } from "../ui/organisms/footer/footer";
import { LinksGroup } from "../ui/molecules/promo-links-group/promo-links-group";

const linksData = [
	{text: 'Аренда Авто',  isHash: true, variant: 'menuActive', isUnderlined: false,},
]

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledContainer>
            <LinksGroup linksData={linksData}/>
            {/* <Header/>
            <Main/>
            <Footer/> */}
          </StyledContainer>
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;