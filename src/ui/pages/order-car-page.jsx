import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { StyledContainer } from "../container";
import { theme } from '../styles';
import { Header } from "../organisms/header/header";

export const OrderCarPage = () => 
	<ThemeProvider theme={theme}>
		<CssBaseline>
			<StyledContainer>
				<Header/>
			</StyledContainer>
		</CssBaseline>
	</ThemeProvider>