import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { StyledContainer } from "../container";
import  {theme}  from '../styles';
import { Header } from "../organisms/header/header";
import { DottedTextContainer } from "../molecules/dotted-text-group/dotted-text-group-styles";
import { DottedGroup } from "../molecules/dotted-text-group/dotted-text-group";
import { dottedData } from "../molecules/dotted-text-group/dotted-text.data";

export const OrderCarPage = () => 
	<ThemeProvider theme={theme}>
		<CssBaseline>
			<StyledContainer>
				<Header/>
				<DottedTextContainer>
					<DottedGroup dottedData={dottedData}/>
				</DottedTextContainer>
				{/* <RentPriceCard/>
				<MyOrderCard/> */}
			</StyledContainer>
		</CssBaseline>
	</ThemeProvider>