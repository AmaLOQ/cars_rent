import { Button, styled } from "@mui/material";

const ButtonIn = styled(Button)`
	border-radius: 100px;
	width: 80px;
	padding: 7px, 18px;
	text-transform: lowercase;
	line-height: 140%;
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	:hover {
		background-color: ${props => props.theme.palette.primary.light};
}`;

const ButtonSqr = styled(ButtonIn)`
	width: 100px;
	border: 1px solid #000000;
	border-radius: 4px;
	box-shadow: none;
	text-transform: lowercase;
	line-height: 140%;
	color: #000;
	background-color: ${props => props.theme.palette.white};
	:hover {
		background-color: ${props => props.theme.palette.primary.main};
		color: #fff;
}`;

const ButtonSend = styled(ButtonIn)`
	display: block;
	margin: 0 auto;
	width: 267px;
	padding: 17px 80px;
	border-radius: 100px;
	text-transform: uppercase;
	line-height: 140%;
	color: #fff;
	font-weight:  ${props => props.theme.typography.fontWeightBold};
	:hover {
		background-color: ${props => props.theme.palette.primary.main};
}`;

const ButtonRegPopup = styled(ButtonIn)`
	display: block;
	margin: 0 auto;
	width: 227px;
	padding: 17px 50px;
	border-radius: 100px;
	text-transform: uppercase;
	line-height: 140%;
	color: #fff;
	font-weight:  ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.fontSize};
	:hover {
		background-color: ${props => props.theme.palette.primary.main};
}`;

const ButtonRegPopupMob = styled(ButtonIn)`
	display: block;
	margin: 0 auto;
	width: 211px;
	padding: 12px 50px;
	border-radius: 100px;
	text-transform: uppercase;
	line-height: 140%;
	color: #fff;
	font-weight:  ${props => props.theme.typography.fontWeightMedium};
	:hover {
		background-color: ${props => props.theme.palette.primary.main};
}`;


const ButtonSendMob = styled(ButtonIn)`
	display: block;
	margin: 0 auto;
	width: 253px;
	padding: 12px 80px;
	border-radius: 100px;
	box-shadow: none;
	text-transform: uppercase;
	line-height: 140%;
	color: #fff;
	:hover {
		background-color: ${props => props.theme.palette.primary.main};
}`;

const ButtonReg = styled(ButtonIn)`
	width: 132px;
	padding: 7px 18px;
	border-radius: 100px;
	line-height: 140%;
	:hover {
		background-color: ${props => props.theme.palette.primary.light};
		color: #fff;
}`;

const BtnOrder = styled(ButtonIn)`
	width: 268px;
	padding: 17px 40px;
	border-radius: 100px;
	line-height: 140%;
	font-size: 18px;
	text-transform: uppercase;
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
	:hover {
		background: linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%);
		color: #fff;
}`;

const DetailBtn = styled(ButtonIn)`
	width: 200px;
	border-radius: 100px;
	line-height: 17px;
	text-transform: capitalize;
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
	:hover {
		background: linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%);
		color: #fff;
}`;

const TabLeftBtn = styled('div')`
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
		color: #fff;
	}
	::before {
		position: absolute;
		content: "";
		width: 7px;
		height: 7px;
		border: 1.5px solid #FFFFFF;
		border-right: none;
		border-bottom: none;
		transform: rotate(-45deg);
		left: 41%;
	}`;

const TabRightBtn = styled(TabLeftBtn)`
	::before {
	border-left: none;
	border-bottom: none;
	border-right: 1.5px solid #FFFFFF;
	transform: rotate(45deg);
	left: 32%;
}`;

const BookButton = styled(ButtonIn)`
	display: block;
	margin: 0 auto;
	width: 320px;
	padding: 13.8px 115px;
	border-radius: 100px;
	line-height: 140%;
	font-size: 16px;
	text-transform: capitalize;
	color: #fff;
	background: ${props => props.theme.palette.primary.main};
	:hover {
		background: ${props => props.theme.palette.primary.light};
}`;




	export {
		ButtonIn,
		ButtonSqr,
		ButtonSend,
		ButtonSendMob,
		ButtonReg,
		BtnOrder,
		DetailBtn,
		TabLeftBtn,
		TabRightBtn,
		ButtonRegPopup,
		ButtonRegPopupMob,
		 BookButton
	};
