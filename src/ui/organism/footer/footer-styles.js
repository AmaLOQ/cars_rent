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

export const FootertNavTopic = styled(Typography)`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #242424;
	text-transform: none;
	text-decoration: none;
	align-self: end;
	a {
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #242424;
	text-transform: none;
	text-decoration: none;
	align-self: end;
	:hover {
		text-decoration: underline;
	}
	}
`;

export const FootertContact = styled(Box)`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto);
	gap: 10px;
`;

export const FootertContactCall = styled(FootertNavTopic)`
`;

export const FootertContactPhone = styled(Typography)`
	a {
		font-weight: 700;
		font-size: 24px;
		line-height: 29px;
		color: #242424;
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
	minheight: 70px;
	padding: 23px 0 25px;
	background: #FFFFFF;
`;

export const FootertWrapperRightsFz16 = styled(Typography)`
	font-weight: 400;
	font-size: 16px;
	line-height: 140%;
	color: #242424;
`;

export const FootertWrapperRightsFz14 = styled(FootertWrapperRightsFz16)`
	position: relative;
	left: -57px;
	font-size: 14px;
`;

export const FootertWrapperRightsIcoContainer = styled(FootertWrapperRightsFz16)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;
	column-gap: 15px;
	align-items: center;
`;