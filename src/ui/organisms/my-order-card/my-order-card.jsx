import React from "react";
import { StyledPaperMyOrderCard, TitleMyOrderCard, Wrapper20pxMyOrderCard, RentRangeMyOrderCard,
	GridContainerSliderMyOrderCard, BasicTextMyOrderCard, GridContainerOneColumn, GridContainerCasco, GridContainerPrice, TotalPrice, BlackButtonContainer} from "./my-order-card-styles";
import { Slider } from "../../atoms/slider/slider";
import { Calendar } from "../../atoms/calendar/calendar";
import { ControlledSwitcher } from "../../atoms/simple-switcher/simple-switcher";
import { BlackButton } from "../../atoms/buttons/black-button/black-button";


export const MyOrderCard = () => 
	<StyledPaperMyOrderCard>
		<TitleMyOrderCard>Мой заказ</TitleMyOrderCard>
		<Wrapper20pxMyOrderCard><Calendar/></Wrapper20pxMyOrderCard>
		<Wrapper20pxMyOrderCard>
			<RentRangeMyOrderCard>Укажите срок аренды в днях:</RentRangeMyOrderCard>
			</Wrapper20pxMyOrderCard>
		<GridContainerSliderMyOrderCard>
			<GridContainerOneColumn><BasicTextMyOrderCard>7 500 ₽</BasicTextMyOrderCard></GridContainerOneColumn>
			<GridContainerOneColumn><Slider/></GridContainerOneColumn>
			<BasicTextMyOrderCard>5 дней</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>30 дней</BasicTextMyOrderCard>
		</GridContainerSliderMyOrderCard>
		<GridContainerCasco>
			<BasicTextMyOrderCard>КАСКО эконом</BasicTextMyOrderCard>
			<ControlledSwitcher/>
		</GridContainerCasco>
		<GridContainerPrice>
			<BasicTextMyOrderCard>Включенный пробег</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>250 км / сут</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>Доплата за превышение</BasicTextMyOrderCard>
			<BasicTextMyOrderCard>6 ₽ / км</BasicTextMyOrderCard>
		</GridContainerPrice>
		<TotalPrice>Итого: 7 250 ₽</TotalPrice>
		<BlackButtonContainer><BlackButton text={"Забронировать"} isBig/></BlackButtonContainer>
	</StyledPaperMyOrderCard>