import {styled, Box, Typography,} from "@mui/material";
import { CallbackOverflow, PaperCallback } from "../callback-popup/callback-popup-desk-styles";

export const RegistrationOverflow = styled(CallbackOverflow)`
	@media ${props => props.theme.media.landscape} {
		align-items: start;
	}
`;

export const PaperRegistration = styled(PaperCallback)`
	width: 380px;
	height: 680px;
	padding: 40px 30px 50px;
	@media ${props => props.theme.media.landscape} {
		position: absolute;
		top: 2%;
	}
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

export const DataForSingIn = styled(Typography)`
	line-height: 15px;
	font-weight: ${props => props.theme.typography.fontWeightBold};
	font-size: ${props => props.theme.typography.body1.fontSize};
	letter-spacing: -0.15px;
	text-transform: uppercase;
`;

export const DataForSingInBox = styled(Box)`
	margin-top: 27px;
`;

export const CheckboxWrapperReg = styled(Box)`
	margin-top: 2px;
	margin-bottom: 28px;
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
