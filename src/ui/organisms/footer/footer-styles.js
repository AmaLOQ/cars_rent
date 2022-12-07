import { Box, styled, Typography } from "@mui/material";

export const FootertWrapperNaw = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 47px 0 49px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
	background: ${props => props.theme.palette.white};
`;

export const FootertNav = styled(Box)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(2, auto);
	column-gap: 29px;
	row-gap: 15px;
	grid-auto-flow: row;
`;

export const FootertContact = styled(Box)`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto);
	gap: 10px;
`;

export const FootertContactCall = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 20px;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
	text-decoration: none;
`;

export const FootertContactPhone = styled(Typography)`
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
`;

export const FootertWrapperRights = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 70px;
	padding: 25px 0 25px;
	background: ${props => props.theme.palette.white};
`;

export const FootertWrapperRightsFz16 = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
	color:  ${props => props.theme.palette.primary.main};
`;

export const FootertWrapperRightsFz14 = styled(FootertWrapperRightsFz16)`
	position: relative;
	left: -59px;
	font-size: ${props => props.theme.typography.h5.fontSize};
`;

export const FootertWrapperRightsIcoContainer = styled(FootertWrapperRightsFz16)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;
	column-gap: 15px;
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
