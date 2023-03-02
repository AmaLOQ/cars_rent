import { Paper, styled, Box, Typography } from "@mui/material";

export const StyledPaperRentPriceCard = styled(Paper)`
	width: 370px;
	height: 390px;
	padding: 30px 25px 37px 23px;
	background: ${props => props.theme.palette.white};
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
`;

export const TitleRentPriceCard = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.subtitle2.fontSize};
	line-height: 140%;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
	text-align: center;
`;

export const GridContainereRentPriceCard = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 22px;
	grid-template-rows: repeat(4, auto);
	margin-top: 34px;
`;
