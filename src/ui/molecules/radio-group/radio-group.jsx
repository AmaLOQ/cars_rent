import React from "react";
import { RadioGroup as MuiRadioGroup } from "@mui/material";
import { RadioButtons } from "../../atoms/radio-button/radio-button";

export const RadioGroup = ({radioData}) => 
	<MuiRadioGroup row>
		<RadioButtons radioData={radioData}/>
	</MuiRadioGroup>

