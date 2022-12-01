import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "../ui/styles";
import { ButtonGradient } from "../ui/atoms/buttons/buttons";
import { PositionedMenu } from "../ui/atoms/menu-active/menu-active";
import { Slider } from "../ui/atoms/slider/slider";
import { CustomSwitcher } from "../ui/atoms/switcher/switcher-desktop";
import { PopupCallbackDesk } from "../ui/organisms//callback-popup/callback-popup";
import { PopupCallbackMob } from "../ui/organisms//callback-popup-mobile/callback-popup-mobile";
import { PopupRegistrationkDesk } from "../ui/organisms/registration-popup/registration-popup";
import { PopupRegistrationMob } from "../ui/organisms//registration-popup-mobile/registration-popup-mobile";
import { ButtonBlack } from "../ui/atoms/buttons/black-button";
import { CheckboxButton } from "../ui/atoms/checkbox/checkbox";
import { ButtonSquare } from "../ui/atoms/buttons/square-button";
import { GradientButton } from "../ui/atoms/buttons/gradient-button";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <PositionedMenu/>
        {/* <GradientButton isSmallGradientBtn text="привет"/> */}
        <ButtonBlack isBigBlackBtn text="отправить"/>
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