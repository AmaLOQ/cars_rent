import React from "react";
import logo from "../../ico/logo.svg";
import { Link } from "@mui/material";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import {CustomSwitcher} from "../../atoms/switcher/switcher-desktop";
import {PositionedMenu} from "../../atoms/menu-active/menu-active";
import {
	HeaderLogo, 
	GridContainerNaw, 
	GridContainerButtons,
	HeaderTextStyled,
	HeaderWrapper,
	SwitcherWrapper,
	Nav,
} from "./headers-styles";


export const Header = () => 

	<HeaderWrapper>
		<GridContainerNaw>
			<HeaderLogo><Link href="#"><img src={logo} alt="logo"/></Link></HeaderLogo>
			<Nav>
				<PositionedMenu/>
				<HeaderTextStyled><Link href="#">Сдать авто</Link></HeaderTextStyled>
				<HeaderTextStyled><Link href="#">О нас</Link></HeaderTextStyled>
				<HeaderTextStyled><Link href="#">Контакты</Link></HeaderTextStyled>
			</Nav>
		</GridContainerNaw>
		<GridContainerButtons>
			<ButtonBlack text="войти"/>
			<ButtonBlack text="регистрация"/>
			<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
		</GridContainerButtons>
	</HeaderWrapper>
