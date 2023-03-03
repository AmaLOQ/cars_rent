import { Box, styled } from "@mui/system";

export const StyledDottedText = styled(Box)`
	margin-left: 9px;
	position: relative;
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.body1.fontSize};
	line-height: 15px;
	text-transform: ${({ isUpper, theme }) => isUpper 
		? theme.textVariant.upper
		: theme.textVariant.capital};
	color: ${({ isBlack, theme }) => isBlack
		? theme.palette.primary.main
		: theme.palette.warning.light};
	::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -9px;
		transform: translateY(-50%);
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 100%;
		background-color: ${({ isBlack, theme }) => isBlack
			? theme.palette.primary.main
			: theme.palette.warning.light};
	}
`;