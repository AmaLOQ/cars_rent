import { styled } from "@mui/material";

export const StyledTabLeftButton = styled('div')`
	position: relative;
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background: ${props => props.theme.palette.primary.main};
	:hover {
		background: ${props => props.theme.palette.primary.light};
		color: ${props => props.theme.palette.white};
	}
	::before {
		position: absolute;
		content: "";
		width: 7px;
		height: 7px;
		border: 1.5px solid ${props => props.theme.palette.white};
		border-right: none;
		border-bottom: none;
		transform: rotate(-45deg);
		left: 41%;
	}`;

export const StyledTabRightButton = styled(StyledTabLeftButton)`
	::before {
	border-left: none;
	border-bottom: none;
	border-right: 1.5px solid ${props => props.theme.palette.white};
	transform: rotate(45deg);
	left: 32%;
}`;