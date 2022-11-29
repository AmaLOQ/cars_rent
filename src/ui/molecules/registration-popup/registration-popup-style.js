import {styled, Box, Typography,} from "@mui/material";
import { PaperCallback } from "../callback-popup/callback-popup-styles";

export const PaperRegistration = styled(PaperCallback)`
	width: 380px;
	height: 680px;
	padding: 40px 30px 50px;
`;

export const BoxPopupDescr = styled(Box)`
	margin-top: 20px;
`;

export const BoxInputName = styled(Box)`
	margin-top: 20px;
`;

export const BoxInputSurname = styled(Box)`
	margin-top: 12px;
`;

export const RadioDescr = styled(Typography)`
	line-height: 24px;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h5.fontSize};
`;

export const StackStyled = styled(Box)`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
`;

export const DataForSingIn = styled(Typography)`
	line-height: 15px;
	font-weight: ${props => props.theme.typography.fontWeightBold};
	font-size: ${props => props.theme.typography.body1.fontSize};
`;

export const DataForSingInBox = styled(Box)`
	margin-top: 40px;
`;

export const Autorization = styled(Box)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h5.fontSize};
	text-transform: none;
`;

export const AutorizationBox = styled(Box)`
	display: flex;
	margin-top: 30px;
	justify-content: space-between;
	align-items: center;
`;
