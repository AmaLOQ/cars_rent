import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwitcherStyled from './switcher-style';



const CustomSwitcher = () => {
	return(
		<FormControlLabel
		  control={<SwitcherStyled sx={{ m: 1 }} defaultChecked />}
		/>
	)
}

export default CustomSwitcher;