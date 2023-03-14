import React from "react";
import { DottedTextContainer } from "../../molecules/dotted-text-group/dotted-text-group-styles";
import { DottedGroup } from "../../molecules/dotted-text-group/dotted-text-group";
import { dottedData } from "../../molecules/dotted-text-group/dotted-text.data";
import { LeftTabButton, RightTabButton } from "../../atoms/buttons/tabs-buttons/tabs-buttons";
import { OrderCar } from "../../atoms/images-component/order-car";
import { MyOrderCard } from "../../molecules/my-order-card/my-order-card";
import { OrderCarMainContainer, OrderCarContainer, CarContainerSlideCount, TabContainer, FeedbacksAndCharactersContainer } from "./order-car-main-section-styles";
import { OwnerCarGroup } from "../../molecules/owner-car-info/owner-car-info-group";
import { ownerCarData } from "../../molecules/owner-car-info/owner-car-data";
import { RentPriceCard } from "../../molecules/rent-price-card/rent-price-card";

export const OrderCarMainSection = () =>
	<>  
		<DottedTextContainer>
			<DottedGroup dottedData={dottedData}/>
		</DottedTextContainer>
		<OrderCarMainContainer>
			<OrderCarContainer>
				<TabContainer><LeftTabButton/></TabContainer>
				<OrderCar/>
				<TabContainer><RightTabButton/></TabContainer>
				<CarContainerSlideCount>1 / 5</CarContainerSlideCount>
			</OrderCarContainer>
			<MyOrderCard/>
			<FeedbacksAndCharactersContainer>
				<OwnerCarGroup ownerCarData={ownerCarData}/>
			</FeedbacksAndCharactersContainer>
			<RentPriceCard/>
		</OrderCarMainContainer>
	</>

