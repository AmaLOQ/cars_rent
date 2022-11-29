import { Typography, styled, Box } from "@mui/material";

export const CheckboxDescr = styled(Typography)`
	width: 232px;
	margin-left: 12px;
	line-height: 18px;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.body1.fontSize};
`;

export const BoxCheckbox = styled(Box)`
	display: flex;
	margin: 15px 0 30px;
`;