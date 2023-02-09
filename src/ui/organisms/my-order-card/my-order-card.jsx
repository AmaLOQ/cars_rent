import React from "react";
import { StyledPaperMyOrderCard, TitleMyOrderCard, Wrapper20pxMyOrderCard, RentRangeMyOrderCard,
	GridContainerSliderMyOrderCard} from "./my-order-card-styles";
import { Calendar } from "../../atoms/calendar/calendar";


export const MyOrderCard = () => 
	<StyledPaperMyOrderCard>
		<TitleMyOrderCard>Мой заказ</TitleMyOrderCard>
		<Wrapper20pxMyOrderCard><Calendar/></Wrapper20pxMyOrderCard>
		<Wrapper20pxMyOrderCard><RentRangeMyOrderCard>Укажите срок аренды в днях:</RentRangeMyOrderCard></Wrapper20pxMyOrderCard>
		<GridContainerSliderMyOrderCard>
			
		</GridContainerSliderMyOrderCard>
	</StyledPaperMyOrderCard>