import React from "react";
import PositionedMenu from "../../atoms/menu-active/menu-active";
import logo from "../../ico/logo.svg";
import SingInBtn from "../../atoms/buttons/sing-In-btn";
import RegistrationBtn from "../../atoms/buttons/registration-btn";
import CustomSwitcher from "../../atoms/switcher/switcher-desktop";
import { CssBaseline } from "@mui/material";
import {
	HeaderLogo, 
	GridContainerNaw, 
	GridContainerButtons,
	HeaderTextStyle,
	HeaderWrapper,
	SwitcherWrapper,
	Nav,
} from "./headers-styles";


export const Header = () => 

	<CssBaseline>
		<HeaderWrapper>
			<GridContainerNaw>
				<HeaderLogo><a href="#"><img src={logo} alt="logo"></img></a></HeaderLogo>
				<Nav>
					<PositionedMenu/>
					<HeaderTextStyle><a href="#">Сдать авто</a></HeaderTextStyle>
					<HeaderTextStyle><a href="#">О нас</a></HeaderTextStyle>
					<HeaderTextStyle><a href="#">Контакты</a></HeaderTextStyle>
				</Nav>
			</GridContainerNaw>
			<GridContainerButtons>
				<SingInBtn/>
				<RegistrationBtn/>
				<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
			</GridContainerButtons>
		</HeaderWrapper>
	</CssBaseline>
