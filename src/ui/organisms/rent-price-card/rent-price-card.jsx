import React from "react";
import { StyledPaperRentPriceCard, TitleRentPriceCard, GridContainereRentPriceCard } from "./ret-price-card-styles";
import { CountRentPriceGroup } from "../../molecules/count-rent-price-group/count-rent-price-group";
import { rentData } from "./rent-data";

export const RentPriceCard = () => 
	<StyledPaperRentPriceCard>
		<TitleRentPriceCard>Стоимость аренды</TitleRentPriceCard>
		<GridContainereRentPriceCard>
			<CountRentPriceGroup rentData={rentData}/>
		</GridContainereRentPriceCard>
	</StyledPaperRentPriceCard>