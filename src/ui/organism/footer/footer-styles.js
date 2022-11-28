import { Box, styled, Typography } from "@mui/material";

const FootertWrapperNaw = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	minheight: 159px;
	padding: 47px 0 49px;
	border-bottom: 1px solid ${props => props.theme.palette.primary.main};
	background: ${props => props.theme.palette.white};
`;

const FootertNav = styled(Box)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(2, auto);
	column-gap: 29px;
	row-gap: 15px;
	grid-auto-flow: row;
`;

const FootertNavTopic = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 20px;
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
	text-decoration: none;
	align-self: end;
	a {
	font-weight: ${props => props.theme.typography.fontWeightMedium};
	font-size: ${props => props.theme.typography.h4.fontSize};
	color: ${props => props.theme.palette.primary.main};
	text-transform: none;
	text-decoration: none;
	align-self: end;
	:hover {
		text-decoration: underline;
	}
	}
`;

const FootertContact = styled(Box)`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto);
	gap: 10px;
`;

const FootertContactCall = styled(FootertNavTopic)`
`;

const FootertContactPhone = styled(Typography)`
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

const FootertWrapperRights = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	minheight: 70px;
	padding: 23px 0 25px;
	background: ${props => props.theme.palette.white};
`;

const FootertWrapperRightsFz16 = styled(Typography)`
	font-weight: ${props => props.theme.typography.fontWeightRegular};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
`;

const FootertWrapperRightsFz14 = styled(FootertWrapperRightsFz16)`
	position: relative;
	left: -57px;
	font-size: 14px;
`;

const FootertWrapperRightsIcoContainer = styled(FootertWrapperRightsFz16)`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;
	column-gap: 15px;
	align-items: center;
`;

export {
	FootertWrapperNaw,
	FootertNav,
	FootertNavTopic,
	FootertContact,
	FootertContactCall,
	FootertContactPhone,
	FootertWrapperRights,
	FootertWrapperRightsFz14,
	FootertWrapperRightsFz16,
	FootertWrapperRightsIcoContainer,
}