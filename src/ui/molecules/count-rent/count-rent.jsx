import React from "react";
import { Divider, CssBaseline } from "@mui/material";
import {
	CountPaper, 
	CountPaperTitle, 
	PriceWrapper,
	GridRow,
	GridDays,
	GridPrice,

	GridPriceDiscount
} from "./cont-rent-styles";

export default function CountRentCard() {
	return (
		<CssBaseline>
					<CountPaper>
			<CountPaperTitle>Стоимость аренды</CountPaperTitle>
			<PriceWrapper>
				<GridRow>
					<GridDays>От 4 суток</GridDays>
					<GridPrice>1805 ₽ </GridPrice>
					<GridPriceDiscount>-5%</GridPriceDiscount>
				</GridRow>
				<Divider sx={{marginBottom: 2.5}}/>
				<GridRow>
					<GridDays>От 4 суток</GridDays>
					<GridPrice>1805 ₽ </GridPrice>
					<GridPriceDiscount>-5%</GridPriceDiscount>
				</GridRow>
				<Divider sx={{marginBottom: 2.5}}/>
				<GridRow>
					<GridDays>От 4 суток</GridDays>
					<GridPrice>1805 ₽ </GridPrice>
					<GridPriceDiscount>-5%</GridPriceDiscount>
				</GridRow>
				<Divider sx={{marginBottom: 2.5}}/>
				<GridRow>
					<GridDays>От 4 суток</GridDays>
					<GridPrice>1805 ₽ </GridPrice>
					<GridPriceDiscount>-5%</GridPriceDiscount>
				</GridRow>
			</PriceWrapper>
		</CountPaper>
		</CssBaseline>
	)
}