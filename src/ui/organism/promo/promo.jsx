import React from "react";
import { CssBaseline,  } from "@mui/material";
import mainCar from "../../img/Main_car.png"
import {GradientButton} from '../../atoms/buttons/gradient-button/gradient-button'
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
				<OrderBtnWrapper><GradientButton text="заказать звонок"/></OrderBtnWrapper>
				<PromoRingSlideWrapper>
					<RingPromoSlide/>
					<EmptyRingPromoSlide/>
					<EmptyRingPromoSlide/>
				</PromoRingSlideWrapper>
			</PromoWrapper>
		</CssBaseline>
	)
}