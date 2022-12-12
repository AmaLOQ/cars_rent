import React from "react";
import {Header} from '../organisms/header/header';
import {Promo} from '../organisms/promo/promo';
import {Footer} from '../organisms/footer/footer';
import {StyledContainer} from "../container"
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {theme} from '../styles'

export const HomePage = () => 
	<ThemeProvider theme={theme}>
		<StyledContainer>
			<CssBaseline>
				<Header/>
				{/* <Promo/>
				<Footer/> */}
			</CssBaseline>
		</StyledContainer>
	</ThemeProvider>


