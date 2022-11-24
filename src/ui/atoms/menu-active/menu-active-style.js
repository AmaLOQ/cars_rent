import {Button, Menu, MenuItem, styled} from "@mui/material";


// const PREFIX = 'Menu';

// const classes = {
// 	root: `${PREFIX}-root`,
// 	cta: `${PREFIX}-cta`,
// 	content: `${PREFIX}-content`,
// }

// const MenuActive = styled(Menu)(({theme}) => ({
// 	[`&.${classes.root}`]: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		backgroundColor: theme.palette.primary.main
// 	},
// 	[`& .${classes.cta}`]: {
// 		borderRadius: theme.shape.radius
// 	},
// 	[`& .${classes.content}`]: {
// 		color: theme.palette.common.white,
// 		fontSize: 16,
// 		lineHeight: 1.7
// 	},
// }))

// export default MenuActive;


// const useStyles = makeStyles((theme) => ({
// 	memu: {
// 		padding: '9px 13px',
// 		boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.15)',
// 		borderRadius: '10px',
// 	}
// }))


const ActiveMenuBtn = styled(Button)`
	font-weight: 600;
	font-size: 16px;
	line-height: 140%;
	text-transform: none;
	padding: 0 3px;
	:after {
		content: '';
		width: 4px;
		height: 4px;
		border: 2px solid;
		border-left: none;
		border-top: none;
		transform: rotate(45deg);
		margin-left: 4px;
	}
`;

const MenuActive = styled(Menu)`
	width: 120px;
	border-radius: 10px;
	padding: 9px 15px;
`;

const MenuItemActive = styled(MenuItem)`
	font-weight: ${props => props.theme.fontWeightMedium};
	font-size: 14px;
	line-height: 140%;
	text-transform: none;
	padding: 6.5px 13px;
`;

export {
	ActiveMenuBtn,
	MenuActive, 
	MenuItemActive
}