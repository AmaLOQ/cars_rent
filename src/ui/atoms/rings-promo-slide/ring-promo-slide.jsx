import React from "react";
import { RingPromo, EmptyWhiteRingPromo } from "./ring-promo-slide-styles";

export function RingPromoSlide() {
	return <RingPromo/>
}

export function EmptyRingPromoSlide() {
	return (
		<RingPromo>
			<EmptyWhiteRingPromo/>
		</RingPromo>
	)
}