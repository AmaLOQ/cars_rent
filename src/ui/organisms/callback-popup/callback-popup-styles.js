import { styled, Typography, Box, IconButton} from '@mui/material';
import Paper from '@mui/material/Paper';

export const Overflow = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(36, 36, 36, 0.4);
`;

export const PaperCallback = styled(Paper)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 380px;
	height: 360px;
	padding: 40px 30px 50px;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	background: ${props => props.theme.palette.white};
`;

export const PopupTitle = styled(Typography)`
	line-height: 29px;
	text-align: center;
	letter-spacing: -0.25px;
	font-size: ${props => props.theme.typography.subtitle1.fontSize};
	font-weight: ${props => props.theme.typography.subtitle1.fontWeight};
`;

export const PopupDescr = styled(Typography)`
	line-height: 140%;
	text-transform: none;
	text-align: center;
	letter-spacing: 0.13px;
	font-size: ${props => props.theme.typography.h5.fontSize};
`;

export const BoxPopupDescr = styled(Typography)`
	margin-top: 15px;
`;

export const BoxPopupInput = styled(Box)`
	margin-top: 25px;
	margin-bottom: 5px;
`;

export const StyledIconButton = styled(IconButton)`
	position: absolute;
	top: 0px;
	right: 1px;
`;





