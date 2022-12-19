import { styled, Box, Typography } from "@mui/material";
import { PaperCallback } from "../callback-popup/callback-popup-desk-styles";

export const PaperRegistrationMob = styled(PaperCallback)`
	width: 343px;
	height: 660px;
	padding: 40px 21px 40px;
`;

export const DataForSingInBox = styled(Box)`
	margin-top: 7px;
`;

export const PopupTitel22 = styled(Box)`
	line-height: 27px;
	text-align: center;
	letter-spacing: -0.3px;
	font-size: ${props => props.theme.typography.body2.fontSize};
	font-weight: ${props => props.theme.typography.fontWeightBold};
`;

export const PostStateBox = styled(Box)`
	margin-top: 15px;
`;

export const AutorzationBox40 = styled(Box)`
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Autorzation12 = styled(Typography)`
	font-size: ${props => props.theme.typography.body1.fontSize};
	span {
		text-transform: uppercase;
	}
`;