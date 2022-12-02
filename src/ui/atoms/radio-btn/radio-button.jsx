import React from "react";
import { Radio } from "@mui/material";
import { StyledRadioBtn } from "./radio-btn-style";

export const RadioButtons = ({radioData}) => radioData.map(el => <StyledRadioBtn label={el.label} control={<Radio/>} checked={el.defaultChecked} />)