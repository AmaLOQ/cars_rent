import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export const StyledCharacteristicsContainer = styled(Box)`
	margin-top: 82px;
	display: grid;
	grid-template-columns: 1 auto;
	grid-template-rows: 3 auto;
`;

export const StyledCharacteristicsTitle = styled(Typography)`
	line-height: 29px;
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.subtitle1.fontSize};
	color: ${props => props.theme.palette.primary.main};
`;

export const StyledCharacteristicsTabContainer = styled(Box)`
	margin-top: 17px;
`;