import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { StyledContainer } from "../container";
import { theme } from '../styles';
import { Header } from "../organisms/header/header";
import { RentPriceCard } from "../organisms/rent-price-card/rent-price-card";
import { MyOrderCard } from "../organisms/my-order-card/my-order-card";

export const OrderCarPage = () => 
	<ThemeProvider theme={theme}>
		<CssBaseline>
			<StyledContainer>
				<Header/>

				<MyOrderCard/>
			</StyledContainer>
		</CssBaseline>
	</ThemeProvider>