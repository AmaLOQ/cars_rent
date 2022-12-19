import { Box, styled, Typography } from "@mui/material";

export const StyledGridContainer = styled(Box)`
	display: grid;
	grid-template-columns: auto minmax(174px, 1fr);
	grid-template-rows: repeat(2, 15px);
	line-height: 140%;
	text-transform: uppercase;
	:not(:last-child) {
		border-bottom: 1px solid ${props => props.theme.palette.primary.main};
		padding-bottom: 23px;
	} 
`;

export const DaysOfRent = styled(Typography)`
	position: relative;
	top: -4px;
	letter-spacing: 0.35px;
	align-self: start;
	font-weight: ${props => props.theme.typography.fontWeigh};
	font-size: ${props => props.theme.typography.button.fontSize};
	line-height: 140%;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
`;


export const Price = styled(Typography)`
	margin-right: 15px;
	align-self: end;
	justify-self: end;
	grid-row: 1/3;
	grid-column: 2/3;
	font-weight: ${props => props.theme.typography.fontWeightBold};
	font-size: ${props => props.theme.typography.body2.fontSize};
	color: ${props => props.theme.palette.primary.main};
`;

export const SlashSpan = styled(Typography)`
	display: inline-block;
	font-size: ${props => props.theme.typography.body2.fontSize};
	font-weight: ${props => props.theme.typography.fontWeightBold};
	color: ${props => props.theme.palette.primary.main};
	letter-spacing: 2px;
	::before {
		content: 'P';
		vertical-align: middle;
		border-bottom: 0.07em solid;
		line-height: 0.3em;
		display: inline-block;
		width: 0.5em;
	}
`;

export const PriceSpan = styled(Typography)`
	display: inline-block;
	text-transform: uppercase;
	font-size: ${props => props.theme.typography.subtitle2.fontSize};
	color: ${props => props.theme.palette.primary.main};
`;

export const Discount = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.body1.fontSize};
	color: ${props => props.theme.palette.primary.main};
`;

export const DiscountMark = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33px;
	height: 15px;
	background: ${props => props.theme.palette.warning.main};
	border-radius: 4px;
`;