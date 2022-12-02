import { Button, styled } from "@mui/material";

export const StyledButtonGradient = styled(Button)`
	border-radius: 100px;
	font-size: ${({ isSmallGradientBtn, theme }) => isSmallGradientBtn 
		? theme.customComponents.buttons.smallGradientBtn.fontSize 
		: theme.typography.subtitle2.fontSize};
	padding: ${({ isSmallGradientBtn, theme }) => isSmallGradientBtn 
		? theme.customComponents.buttons.smallGradientBtn.padding 
		: '17px 40px'};
	text-transform: ${({ isSmallGradientBtn, theme }) => isSmallGradientBtn 
		? theme.customComponents.buttons.smallGradientBtn.textTransform 
		: 'uppercase'};
	line-height: 140%;
	color: ${({theme} ) => theme.palette.white};
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
	:hover {
		background: linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%);
		color: ${({theme} ) => theme.palette.white};
}`;