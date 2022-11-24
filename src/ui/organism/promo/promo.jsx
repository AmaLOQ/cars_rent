import React from "react";
import { CssBaseline,  } from "@mui/material";
import mainCar from "../../img/Main_car.png"
import OrderBtn from "../../atoms/buttons/order-call-btn";
import { RingPromoSlide, EmptyRingPromoSlide } from "../../atoms/rings-promo-slide/ring-promo-slide";
import {
	PromoWrapper,
	PromoTitle,
	PromoRing,
	PromoDescr,
	PromoRingSlideWrapper,
	OrderBtnWrapper
} from "./promo-styles";

export default function Main() {
	return (
		<CssBaseline>
			<PromoWrapper>
				<PromoTitle>Аренда автомобилей</PromoTitle>
				<PromoRing><img src={mainCar} alt="Авто" /></PromoRing>
				<PromoDescr>Мы объединили предложения частных автовладельцев по всей России</PromoDescr>
				<OrderBtnWrapper><OrderBtn/></OrderBtnWrapper>
				<PromoRingSlideWrapper>
					<RingPromoSlide/>
					<EmptyRingPromoSlide/>
					<EmptyRingPromoSlide/>
				</PromoRingSlideWrapper>
			</PromoWrapper>
		</CssBaseline>
	)
}