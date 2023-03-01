import React from "react";
import { StyledPaperMyOrderCard, TitleMyOrderCard, Wrapper20pxMyOrderCard, RentRangeMyOrderCard,
	GridContainerSliderMyOrderCard, BasicTextMyOrderCard, GridContainerOneColumn, GridContainerCasco} from "./my-order-card-styles";
import { Slider } from "../../atoms/slider/slider";
import { Calendar } from "../../atoms/calendar/calendar";


export const MyOrderCard = () => 
	<StyledPaperMyOrderCard>
		<TitleMyOrderCard>Мой заказ</TitleMyOrderCard>
		<Wrapper20pxMyOrderCard><Calendar/></Wrapper20pxMyOrderCard>
		<Wrapper20pxMyOrderCard>
			<RentRangeMyOrderCard>Укажите срок аренды в днях:</RentRangeMyOrderCard>
			</Wrapper20pxMyOrderCard>
		<GridContainerSliderMyOrderCard>
			<GridContainerOneColumn><BasicTextMyOrderCard>7 500 р</BasicTextMyOrderCard></GridContainerOneColumn>
			<GridContainerOneColumn><Slider/></GridContainerOneColumn>
			<BasicTextMyOrderCard>5 дней</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>30 дней</BasicTextMyOrderCard>
		</GridContainerSliderMyOrderCard>
	</StyledPaperMyOrderCard>