import {FormControlLabel, styled} from '@mui/material/';

export const StyledRadioBtn = styled(FormControlLabel)`
	margin: 0;
	margin-left: -13px;
	margin-right: 13px;
	span {
		line-height: 24px;
		font-weight: ${props => props.theme.typography.fontWeightRegular};
		font-size: ${props => props.theme.typography.h5.fontSize};
		color: ${props => props.theme.palette.primary.main};
	}
	label:nth-child(2) {
		margin-left: 10px;
	}
`;

