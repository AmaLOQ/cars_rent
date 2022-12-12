import { Box, styled, Typography } from "@mui/material";

export const PromoWrapper = styled(Box)`
	display: grid;
	grid-template-columns: 470px 1fr;
	grid-template-rows: 225px minmax(116px, auto) minmax(159px, auto);
	min-height: 772px;
	padding: 148px 0px 124px 0px;
`;

export const PromoTitle = styled(Typography)`
	align-self: end;
	font-weight: ${props => props.theme.typography.fontWeightExtraBold};
	font-size: ${props => props.theme.typography.h1.fontSize};
	line-height: 140%;
	letter-spacing: -0.3px;
	color: ${props => props.theme.palette.primary.main};
	text-transform: uppercase;
`;

export const PromoRing = styled(Box)`
	grid-column: 2/3;
	grid-row: 1/4;
	justify-self: end;
	img {
		max-width: 100%;
	}
`;

export const PromoDescription = styled(Typography)`
	margin-top: 20px;
	align-self: start;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.caption.fontSize};
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
`;

export const PromoBtnWrapper = styled(Box)`
	justify-self: start;
	align-self: start;
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
`;

export const OrderBtnWrapper = styled(Box)`
	grid-row: 3/5;
`;