import {React, useState} from "react";
import {ReactComponent as BurgerIcon} from "../../ico/header-menu.svg"
import { IconButton } from "@mui/material";
import {ReactComponent as Logo} from "../../ico/logo.svg";
import { linksDataHeader } from "./links-data";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { Link } from "../../atoms/link/link";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import {CustomSwitcher} from "../../atoms/switcher/switcher-desktop";
import {PositionedMenu} from "../../atoms/menu-active/menu-active";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";
import { PopupRegistrationkDesk } from "../registration-popup/registration-popup";
import {HeaderLogo, GridContainerNav, GridContainerButtons, HeaderWrapper, SwitcherWrapper, Nav,
	BlackButtonWrapper, BurgerWrapper
} from "./headers-styles";

export const Header = () => {
	const [openRegistration, setOpenReg] = useState(false);

	return(
		<HeaderWrapper>
			<GridContainerNav>
				<HeaderLogo><Link isHash><Logo/></Link></HeaderLogo>
				<Nav>
					<PositionedMenu/>
					<LinksGroup linksData={linksDataHeader}/>
				</Nav>
			</GridContainerNav>
			<GridContainerButtons>
				<BlackButtonWrapper><ButtonBlack text="войти"/></BlackButtonWrapper>
				<BlackButtonWrapper><ButtonBlack onClick={() => setOpenReg(true)} text="регистрация"/></BlackButtonWrapper>
				<SwitcherWrapper><CustomSwitcher/></SwitcherWrapper>
				<BurgerWrapper><IconButton color="primary"><BurgerIcon/></IconButton></BurgerWrapper>
			</GridContainerButtons>
			<BasicModal open={openRegistration} content={<PopupRegistrationkDesk/>} onClose={() => setOpenReg(false)}/>
		</HeaderWrapper>
	)
}
