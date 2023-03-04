import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export const OwnerCarMainContainer = styled(Box)`
	max-width: 307px;
	align-items: center;
	gap: 5px;
	display: grid;
	grid-template-columns: 3 auto;
	grid-template-rows: 3 auto;
`; 

export const OwnerCarName = styled(Typography)`
	grid-column: 2 / 3;
	line-height: 17px;
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.button.fontSize};
	color: ${props => props.theme.palette.primary.main};
`; 

export const OwnerCarAvatar = styled(Box)`
	grid-column: 1 / 2;
	img {
		max-width: 100%;
	}
`; 


export const OwnerCarModel = styled(Typography)`
	line-height: 49px;
	font-weight: ${props => props.theme.typography.fontWeightBold};
	font-size: ${props => props.theme.typography.h2.fontSize};
	color: ${props => props.theme.palette.primary.main};
	grid-column: 1 / 4;
	letter-spacing: -0.4px;
`; 

export const OwnerCarStarsContainer = styled(Box)`
	grid-column: 1 / 3 ;
`; 

export const OwnerCarStatus = styled(Box)`
	grid-column: 3 / 4 ;
`; 

export const OwnerCarFeedbackContainer = styled(Typography)`
	grid-column: 3 / 4;
`; 

