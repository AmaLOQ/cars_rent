import { Box, styled, Typography} from "@mui/material";
import { FootertWrapperRightsIcoContainer } from "../footer/footer-styles";
import { CallbackOverflow } from "../callback-popup/callback-popup-styles";

export const BurgerOverflow = styled(CallbackOverflow)`
	display: ${({open}) => open ? 'flex' : 'none' };
	@media ${props => props.theme.media.md} {
		position: fixed;
	}
	@media ${props => props.theme.media.landscape} {
		align-items: start;
		position: absolute;
		height: 980px;
	}
`;

export const BurgerPaper = styled(Box)`
	position: absolute;
	transition: 1s all;
	display: grid;
	min-height: 667px;
	width: 100vh;
	padding: 0 9px 0 20px;
	grid-template-columns: 1fr;
	grid-template-rows:  55px minmax(511px, auto) 101px;
	overflow: hidden;
	grid-auto-flow: row;
	background-color: ${props => props.theme.palette.white};
	@media ${props => props.theme.media.md} {
		width: 70%;
	} 
	@media ${props => props.theme.media.phone} {
		width: 100%;
		height: 100%;
	}
	@media ${props => props.theme.media.landscape} {
		top: 2%;
	}
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
		position: absolute;
		bottom: 14px;
		right: -17px;
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
	grid-template-columns: 1fr auto;
	grid-template-rows: repeat(2, 21px);
`;

export const FootertWrapperIcons = styled(FootertWrapperRightsIcoContainer)`
	grid-row: 1/3;
`;

export const FooterCallUs = styled(Typography)`
	font-size: ${props => props.theme.typography.body1.fontSize};
	color: ${props => props.theme.palette.primary.main};
	line-height: 15px;
	justify-self: start;
`;

export const FooterPhone = styled(Typography)`
	justify-self : end;
	a{
		font-size: 15px;
		font-weight: ${props => props.theme.typography.fontWeightBold};
		color: ${props => props.theme.palette.primary.main};
	}
`;
