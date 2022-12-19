import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import {StyledSwitcher} from './switcher-style';

export const Switcher = () => <FormControlLabel control={<StyledSwitcher defaultChecked />}/>
