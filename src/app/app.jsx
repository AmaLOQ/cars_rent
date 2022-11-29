import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {theme} from "../ui/styles";

import { ButtonBlack, ButtonSqr, TabLeftBtn, TabRightBtn } from "../ui/atoms/buttons/buttons";
import { ButtonGradient } from "../ui/atoms/buttons/buttons";
import { PositionedMenu } from "../ui/atoms/menu-active/menu-active";
import { RadioButtons } from "../ui/atoms/radio-btn/radio-btn";
import { RangeSlider } from "../ui/atoms/slider/slider";
import { CustomSwitcher } from "../ui/atoms/switcher/switcher-desktop";
import { PopoupCallbackDesk } from "../ui/molecules/callback-popup/callback-popup";
import { PopupCallbackMob } from "../ui/molecules/callback-popup-mobile/callback-popup-mobile";
import { PopupRegistrationkDesk } from "../ui/molecules/registration-popup/registration-popup";
import { PopupRegistrationMob } from "../ui/molecules/registration-popup-mobile/registration-popup-mobile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <PositionedMenu/>
        <RadioButtons/>
        <CustomSwitcher/>
        {/* <PopoupCallbackDesk/> */}
        {/* <PopupCallbackMob/> */}
        {/* <PopupRegistrationkDesk/> */}
        {/* <PopupRegistrationMob/> */}
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;