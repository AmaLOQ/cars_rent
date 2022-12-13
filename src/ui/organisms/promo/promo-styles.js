import { Box, styled, Typography } from "@mui/material";

export const PromoWrapper = styled(Box)`
	position: relative;
	display: grid;
	grid-template-columns: 470px 1fr;
	grid-template-rows: 225px minmax(116px, auto) minmax(159px, auto);
	min-height: 772px;
	padding: 148px 0px 124px 0px;
	@media ${props => props.theme.media.lg} {
		min-height: 560px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 150px minmax(auto, 120px) minmax( auto, 80px);
		padding: 70px 0 70px 0px;
	}
	@media ${props => props.theme.media.md} {
		min-height: 500px;
		padding: 70px 0 40px 0px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 120px minmax(auto, 100px) minmax( auto, 80px);
	}
	@media ${props => props.theme.media.sm} {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto auto;
		padding: 55px 0 26px;
	}
	@media ${props => props.theme.media.smallMobile} {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto 215px auto;
		padding: 55px 0 26px;
	}
`;

export const PromoTitle = styled(Typography)`
	align-self: end;
	font-weight: ${props => props.theme.typography.fontWeightExtraBold};
	font-size: ${props => props.theme.typography.h1.fontSize};
	line-height: 140%;
	letter-spacing: -0.3px;
	color: ${props => props.theme.palette.primary.main};
	text-transform: uppercase;
	@media ${props => props.theme.media.lg} {
		font-size: ${props => props.theme.typography.h2.fontSize};
	}
	@media ${props => props.theme.media.md} {
		font-size: 38px;
	}
	@media ${props => props.theme.media.sm} {
		font-size: 34px;
		text-align: center;
	}
`;

export const PromoRing = styled(Box)`
	grid-column: 2/3;
	grid-row: 1/4;
	justify-self: end;
	img {
		max-width: 100%;
	}
	@media ${props => props.theme.media.sm} {
		width: 70%;
		margin: 0 auto;
		margin-top: 30px;
		grid-column: 1/2;
		grid-row: 3/4;
	}
	@media ${props => props.theme.media.phone} {
		width: 100%;
		margin-top: 30px;
	}
	@media ${props => props.theme.media.smallMobile} {
		display: flex;
		flex-direction: column;
		img {
			align-self: center;
			max-height:  100%;
		}
	}
`;

export const PromoDescription = styled(Typography)`
	align-self: start;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.caption.fontSize};
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
	@media ${props => props.theme.media.md} {
		font-size: ${props => props.theme.typography.subtitle2.fontSize};
	}
	@media ${props => props.theme.media.sm} {
		font-size: ${props => props.theme.typography.h4.fontSize};
		text-align: center;
	}
`;

export const PromoDescriptionWrapper = styled(Typography)`
	margin-top: 20px;
	@media ${props => props.theme.media.sm} {
		margin: 0 auto;
		margin-top: 17px;
		width: 450px;
	}
	@media ${props => props.theme.media.phone} {
		width: 260px;
	}
`;

export const PromoBtnWrapper = styled(Box)`
	justify-self: start;
	align-self: start;
	@media ${props => props.theme.media.sm} {
		margin-top: 35px;
		justify-self: center;
	}
	@media ${props => props.theme.media.phone} {
		margin-top: 30px;
		button {
			padding: 14px 70px 11px 74px;
			font-size: ${props => props.theme.typography.button.fontSize};
		}
	}
	@media ${props => props.theme.media.smallMobile} {
		margin-top: 65px;
	}
`;

export const PromoRingSlideWrapper = styled(Box)`
	position: relative;
	display: grid;
	grid-column: 2/3;
	justify-content: end;
	align-content: end;
	right: 26.4%;
	bottom: -4.4%;
	grid-template-columns: 15px 15px 15px;
	grid-template-rows: 15px;
	gap: 10px;
	align-items: center;
	@media ${props => props.theme.media.sm} {
		bottom: -12px;
		right: 25%;
	}
	@media ${props => props.theme.media.smallMobile} {
		bottom: -12px;
		right: 30%;
	}
`;

export const BubleBigPromoWrapper = styled(Box)`
	display: none;
	@media ${props => props.theme.media.md} {
		position:	absolute;
		top: 2%;
		left: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 29px;
		height: 29px;
		img {
			width: 100%;
			max-height: 100%;
		}
	}
`;

export const BubleMiddlePromoWrapper = styled(BubleBigPromoWrapper)`
	display: none;
	@media ${props => props.theme.media.md} {
		top: 7%;
		left: 90%;
		width: 17px;
		height: 17px;
	}
`;

export const BubleMiddleSecondPromoWrapper = styled(BubleMiddlePromoWrapper)`
	display: none;
	@media ${props => props.theme.media.sm} {
		top: 43.5%;
		left: 12%;
	}
	@media ${props => props.theme.media.smallMobile} {
		top: 44.5%;
		left: 12%;
	}
`;

export const BubleSmallPromoWrapper = styled(BubleBigPromoWrapper)`
	display: none;
	@media ${props => props.theme.media.md} {
		top: 7%;
		left: 13.5%;
		width: 11px;
		height: 11px;
	}
`;