import { Input, styled } from "@mui/material";

export const StyledInput = styled(Input)`
	width: 100%;
	padding: 8.2px 9px 5px;
	border: 1px solid ${props => props.theme.palette.primary.main};
	border-radius: 4px;
	line-height: 18px;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h5.fontSize};
`;