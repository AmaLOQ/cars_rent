import { Paper, styled, Box, Typography } from "@mui/material";

const PaperRegistrationMob = styled(Paper)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translateY(-50%);
	transform: translateX(-50%);
	width: 343px;
	height: 660px;
	padding: 40px 21px 40px;
	background: ${props => props.theme.palette.white};
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
`;

const DataForSingInBox = styled(Box)`
	margin-top: 20px;
`;

const PopupTitel22 = styled(Box)`
	font-size: 22px;
	text-align: center;
	font-weight: bold;
	line-height: 27px;
`;

const PostStateBox = styled(Box)`
	margin-top: 15px;
`;

const AutorzationBox40 = styled(Box)`
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Autorzation12 = styled(Typography)`
	font-size: 12px;
`;


export {
	PaperRegistrationMob,
	DataForSingInBox,
	PostStateBox,
	AutorzationBox40,
	Autorzation12,
	PopupTitel22
}