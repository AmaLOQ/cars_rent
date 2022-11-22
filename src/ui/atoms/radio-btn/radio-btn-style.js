import {Radio, styled} from '@mui/material/';

const RadioBtn = styled(Radio)`
	display: flex;
	align-self: center;
	margin-right: 10.5px;
	width: 20.5px;
	height: 20.5px;
	color: ${props => props.theme.palette.primary.main};
`;

export default RadioBtn;