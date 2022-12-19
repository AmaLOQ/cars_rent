import React from "react";
import { HomePage } from "../ui/pages/home-page";
import { BurgerMenu } from "../ui/organisms/burger-menu/burger-menu";
import { ThemeProvider } from "@emotion/react";
import {theme} from "../ui/styles"
import { CssBaseline } from "@mui/material";
import { RegistrationkPopupDesk } from "../ui/organisms/registration-popup/registration-popup-desk";
import { RegistrationPopupMobile } from "../ui/organisms/registration-popup-mobile/registration-popup-mobile";
import { CallbackPopupDesk } from "../ui/organisms/callback-popup/callback-popup-desk";

export const App = () =>  
	<ThemeProvider theme={theme}>
		<CssBaseline>
			{/* <RegistrationkPopupDesk/> */}
			{/* <RegistrationPopupMobile/> */}
			<CallbackPopupDesk/>
		</CssBaseline>
	</ThemeProvider>
	


