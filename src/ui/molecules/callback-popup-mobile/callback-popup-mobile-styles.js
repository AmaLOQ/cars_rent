import { Paper, styled } from "@mui/material";
import { PopupTitel } from "../callback-popup/callback-popup-styles";

const PaperCallbackMob = styled(Paper)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 343px;
	height: 356px;
	padding: 40px 15px 60px;
	background: ${props => props.theme.palette.white};
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
`;

const PopupTitleMobile = styled(PopupTitel)`
	font-size: ${props => props.theme.typography.body2.fontSize};
	line-height: 27px;
`;

export {
	PaperCallbackMob,
	PopupTitleMobile
}