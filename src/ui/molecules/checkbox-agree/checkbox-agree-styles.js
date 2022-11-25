import { Typography, styled, Box } from "@mui/material";


// Замменить стили фонт вейт
const CheckboxDescr = styled(Typography)`
	width: 232px;
	margin-left: 12px;
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.body1.fontSize};
	line-height: 18px;

`;

const BoxCheckbox = styled(Box)`
	display: flex;
	margin: 15px 0 30px;
`;

export {
	CheckboxDescr,
	BoxCheckbox
}