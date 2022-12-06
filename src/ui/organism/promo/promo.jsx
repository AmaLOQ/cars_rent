import React from "react";
import { CssBaseline,  } from "@mui/material";
import mainCar from "../../img/Main_car.png"
import OrderBtn from "../../atoms/buttons/order-call-btn";
import { RingPromoSlide, EmptyRingPromoSlide } from "../../atoms/rings-promo-slide/ring-promo-slide";
import {
	PromoWrapper,
	PromoTitle,
	PromoRing,
	PromoDescription,
	PromoRingSlideWrapper,
	OrderBtnWrapper
} from "./promo-styles";

export const Promo = () => 

		<CssBaseline>
			<PromoWrapper>
				<PromoTitle>Аренда автомобилей</PromoTitle>
				<PromoRing><img src={mainCar} alt="Авто" /></PromoRing>
				<PromoDescription>Мы объединили предложения частных автовладельцев по всей России</PromoDescription>
				<OrderBtnWrapper><OrderBtn/></OrderBtnWrapper>
				<PromoRingSlideWrapper>
					<RingPromoSlide/>
					<EmptyRingPromoSlide/>
					<EmptyRingPromoSlide/>
				</PromoRingSlideWrapper>
			</PromoWrapper>
		</CssBaseline>
