import * as React from 'react';
import {BtnCheckbox} from './checkbox-style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckboxBtn = () => <BtnCheckbox {...label} defaultChecked size='small'/>