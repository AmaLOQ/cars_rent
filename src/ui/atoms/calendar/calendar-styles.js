import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { styled } from '@mui/material';

export const StyledDataTimePicker = styled(DesktopDatePicker)`
	width: 100%;
	input{
		padding-top: 15px;
		padding-bottom: 15px;
		color: ${props => props.theme.palette.primary.main};
		font-family: 'Roboto';
		letter-spacing: 0.3px;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
	}
	label{
		color: ${props => props.theme.palette.primary.main};
		font-family: 'Roboto';
		font-weight: 500;
		letter-spacing: 0.5px;
		font-size: 14px;
		line-height: 16px;
	}
`; 
