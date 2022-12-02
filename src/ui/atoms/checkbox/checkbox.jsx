import * as React from 'react';
import {StyledBtnCheckbox} from './checkbox-style';
import { Checkbox } from '@mui/material';

export const CheckboxButton = ({text}) => <StyledBtnCheckbox control={<Checkbox defaultChecked />} label={text} />