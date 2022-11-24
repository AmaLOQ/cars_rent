import React from "react";
import PositionedMenu from "../../atoms/menu-active/menu-active";
import logo from "../../ico/logo.svg";
import SingInBtn from "../../atoms/buttons/sing-In-btn";
import RegistrationBtn from "../../atoms/buttons/registration-btn";
import CustomSwitcher from "../../atoms/switcher/switcher-desktop";
import { CssBaseline, Divider } from "@mui/material";
import {
	HeaderLogo, 
	GridContainerNaw, 
	GridContainerButtons,
	HeaderTextStyle,
	HeaderWrapper,
	SwitcherWrapper
} from "./headers-styles";


export default function Header() {
	return(
		<CssBaseline>
			<HeaderWrapper>
				<GridContainerNaw>
					<HeaderLogo><img src={logo} alt="logo"></img></HeaderLogo>
					<PositionedMenu/>
					<HeaderTextStyle>Сдать авто</HeaderTextStyle>
					<HeaderTextStyle>О нас</HeaderTextStyle>
					<HeaderTextStyle>Контакты</HeaderTextStyle>
				</GridContainerNaw>
				<GridContainerButtons>
					<SingInBtn/>
					<RegistrationBtn/>
					<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
				</GridContainerButtons>
			</HeaderWrapper>
		</CssBaseline>
	)
}