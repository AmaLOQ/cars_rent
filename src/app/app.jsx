import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "../ui/styles";
import { GradientButton } from "../ui/atoms/buttons/gradient-button/gradient-button";
import { PositionedMenu } from "../ui/atoms/menu-active/menu-active";
import { CustomSwitcher } from "../ui/atoms/switcher/switcher-desktop";
import { PopupCallbackDesk } from "../ui/organisms//callback-popup/callback-popup";
import { PopupCallbackMob } from "../ui/organisms//callback-popup-mobile/callback-popup-mobile";
import { PopupRegistrationkDesk } from "../ui/organisms/registration-popup/registration-popup";
import { PopupRegistrationMob } from "../ui/organisms//registration-popup-mobile/registration-popup-mobile";
import { ButtonBlack } from "../ui/atoms/buttons/black-button/black-button";
import { CheckboxButton } from "../ui/atoms/checkbox/checkbox";
import { ButtonSquare } from "../ui/atoms/buttons/square-btn/square-button";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <ButtonBlack text="регистрация" /> */}
        {/* <GradientButton  text="Заказать звонок"/> */}
        <PositionedMenu/>
        {/* <CheckboxButton text="Согласен (-на) с условиями оферты и обработкой персональных данных"/> */}
        {/* <PopupCallbackDesk/> */}
        {/* <PopupCallbackMob/> */}
        {/* <PopupRegistrationkDesk/> */}
        {/* <PopupRegistrationMob/> */}
        {/* <ButtonSquare text="Войти"/> */}
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;