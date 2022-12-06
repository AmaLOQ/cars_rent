import { Box, styled, Typography } from "@mui/material";

export const PromoWrapper = styled(Box)`
	display: grid;
	grid-template-columns: 470px 1fr;
	grid-template-rows: 225px minmax(116px, auto) minmax(145px, auto) auto;
	min-height: 772px;
	padding: 148px 0px 124px 0px;
`;

export const PromoTitle = styled(Typography)`
	align-self: end;
	font-weight: ${props => props.theme.typography.fontWeightExtraBold};
	font-size: ${props => props.theme.typography.h1.fontSize};
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
	text-transform: uppercase;
`;

export const PromoRing = styled(Box)`
	position: relative;
	grid-column: 2/3;
	grid-row: 1/4;
	justify-self: end;
	width: 456px;
	height: 455px;
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
	border-radius: 100%;
	img{
		position: relative;
		top: 50px;
		right: 252px;
	}
`;

export const PromoDescription = styled(Typography)`
	margin-top: 19px;
	align-self: start;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.caption.fontSize};
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
`;

export const PromoRingSlideWrapper = styled(Box)`
	position: relative;
	display: grid;
	grid-column: 2/3;
	justify-content: end;
	align-content: end;
	right: 187px;
	bottom: 2px;
	grid-template-columns: 15px 15px 15px;
	grid-template-rows: 15px;
	gap: 10px;
	align-items: center;
`;

export const OrderBtnWrapper = styled(Box)`
	grid-row: 3/5;
`;