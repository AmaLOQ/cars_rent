import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export const OrderCarMainContainer = styled(Box)`
	margin-top: 35px;
	gap: 30px;
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(2, auto);
	grid-template-rows: auto;
`;

export const OrderCarContainer = styled(Box)`
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-columns: minmax(auto, 111px) 1fr minmax(auto, 111px);
	grid-template-rows: auto 67px;
	img {
		grid-row: 1/2;
		align-self: end;
		max-width: 100%;
	}
`;

export const TabContainer = styled(Box)`
	grid-row: 1/3;
`;


export const CarContainerSlideCount = styled(Typography)`
	line-height: 17px;
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.button.fontSize};
	color: ${props => props.theme.palette.primary.main};
	text-transform: uppercase;
	align-self: center;
	justify-self: center;
	grid-column: 2/3;
`;