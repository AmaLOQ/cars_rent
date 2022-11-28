import { Box, styled, Grid, Typography } from "@mui/material";

const HeaderWrapper = styled(Box)`
	display: flex;
	justify-content: space-between;
	min-height: 72px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
`;

const GridContainerNaw = styled(Box)`
	display: grid;
	grid-template-columns: 152px repeat(4, minmax(40px, auto));
	column-gap: 30px;
	align-items: center;
`;

const GridContainerButtons = styled(Box)`
	position: relative;
	display: grid;
	grid-template-columns: 80px 132px 50px;
	align-items: center;
	column-gap: 10px;
`;


const HeaderTextStyle = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
`;

const SwitcherWrapper = styled(Box)`
	position: relative;
	top: -1px;
	left: 11px;	
`;
const HeaderLogo = styled(Box)`
`;




export {
	HeaderWrapper,
	GridContainerNaw,
	GridContainerButtons,
	HeaderTextStyle,
	SwitcherWrapper,
	HeaderLogo,
}