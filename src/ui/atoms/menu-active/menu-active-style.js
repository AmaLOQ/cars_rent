import {Button, Menu, MenuItem, styled} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const StyledActiveMenuBtn = styled(Button)`
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
	text-transform: none;
	padding: 0 ;
	color: ${props => props.theme.palette.primary.main};
	span {
		margin-left: 0px;
		color: ${props => props.theme.palette.primary.main};
	}
`;

export const StyledMenuActive = styled(Menu)`
	width: 150px;
	border-radius: 10px;
	padding: 9px 15px;
`;

export const Arrow = styled(KeyboardArrowDownIcon)`
	margin-left: -4px;
`;

export const StyledMenuItemActive = styled(MenuItem)`
	padding: 6.5px 13px;
	line-height: 140%;
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.h5.fontSize};
	text-transform: none;
	a {
		color: ${props => props.theme.palette.primary.main};
	}
`;