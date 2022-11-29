import {Checkbox, styled} from '@mui/material';

export const BtnCheckbox = styled(Checkbox)`
	width: 18px;
	height: 18px;
	color: ${props => props.theme.palette.primary.main};
`;