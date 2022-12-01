import * as React from 'react';
import {BtnCheckbox} from './checkbox-style';
import { Checkbox } from '@mui/material';

export const CheckboxButton = ({text}) => <BtnCheckbox control={<Checkbox defaultChecked />} label={text} />