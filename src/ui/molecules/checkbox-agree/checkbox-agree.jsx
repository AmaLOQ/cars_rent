import React from "react";
import CheckboxButton from "../../atoms/checkbox/checkbox";
import {CheckboxDescr, BoxCheckbox} from "./checkbox-agree-styles";

export const CheckboxAgree = () => {
	return(
		<BoxCheckbox>
			<CheckboxButton/>
			<CheckboxDescr>Согласен (-на) с условиями оферты и обработкой персональных данных</CheckboxDescr>
		</BoxCheckbox>
	)
}


