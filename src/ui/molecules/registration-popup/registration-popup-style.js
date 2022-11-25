import {styled, Paper, Box, Typography,} from "@mui/material";

const PaperRegistration = styled(Paper)`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 380px;
	height: 680px;
	padding: 40px 30px 50px;
	background: ${props => props.theme.palette.white};
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
`;

const BoxPopupDescr = styled(Box)`
	margin-top: 20px;
`;

const BoxInputName = styled(Box)`
	margin-top: 20px;
`;

const BoxInputSurname = styled(Box)`
	margin-top: 12px;
`;

const RadioDescr = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h5.fontSize};
	line-height: 24px;
`;

const StackStyled = styled(Box)`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;




//  Заменить стиль фонт вейт!!!!!!
const DataForSingIn = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightBold}; 
	font-size: ${props => props.theme.typography.body1.fontSize};
	line-height: 15px;
`;

const DataForSingInBox = styled(Box)`
	margin-top: 40px;
`;

const Autorization = styled(Box)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.body1.fontSize};
	text-transform: none;
`;

const AutorizationBox = styled(Box)`
	display: flex;
	margin-top: 30px;
	justify-content: space-between;
	align-items: center;
`;


export {
	BoxPopupDescr,
	PaperRegistration,
	BoxInputName,
	BoxInputSurname,
	RadioDescr, 
	StackStyled,
	DataForSingIn,
	DataForSingInBox,
	Autorization, 
	AutorizationBox,
}
