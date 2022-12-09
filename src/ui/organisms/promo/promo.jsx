import React from "react";
import mainCar from "../../img/Main-car.png";
import { GradientButton } from "../../atoms/buttons/gradient-button/gradient-button";
import { RingPromoSlide, EmptyRingPromoSlide } from "../../atoms/rings-promo-slide/ring-promo-slide";
import { PromoWrapper, PromoTitle, PromoRing, PromoDescription, PromoRingSlideWrapper, PromoBtnWrapper} from "./promo-styles";

export const Promo = () => 
	<PromoWrapper>
		<PromoTitle>Аренда автомобилей</PromoTitle>
		<PromoRing><img src={mainCar} alt="Авто" /></PromoRing>
		<PromoDescription>Мы объединили предложения частных автовладельцев по всей России</PromoDescription>
		<PromoBtnWrapper><GradientButton text="заказать звонок"/></PromoBtnWrapper>
		<PromoRingSlideWrapper>
			<RingPromoSlide/>
			<EmptyRingPromoSlide/>
			<EmptyRingPromoSlide/>
		</PromoRingSlideWrapper>
	</PromoWrapper>
