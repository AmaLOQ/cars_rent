import { styled, Typography, Input, Box } from '@mui/material';
import Paper from '@mui/material/Paper';

const Overflow = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(36, 36, 36, 0.4);
`;
const PaperCallback = styled(Paper)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translateY(-50%);
	transform: translateX(-50%);
	width: 380px;
	height: 360px;
	padding: 40px 30px 50px;
	background: ${props => props.theme.palette.white};
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
`;
const PopupTitel = styled(Typography)`
	font: ${props => props.theme.typography.subtitle1};
	line-height: 29px;
	text-align: center;
`;


const PopupDescr = styled(Typography)`
	font-size: ${props => props.theme.typography.button.fontSize};
	line-height: 140%;
	text-transform: none;
	text-align: center;
`;

const BoxPopupDescr = styled(Typography)`
	margin-top: 15px;
`;

const PopupInput = styled(Input)`
	width: 100%;
	padding: 7.88px 15px;
	border: 1px solid #242424;
	border-radius: 4px;
	font-weight: ${props => props.theme.typography.fontWeightLight};
	font-size: ${props => props.theme.typography.button};
	line-height: 18px;
`;
const BoxPopupInput = styled(Box)`
	margin-top: 25px;
	margin-bottom: 15px;
`;





export {
	Overflow,
	PaperCallback,
	PopupTitel, 
	PopupDescr,
	BoxPopupDescr,
	PopupInput,
	BoxPopupInput
}