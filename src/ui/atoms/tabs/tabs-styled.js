import { Box, styled } from "@mui/system";

export const StyledTabsBox = styled(Box)`
	button {
		height: 20px;
		padding: 0;
		line-height: 20px;
		font-weight: ${props => props.theme.typography.fontWeight};
		font-size: ${props => props.theme.typography.fontSize};
		color: ${props => props.theme.palette.primary.main};
		text-transform: none;
		:nth-child(even) {
			padding: 0 50px;
		}
	}
`;
