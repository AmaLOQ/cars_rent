import { Box, styled, Typography} from "@mui/material";
import { FootertWrapperRightsIcoContainer } from "../footer/footer-styles";
import { Overflow } from "../callback-popup/callback-popup-styles";

export const BurgerOverflow = styled(Overflow)`
	display: ${({open}) => open ? 'block' : 'none' };
`;

export const BurgerPaper = styled(Box)`
	position: absolute;
	top: 0;
	transition: all 0.6s;
	left: ${({open}) => open ? '0px' : '-100%' };
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows:  55px minmax(511px, auto) minmax(101px, auto);
	overflow: hidden;
	grid-auto-flow: row;
	height: 667px;
	width: 375px;
	padding: 0 15px;
	background-color: ${props => props.theme.palette.white};
`;

export const BurgerMenuHeader = styled(Box)`
	display: flex;
	min-height: 55px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${props => props.theme.palette.main};
`;

export const BurgerLogoWrapper = styled(Box)`
	width: 120px;
	height: 25px;
	display: flex;
	align-self: center;
	svg {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const BurgerMenuMain = styled(Box)`
	position: relative;
	display: grid;
	padding: 21px 0 35px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 34px minmax(157px, auto) minmax(198px, auto);
	column-gap: 15px;
	row-gap: 49px;
	border-bottom: 1px solid ${props => props.theme.palette.main};
	img {
		grid-column: 1/3;
		display: inline-block;
		position: relative;
		top: -12px;
		left: 53px;
	}
`;

export const Nav = styled(Box)`
	grid-column: 1/3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	a, button {
		font-size: ${props => props.theme.typography.caption.fontSize};
	}
`;

export const BurgerMenuFooter = styled(Box)`
	display:  grid;
	padding: 20px 0 40px;
	grid-template-columns: auto auto;
	grid-template-rows: repeat(2, 22px);
`;

export const FootertWrapperIcons = styled(FootertWrapperRightsIcoContainer)`
	grid-row: 1/3;
`;

export const FooterCallUs = styled(Typography)`
	font-size: ${props => props.theme.typography.body1.fontSize};
	color: ${props => props.theme.palette.primary.main};
	line-height: 15px;
	justify-self: end;
`;

export const FooterPhone = styled(Typography)`
	justify-self : end;
	a{
		font-size: 15px;
		font-weight: ${props => props.theme.typography.fontWeightBold};
		color: ${props => props.theme.palette.primary.main};
	}
`;
