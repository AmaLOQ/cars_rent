import { Button, styled, Box } from "@mui/material";

export const StyledButtonBlack = styled(Button)`
	border-radius: 100px;
	font-size: ${({ isBig, theme }) => isBig 
		? theme.customComponents.buttons.bigBlackBtn.fontSize 
		: theme.typography.button};
	padding: ${({ isBig, theme }) => isBig 
		? theme.customComponents.buttons.bigBlackBtn.padding 
		: '7px 18px'};
	text-transform: ${({ isBig, theme }) => isBig 
		? theme.customComponents.buttons.bigBlackBtn.textTransform 
		: 'lowercase'};
	line-height: 140%;
	background: ${({theme}) => theme.palette.primary.main};
	color: ${({theme} )=> theme.palette.white};
	font-weight: ${({theme} )=> theme.typography.fontWeightMedium};
	:hover {
		background-color: ${({theme} )=> theme.palette.primary.light};
	}
`;

export const ButtonBlackWrapper = styled(Box)`
	display: flex;
	justify-content: center;
`;