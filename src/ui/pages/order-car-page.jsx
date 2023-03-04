import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { StyledContainer } from "../container";
import  {theme}  from '../styles';
import { Header } from "../organisms/header/header";
import { OrderCarMainSection } from "../organisms/order-car-main-section/order-car-main-section";


export const OrderCarPage = () => 
	<ThemeProvider theme={theme}>
		<CssBaseline>
			<StyledContainer>
				<Header/>
				<OrderCarMainSection/>
				
				{/* <RentPriceCard/>
				<MyOrderCard/> */}
			</StyledContainer>
		</CssBaseline>
	</ThemeProvider>