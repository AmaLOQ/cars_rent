import {React, useState} from "react";
import { MainCar } from "../../atoms/images-component/main-car";
import { Buble } from "../../atoms/images-component/buble";
import { GradientButton } from "../../atoms/buttons/gradient-button/gradient-button";
import { RingPromoSlide, EmptyRingPromoSlide } from "../../atoms/rings-promo-slide/ring-promo-slide";
import { PromoWrapper, PromoTitle, PromoRing, PromoDescription, PromoRingSlideWrapper, PromoBtnWrapper, 
	PromoDescriptionWrapper, BubleBigPromoWrapper, BubleMiddlePromoWrapper, BubleMiddleSecondPromoWrapper,
	BubleSmallPromoWrapper} from "./promo-styles";
import { CallbackPopupDesk } from "../callback-popup/callback-popup-desk";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";

export const Promo = () => {
	const [openCallbackPhone, setOpen] = useState(false)

	return(
	<PromoWrapper>
		<PromoTitle>Аренда автомобилей</PromoTitle>
		<PromoRing>
			<MainCar/>
			<PromoRingSlideWrapper>
				<RingPromoSlide/>
				<EmptyRingPromoSlide/>
				<EmptyRingPromoSlide/>
			</PromoRingSlideWrapper>
		</PromoRing>
		<PromoDescriptionWrapper><PromoDescription>Мы объединили предложения частных автовладельцев по всей России</PromoDescription></PromoDescriptionWrapper>
		<PromoBtnWrapper><GradientButton onClick={() => setOpen(true)} text="заказать звонок"/></PromoBtnWrapper>
		<BasicModal open={openCallbackPhone} content={<CallbackPopupDesk/>} onClose={() => setOpen(false)}/>
		<BubleBigPromoWrapper><Buble/></BubleBigPromoWrapper>
		<BubleMiddlePromoWrapper><Buble/></BubleMiddlePromoWrapper>
		<BubleMiddleSecondPromoWrapper><Buble/></BubleMiddleSecondPromoWrapper>
		<BubleMiddleSecondPromoWrapper><Buble/></BubleMiddleSecondPromoWrapper>
		<BubleSmallPromoWrapper><Buble/></BubleSmallPromoWrapper>
	</PromoWrapper>
	)
}

