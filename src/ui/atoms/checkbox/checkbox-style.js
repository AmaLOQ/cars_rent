import {FormControlLabel, styled} from '@mui/material';

export const BtnCheckbox = styled(FormControlLabel)`
	margin-right: 0px;
	span:nth-child(1n) {
		display: inline-block;
		verical-align: start;
	}
	span:nth-child(2n) {
		position: relative;
		margin-left: -3px; 
		top: 3px;
		width: 232px;
		line-height: 18px;
		font-size: ${props => props.theme.typography.body1.fontSize};
		font-weight: ${props => props.theme.typography.fontWeightRegular};
		color: ${props => props.theme.palette.primary.main};
	}

`;