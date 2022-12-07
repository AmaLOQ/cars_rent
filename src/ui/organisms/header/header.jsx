import React from "react";
import logo from "../../ico/logo.svg";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { Link as LogoLink } from "@mui/material";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import {CustomSwitcher} from "../../atoms/switcher/switcher-desktop";
import {PositionedMenu} from "../../atoms/menu-active/menu-active";
import {HeaderLogo, GridContainerNaw, GridContainerButtons, HeaderWrapper, SwitcherWrapper, Nav} from "./headers-styles";

const linksData = [
	{text: 'Сдать авто', isHash: true},
	{text: 'О нас', isHash: true},
	{text: 'Контакты', isHash: true},
]

export const Header = () => 
	<HeaderWrapper>
		<GridContainerNaw>
			<HeaderLogo><LogoLink href="#"><img src={logo} alt="logo"/></LogoLink></HeaderLogo>
			<Nav>
				<PositionedMenu/>
				<LinksGroup linksData={linksData}/>
			</Nav>
		</GridContainerNaw>
		<GridContainerButtons>
			<ButtonBlack text="войти"/>
			<ButtonBlack text="регистрация"/>
			<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
		</GridContainerButtons>
	</HeaderWrapper>
