import { React, useState } from "react";
import { ReactComponent as BurgerIcon } from "../../ico/header-menu.svg"
import { IconButton } from "@mui/material";
import { ReactComponent as Logo } from "../../ico/logo.svg";
import { linksDataHeader } from "./links-data";
import { LinksGroup } from "../../molecules/links-group/links-group";
import { Link } from "../../atoms/link/link";
import { BlackButton } from "../../atoms/buttons/black-button/black-button";
import { Switcher } from "../../atoms/switcher/switcher-desktop";
import { MenuActive } from "../../atoms/menu-active/menu-active";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";
import { RegistrationkPopupDesk } from "../registration-popup/registration-popup-desk";
import { HeaderLogo, GridContainerNav, GridContainerButtons, HeaderWrapper, SwitcherWrapper, Nav, BlackButtonWrapper, BurgerWrapper } from "./headers-styles";
import { BurgerMenu } from "../burger-menu/burger-menu";

export const Header = () => {
	const [openRegistration, setOpenReg] = useState(false);
	const [opneBurgerMenu, setOpenBurger] = useState(false);

	return (
		<HeaderWrapper>
			<GridContainerNav>
				<HeaderLogo><Link isHash><Logo /></Link></HeaderLogo>
				<Nav>
					<MenuActive />
					<LinksGroup linksData={linksDataHeader} />
				</Nav>
			</GridContainerNav>
			<GridContainerButtons>
				<BlackButtonWrapper><BlackButton text="войти" /></BlackButtonWrapper>
				<BlackButtonWrapper><BlackButton onClick={() => setOpenReg(true)} text="регистрация" /></BlackButtonWrapper>
				<SwitcherWrapper>< Switcher /></SwitcherWrapper>
				<BurgerWrapper><IconButton onClick={() => setOpenBurger(true)} color="primary"><BurgerIcon /></IconButton></BurgerWrapper>
			</GridContainerButtons>
			<BasicModal open={openRegistration} content={<RegistrationkPopupDesk />} onClose={() => setOpenReg(false)} />
			<BurgerMenu open={opneBurgerMenu} onClose={() => setOpenBurger(false)} />
		</HeaderWrapper>
	)
}
