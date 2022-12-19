import { Box, styled, Typography, Paper } from "@mui/material";

export const StyledPaperMyOrderCard = styled(Paper)`
	width: 370px;
	height: 450px;
	border-radius: 4px;
	padding: 30px 25px 25px;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	background: ${props => props.theme.palette.white};
`;

export const TitleMyOrderCard = styled(Typography)`
	text-align: center;
	text-transform: none;
	font-weight: ${props => props.theme.typography.fontWeightBold};
	font-size: ${props => props.theme.typography.subtitle1.fontSize};
	line-height: 29px;
	color: ${props => props.theme.palette.primary.main};
`;

export const DateWrapperMyOrderCard = styled(Box)`
	margin-top: 20px;
`;

