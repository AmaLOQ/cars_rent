import React from "react";
import { Radio } from "@mui/material";
import { RadioBtn } from "./radio-btn-style";

export const RadioButtons = ({radioData}) => radioData.map(el => <RadioBtn label={el.label} control={<Radio/>} checked={el.defaultChecked} />)