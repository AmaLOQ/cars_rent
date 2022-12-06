import { Box, styled} from "@mui/material";

export const HeaderWrapper = styled(Box)`
	display: flex;
	min-height: 72px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
	justify-content: space-between;
`;

export const GridContainerNaw = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, auto);
	column-gap: 30px;
	align-items: center;
`;

export const GridContainerButtons = styled(Box)`
	position: relative;
	display: grid;
	grid-template-columns: 90px 132px 50px;
	align-items: center;
	justify-items: start;
	column-gap: 6px;
`;

export const SwitcherWrapper = styled(Box)`
	position: relative;
	top: -1px;
	left: 20px;	
`;

export const HeaderLogo = styled(Box)`
	display: flex;
	width: 151px;
	height: 35px;
	align-items: center;
	img {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const Nav = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	column-gap: 32px;
`;