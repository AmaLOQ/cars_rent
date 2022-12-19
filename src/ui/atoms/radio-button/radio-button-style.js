import {FormControlLabel, styled} from '@mui/material/';

export const StyledRadioBtn = styled(FormControlLabel)`
	margin: 0 15px 2.5px -13px;
	span {
		line-height: 24px;
		font-weight: ${props => props.theme.typography.fontWeightRegular};
		font-size: ${props => props.theme.typography.h5.fontSize};
		color: ${props => props.theme.palette.primary.main};
		svg {
			width: 25px;
			height: 25px;
		}
	}
`;

