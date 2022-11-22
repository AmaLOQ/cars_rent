import React from "react";
import SingInBtn from "../ui/atoms/buttons/sing-In-btn";
import SingInSqrBtn from "../ui/atoms/buttons/sing-in-square-btn";
import SendBtn from "../ui/atoms/buttons/send-btn";
import RegistrationBtn from "../ui/atoms/buttons/registration-btn";
import OrderBtn from "../ui/atoms/buttons/order-call-btn";
import DetailedBtn from "../ui/atoms/buttons/detailed-btn";
import TabLeftButton from "../ui/atoms/buttons/tab-left-btn";
import TabRightButtton from "../ui/atoms/buttons/tab-right-btn";
import SendMobBtn from "../ui/atoms/buttons/send-mobile-btn";
import RegPopupBtn from "../ui/atoms/buttons/registration-popup-btn";
import RegPopupMobBtn from "../ui/atoms/buttons/registration-popup-mobile-btn";
import RangeSlider from "../ui/atoms/slider/slider";
import RadioButtons from "../ui/atoms/radio-btn/radio-btn";
import CheckboxBtn from "../ui/atoms/checkbox/checkbox";
import CustomSwitcher from "../ui/atoms/switcher/switcher-desktop";
// import Calendar from "../ui/atoms/calendar/calendar";
import PositionedMenu from "../ui/atoms/menu-active/menu-active";
// import PopoupCallbackModal from "../ui/molecules/callback-popup/callback-popup";
import { ThemeProvider } from "@emotion/react";
import theme from "../ui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SingInBtn/>
      <SingInSqrBtn/>
      <SendBtn/>
      <RegistrationBtn/>
      <OrderBtn/>
      <DetailedBtn/>
      <TabLeftButton/>
      <TabRightButtton/>
      <SendMobBtn/>
      <RegPopupBtn/>
      <RegPopupMobBtn/>
      <RangeSlider/>
      <RadioButtons/>
      <CheckboxBtn/>
      <CustomSwitcher/>
      <PositionedMenu/>
      {/* <PopoupCallbackModal/> */}
    </ThemeProvider>
  );
}

export default App;