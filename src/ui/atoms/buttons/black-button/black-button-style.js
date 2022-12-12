import { Button, styled, Box } from "@mui/material";

export const StyledButtonBlack = styled(Button)`
	border-radius: 100px;
	font-size: ${({ isBigBlackBtn, theme }) => isBigBlackBtn 
		? theme.customComponents.buttons.bigBlackBtn.fontSize 
		: theme.typography.button};
	padding: ${({ isBigBlackBtn, theme }) => isBigBlackBtn 
		? theme.customComponents.buttons.bigBlackBtn.padding 
		: '7px 18px'};
	text-transform: ${({ isBigBlackBtn, theme }) => isBigBlackBtn 
		? theme.customComponents.buttons.bigBlackBtn.textTransform 
		: 'lowercase'};
	line-height: 140%;
	background: ${({theme}) => theme.palette.primary.main};
	color: ${({theme} )=> theme.palette.white};
	font-weight: ${({theme} )=> theme.typography.fontWeightMedium};
	:hover {
		background-color: ${({theme} )=> theme.palette.primary.light};
	}
	@media ${props => props.theme.media.md} {
		font-size: ${props => props.theme.typography.body1.fontSize} ;
	}
`;

export const ButtonBlackWrapper = styled(Box)`
	display: flex;
	justify-content: center;
`;