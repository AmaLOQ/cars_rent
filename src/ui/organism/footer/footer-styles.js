import { Box, styled, Typography } from "@mui/material";

const FootertWrapperNaw = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	minheight: 159px;
	padding: 47px 0 50px;
	border-bottom: 1px solid #242424;
	background: #FFFFFF;
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

const FootertContact = styled(Box)`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto);
	gap: 9px;
`;

const FootertContactCall = styled(FootertNavTopic)`
`;

const FootertContactPhone = styled(Typography)`
	a {
		font-weight: 700;
		font-size: 24px;
		line-height: 29px;
		color: #242424;
		text-decoration: none;
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
	padding: 23px 0 24px;
	background: #FFFFFF;
`;

const FootertWrapperRightsFz16 = styled(Typography)`
	font-weight: 400;
	font-size: 16px;
	line-height: 140%;
	color: #242424;
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