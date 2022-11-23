import { Paper, styled } from "@mui/material";

const CountPaper = styled(Paper)`
	width: 370px;
	height: 390px;
	padding: 30px 25px 37px;
	background: ${props => props.theme.palette.primary.light};
`;


export default CountPaper;