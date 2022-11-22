import { Typography, styled, Box } from "@mui/material";


// Замменить стили фонт вейт
const CheckboxDescr = styled(Typography)`
	width: 232px;
	margin-left: 12px;
	font-weight: 400;
	font: ${props => props.theme.typography.body1};
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