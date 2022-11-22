import { styled, Typography, Input } from '@mui/material';
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
	font-weight: 700;
	font-size: ${props => props.theme.typography.caption};
	line-height: 29px;
	text-align: center;
`;

const PopupDescr = styled(Typography)`
	margin-top: 15px;
	font-size: 14px;
	line-height: 140%;
`;

const PopupInput = styled(Input)`
	margin-top: 25px;
	margin-bottom: 15px;
	width: 100%;
	padding: 6.5px 15px;
	border: 1px solid #242424;
	border-radius: 4px;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
`;

const CheckboxDescr = styled(Typography)`
	width: 232px;
	margin-left: 12px;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	margin-bottom: 30px;
`;



export {
	PaperCallback,
	PopupTitel, 
	PopupDescr,
	PopupInput, 
	CheckboxDescr, 
	Overflow
}