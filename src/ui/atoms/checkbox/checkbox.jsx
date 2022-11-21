import * as React from 'react';
import BtnCheckbox from './checkbox-style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxButton() {
	return <BtnCheckbox {...label} defaultChecked size='small'/>;
}