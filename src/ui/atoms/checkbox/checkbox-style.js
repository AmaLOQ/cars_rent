import {Checkbox, styled} from '@mui/material';

const BtnCheckbox = styled(Checkbox)`
	color: ${props => props.theme.palette.primary.main};
`;

export default BtnCheckbox;