import { React, useState } from "react";
import { IconButton } from "@mui/material";
import { LinksGroup } from "../../molecules/links-group/links-group";
import { linksDataBurgerMenu } from "./burger-links-data";
import { MenuActive } from "../../atoms/menu-active/menu-active";
import { iconDataBurgerMenu } from "./burger-icons-data";
import { IconGroup } from "../../molecules/icon-group/icon-group";
import { Link } from "../../atoms/link/link";
import { BlackButton } from "../../atoms/buttons/black-button/black-button";
import { BurgerCar } from "../../atoms/images-component/burger-car";
import { ReactComponent as Logo } from "../../ico/logo.svg";
import { ReactComponent as Closer } from "../../ico/closer.svg";
import { RegistrationPopupMobile } from "../registration-popup-mobile/registration-popup-mobile";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";
import {BurgerOverflow, BurgerPaper, BurgerMenuHeader, BurgerLogoWrapper, BurgerMenuMain, Nav, BurgerMenuFooter, FootertWrapperIcons, FooterCallUs, FooterPhone
} from "./burger-menu-styles";

export const BurgerMenu = ({ open, onClose, ...props }) => {
	const [openRegistrationPaper, setOpen] = useState(false);

	return (
		<BurgerOverflow open={open} onClick={onClose}>
			<BurgerPaper open={open} onClick={e => e.stopPropagation()} >
				<BurgerMenuHeader>
					<BurgerLogoWrapper><Logo /></BurgerLogoWrapper>
					<IconButton onClick={onClose}><Closer /></IconButton>
				</BurgerMenuHeader>
				<BurgerMenuMain>
					<BlackButton color="" text="Войти"></BlackButton>
					<BlackButton onClick={() => setOpen(true)} text="регистрация"></BlackButton>
					<Nav>
						<MenuActive />
						<LinksGroup linksData={linksDataBurgerMenu} />
					</Nav>
					<BurgerCar />
				</BurgerMenuMain>
				<BurgerMenuFooter>
					<FootertWrapperIcons>
						<IconGroup isHash iconData={iconDataBurgerMenu} />
					</FootertWrapperIcons>
					<FooterCallUs>Связаться с нами</FooterCallUs>
					<FooterPhone><Link type="tel" isHash>+7 495 120-80-70</Link></FooterPhone>
				</BurgerMenuFooter>
			</BurgerPaper>
			<BasicModal open={openRegistrationPaper} content={<RegistrationPopupMobile />} onClose={() => setOpen(false)} />
		</BurgerOverflow>
	)
}

