import React from "react";
import logo from "../../ico/logo.svg";
import { Link } from "../../atoms/link/link";
import { Link as LogoLink } from "@mui/material";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import {CustomSwitcher} from "../../atoms/switcher/switcher-desktop";
import {PositionedMenu} from "../../atoms/menu-active/menu-active";
import {HeaderLogo, GridContainerNaw, GridContainerButtons, HeaderWrapper, SwitcherWrapper, Nav} from "./headers-styles";

export const Header = () => 
	<HeaderWrapper>
		<GridContainerNaw>
			<HeaderLogo><LogoLink href="#"><img src={logo} alt="logo"/></LogoLink></HeaderLogo>
			<Nav>
				<PositionedMenu/>
				<Link isHash text="Сдать авто"/>
				<Link isHash text="О нас" />
				<Link isHash text="Контакты" />
			</Nav>
		</GridContainerNaw>
		<GridContainerButtons>
			<ButtonBlack text="войти"/>
			<ButtonBlack text="регистрация"/>
			<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
		</GridContainerButtons>
	</HeaderWrapper>
