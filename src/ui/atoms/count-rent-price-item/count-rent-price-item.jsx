import React from "react";
import { StyledGridContainer, DaysOfRent, Price, PriceSpan, Discount, DiscountMark, SlashSpan } from './count-rent-price-item.styles';

export const CountRentPriceItem = ({...el}, {...props}) =>
	<StyledGridContainer>
		<DaysOfRent>От {el.days} суток</DaysOfRent>
		<Price>{el.price} <SlashSpan> /</SlashSpan> <PriceSpan>Сутки</PriceSpan></Price>
		<DiscountMark><Discount>-{el.discount}%</Discount></DiscountMark>
	</StyledGridContainer>