import { Box, styled, Typography} from "@mui/material";

export const BurgerPaper = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto;
	overflow: hidden;
	grid-auto-flow: row;
	height: 616px;
	width: 375px;
	padding: 0 15px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
`;

export const BurgerMenuHeader = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, auto);
	min-height: 55px;
`;