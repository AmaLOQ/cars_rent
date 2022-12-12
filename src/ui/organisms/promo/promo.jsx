import React, {useState} from "react";
import mainCar from "../../img/Main-car.png";
import { GradientButton } from "../../atoms/buttons/gradient-button/gradient-button";
import { RingPromoSlide, EmptyRingPromoSlide } from "../../atoms/rings-promo-slide/ring-promo-slide";
import { PromoWrapper, PromoTitle, PromoRing, PromoDescription, PromoRingSlideWrapper, PromoBtnWrapper} from "./promo-styles";
import { PopupCallbackDesk } from "../callback-popup/callback-popup";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";

export const Promo = () => {
	const [openCallbackPhone, setOpen] = useState(false)

	return(
		<PromoWrapper>
		<PromoTitle>Аренда автомобилей</PromoTitle>
		<PromoRing><img src={mainCar} alt="Авто" /></PromoRing>
		<PromoDescription>Мы объединили предложения частных автовладельцев по всей России</PromoDescription>
		<PromoBtnWrapper><GradientButton onClick={() => setOpen(true)} text="заказать звонок"/></PromoBtnWrapper>
		<PromoRingSlideWrapper>
			<RingPromoSlide/>
			<EmptyRingPromoSlide/>
			<EmptyRingPromoSlide/>
		</PromoRingSlideWrapper>
		<BasicModal open={openCallbackPhone} content={<PopupCallbackDesk/>} onClose={() => setOpen(false)}/>
	</PromoWrapper>
	)
}

