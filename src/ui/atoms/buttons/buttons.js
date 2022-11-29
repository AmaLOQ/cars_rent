import { Button, styled, Box } from "@mui/material";
import {theme} from "../../styles";

export const ButtonBlack = styled(Button)`
	border-radius: 100px;
	font-size: ${({ blackBtn }) => blackBtn ? theme.blackBtn.fontSize : theme.typography.button};
	padding: ${({ blackBtn }) => blackBtn ? theme.blackBtn : '7px 18px'};
	text-transform: ${({ blackBtn }) => blackBtn ? theme.blackBtn : 'lowercase'};
	line-height: 140%;
	background: ${props => props.theme.palette.primary.main};
	color: ${props => props.theme.palette.white};
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	:hover {
		background-color: ${props => props.theme.palette.primary.light};
}`;

export const ButtonBlackWrapper = styled(Box)`
	display: flex;
	justify-content: center;
`;

export const ButtonGradient = styled(Button)`
	border-radius: 100px;
	font-size: ${({ gradientBtn }) => gradientBtn ? theme.gradientBtn : theme.typography.subtitle2.fontSize};
	padding: ${({ gradientBtn }) => gradientBtn ? theme.gradientBtn : '17px 40px'};
	text-transform: ${({ gradientBtn }) => gradientBtn ? theme.gradientBtn : 'uppercase'};
	line-height: 140%;
	color: ${props => props.theme.palette.white};
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
	:hover {
		background: linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%);
		color: ${props => props.theme.palette.white};
}`;



export const ButtonSqr = styled(ButtonBlack)`
	border: 1px solid ${props => props.theme.palette.primary.main};;
	border-radius: 4px;
	padding: 6.71px 27px; 
	box-shadow: none;
	color: ${props => props.theme.palette.primary.main};
	background: ${props => props.theme.palette.white};
	:hover {
		background: ${props => props.theme.palette.primary.main};
		color: ${props => props.theme.palette.white};
}`;



export const TabLeftBtn = styled('div')`
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

export const TabRightBtn = styled(TabLeftBtn)`
	::before {
	border-left: none;
	border-bottom: none;
	border-right: 1.5px solid ${props => props.theme.palette.white};
	transform: rotate(45deg);
	left: 32%;
}`;





