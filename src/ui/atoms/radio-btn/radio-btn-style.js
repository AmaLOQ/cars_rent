import {FormControlLabel, styled} from '@mui/material/';

export const RadioBtn = styled(FormControlLabel)`
	margin: 0;
	margin-left: -5px;
	span {
		line-height: 24px;
		font-weight: ${props => props.theme.typography.fontWeightRegular};
		font-size: ${props => props.theme.typography.h5.fontSize};
		color: ${props => props.theme.palette.primary.main};
	}

`;

