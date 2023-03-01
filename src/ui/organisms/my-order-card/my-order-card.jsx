import React from "react";
import { StyledPaperMyOrderCard, TitleMyOrderCard, Wrapper20pxMyOrderCard, RentRangeMyOrderCard,
	GridContainerSliderMyOrderCard, BasicTextMyOrderCard, GridContainerOneColumn, GridContainerCasco} from "./my-order-card-styles";
import { Calendar } from "../../atoms/calendar/calendar";
import { Slider } from "../../atoms/slider/slider";
import { ControlledSwitcher } from "../../atoms/simple-switcher/simple-switcher";


export const MyOrderCard = () => 
	<StyledPaperMyOrderCard>
		<TitleMyOrderCard>Мой заказ</TitleMyOrderCard>
		<Wrapper20pxMyOrderCard><Calendar/></Wrapper20pxMyOrderCard>
		<Wrapper20pxMyOrderCard><RentRangeMyOrderCard>Укажите срок аренды в днях:</RentRangeMyOrderCard></Wrapper20pxMyOrderCard>
		<GridContainerSliderMyOrderCard>
			<GridContainerOneColumn><BasicTextMyOrderCard>7 500 р</BasicTextMyOrderCard></GridContainerOneColumn>
			<GridContainerOneColumn><Slider/></GridContainerOneColumn>
			<BasicTextMyOrderCard>5 дней</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>30 дней</BasicTextMyOrderCard>
		</GridContainerSliderMyOrderCard>
		<GridContainerCasco>
			<BasicTextMyOrderCard>КАСКО эконом</BasicTextMyOrderCard>
			<ControlledSwitcher/>
		</GridContainerCasco>
	</StyledPaperMyOrderCard>