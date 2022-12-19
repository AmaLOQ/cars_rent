import { Box, styled, Typography } from "@mui/material";

export const FootertWrapperNav = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 48px 0 49px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
	background: ${props => props.theme.palette.white};
	@media ${props => props.theme.media.md} {
		padding: 50px 0 35px;
	}
	@media ${props => props.theme.media.phone} {
		padding: 26px 0 28px;
	}
`;

export const FootertNav = styled(Box)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(2, auto);
	column-gap: 29px;
	row-gap: 15px;
	grid-auto-flow: row;

	@media ${props => props.theme.media.md} {
		column-gap: 18px;
		a {
			font-size: ${props => props.theme.typography.button.fontSize};
		}
	}
	@media ${props => props.theme.media.phone} {
		grid-template-columns: repeat(2, auto);
		row-gap: 11px;
	}
`;

export const FootertContact = styled(Box)`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto);
	gap: 10px;
	@media ${props => props.theme.media.phone} {
		gap: 0px;
		align-self: end;
	}
`;

export const FootertContactCall = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 20px;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
	text-decoration: none;
	@media ${props => props.theme.media.phone} {
		font-size: ${props => props.theme.typography.body1.fontSize};
	}
`;

export const FootertContactPhone = styled(Box)`
	a {
		font-weight: ${props => props.theme.typography.fontWeightBold};
		font-size: ${props => props.theme.typography.subtitle1.fontSize};
		line-height: 29px;
		color: ${props => props.theme.palette.primary.main};
		text-decoration: none;
		letter-spacing: -0.3px;
		:hover {
			text-decoration: underline;
		}
	}
	@media ${props => props.theme.media.phone} {
		a{
			font-size: 15px;
			line-height: 23px;
			letter-spacing: 0.1px;
		}
	}
`;

export const FootertWrapperRights = styled(Box)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	min-height: 70px;
	padding: 25px 0 25px;
	background: ${props => props.theme.palette.white};
	@media ${props => props.theme.media.sm} {
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(2, auto);
		row-gap: 32px;
	}
`;

export const FootertWrapperRightsFz16 = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
	color:  ${props => props.theme.palette.primary.main};
`;

export const FootertWrapperRightsFz14 = styled(FootertWrapperRightsFz16)`
	align-self: center;
	position: relative;
	left: 32px;
	font-size: ${props => props.theme.typography.h5.fontSize};
	@media ${props => props.theme.media.md} {
		left: 0;
	}
	@media ${props => props.theme.media.sm} {
		grid-row: 2/3;
		grid-column: 1/3;
		justify-self: center;
	}
`;

export const FootertWrapperRightsIcoContainer = styled(FootertWrapperRightsFz16)`
	display: flex;
	column-gap: 15px;
	justify-content: flex-end;
	align-items: center;
	a {
		display: block;
		width: 20px;
		height: 20px;
	}
	img {
		max-width: 100%;
		max-height: 100%;
	}
`;
