import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)`
	display: flex;
	min-height: 72px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
	justify-content: space-between;
	align-items: center;
	@media ${props => props.theme.media.sm} {
		min-height: 55px;
	}
`;

export const GridContainerNav = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, auto);
	column-gap: 30px;
	align-items: center;

	@media ${props => props.theme.media.md} {
		column-gap: 15px;
	}
`;

export const GridContainerButtons = styled(Box)`
	position: relative;
	display: grid;
	grid-template-columns: 90px auto 45px auto;
	column-gap: 6px;
	align-items: center;
	justify-items: start;

	@media ${props => props.theme.media.md} {
		grid-template-columns: auto auto 40px;
		button {
			font-size: ${props => props.theme.typography.body1.fontSize};
		}
	}
	@media ${props => props.theme.media.sm} {
		grid-template-columns: auto auto;
	}
`;

export const BlackButtonWrapper = styled(Box)`
	@media ${props => props.theme.media.sm} {
		display: none;
	}
`;

export const BurgerWrapper = styled(Box)`
	display: none;
	@media ${props => props.theme.media.sm} {
	display: flex;
	width: 35px;
	height: 25px;
	justify-content: center;
	align-items: center;
	margin-left: 7px;
	}
`;

export const SwitcherWrapper = styled(Box)`
	position: relative;
	top: -1px;
	left: 20px;	
	@media ${props => props.theme.media.md} {
		left: 10px;	
	}
`;

export const HeaderLogo = styled(Box)`
	display: flex;
	width: 151px;
	height: 35px;
	align-self: center;
	svg {
		max-width: 100%;
		max-height: 100%;
	}

	@media ${props => props.theme.media.md} {
		width: 120px;
	}
`;

export const Nav = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	column-gap: 32px;

	@media ${props => props.theme.media.md} {
		column-gap: 15px;
		a {
			font-size: ${props => props.theme.typography.button.fontSize};
		}
	}
	@media ${props => props.theme.media.sm} {
		display: none;
	}
`;