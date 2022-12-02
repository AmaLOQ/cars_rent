import { styled } from "@mui/material";
import { StyledButtonBlack } from "../black-button/black-button-style";

export const StyledButtonSqr = styled(StyledButtonBlack)`
	border: 1px solid ${props => props.theme.palette.primary.main};
	border-radius: 4px;
	padding: 6.71px 22.5px; 
	box-shadow: none;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
	background: ${props => props.theme.palette.white};
	:hover {
		background: ${props => props.theme.palette.primary.main};
		color: ${props => props.theme.palette.white};
}`;