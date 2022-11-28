import {Button, Menu, MenuItem, styled} from "@mui/material";


const ActiveMenuBtn = styled(Button)`
	font-weight: ${props => props.theme.typography.fontWeight};
	font-size: ${props => props.theme.typography.h4.fontSize};
	line-height: 140%;
	text-transform: none;
	padding: 0 3px;
	:after {
		content: '';
		width: 4px;
		height: 4px;
		border: 2px solid  ${props => props.theme.palette.primary.main};
		border-left: none;
		border-top: none;
		transform: rotate(45deg);
		margin-left: 4px;
		cursor: pointer;
	}
`;

const MenuActive = styled(Menu)`
	width: 120px;
	border-radius: 10px;
	padding: 9px 15px;
`;

const MenuItemActive = styled(MenuItem)`
	font-weight: ${props => props.theme.typography.fontWeight};
	line-height: 140%;
	text-transform: none;
	padding: 6.5px 13px;
`;

export {
	ActiveMenuBtn,
	MenuActive, 
	MenuItemActive
}