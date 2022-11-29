import {Radio, styled} from '@mui/material/';

export const RadioBtn = styled(Radio)`
	display: flex;
	margin-right: 10.5px;
	width: 20.5px;
	height: 20.5px;
	align-self: center;
	color: ${props => props.theme.palette.primary.main};
`;

