import {FormControlLabel, styled, Box} from '@mui/material';

export const StyledBtnCheckbox = styled(FormControlLabel)`
	margin-right: 0px;
	span:nth-child(1n) {
		display: inline-block;
		svg {
			width: 22px;
			height: 22px;
		}
	}
	span:nth-child(2n) {
		position: relative;
		top: 5px;
		width: 232px;
		line-height: 18px;
		font-size: ${props => props.theme.typography.body1.fontSize};
		font-weight: ${props => props.theme.typography.fontWeightRegular};
		color: ${props => props.theme.palette.primary.main};
	}
`;

export const CheckboxWrapper30px = styled(Box)`
	margin-top: 3px;
	margin-bottom: 30px;
`;

export const CheckboxWrapper25px = styled(Box)`
	margin-top: 3px;
	margin-bottom: 25px;
`;