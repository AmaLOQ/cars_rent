import React from "react";
import logo from "../../ico/logo.svg";
import { linksDataHeader } from "./links-data";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { Link } from "../../atoms/link/link";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import {CustomSwitcher} from "../../atoms/switcher/switcher-desktop";
import {PositionedMenu} from "../../atoms/menu-active/menu-active";
import {HeaderLogo, GridContainerNaw, GridContainerButtons, HeaderWrapper, SwitcherWrapper, Nav} from "./headers-styles";

export const Header = () => 
		<HeaderWrapper>
			<GridContainerNaw>
				<HeaderLogo><Link isHash><img src={logo} alt="Logo"/></Link></HeaderLogo>
				<Nav>
					<PositionedMenu/>
					<LinksGroup linksData={linksDataHeader}/>
				</Nav>
			</GridContainerNaw>
			<GridContainerButtons>
				<ButtonBlack text="войти"/>
				<ButtonBlack text="регистрация"/>
				<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
			</GridContainerButtons>
		</HeaderWrapper>
