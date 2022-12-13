import {React, useState} from "react";
import { IconButton } from "@mui/material";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { linksDataBurgerMenu } from "./burger-links-data";
import { PositionedMenu } from "../../atoms/menu-active/menu-active";
import { iconDataBurgerMenu } from "./burger-icons-data";
import { IconGroup } from "../icon-group/icon-group";
import { Link } from "../../atoms/link/link";
import { ButtonBlack } from "../../atoms/buttons/black-button/black-button";
import { BurgerCarImg } from "../../atoms/images-component/burger-car";
import {ReactComponent as Logo} from "../../ico/logo.svg";
import {ReactComponent as Closer} from "../../ico/closer.svg";
import { PopupRegistrationMob } from "../registration-popup-mobile/registration-popup-mobile";
import { BasicModal } from "../../molecules/basic-modal/basic-modal";
import { BurgerOverflow, BurgerPaper, BurgerMenuHeader, BurgerLogoWrapper, BurgerMenuMain, Nav,
 BurgerMenuFooter, FootertWrapperIcons, FooterCallUs, FooterPhone} from "./burger-menu-styles";


export const BurgerMenu = ({open, onClose, ...props}) => {

	const [openRegistrationPaper, setOpen] = useState(false)

	return (
	<BurgerOverflow open={open} onClick={onClose}>
		<BurgerPaper open={open} onClick={e => e.stopPropagation()} >
			<BurgerMenuHeader>
				<BurgerLogoWrapper><Logo/></BurgerLogoWrapper>
				<IconButton onClick={onClose}><Closer/></IconButton>
			</BurgerMenuHeader>
			<BurgerMenuMain>
				<ButtonBlack color="" text="Войти"></ButtonBlack>
				<ButtonBlack onClick={() => setOpen(true)} text="регистрация"></ButtonBlack>
				<Nav>
					<PositionedMenu/>
					<LinksGroup linksData={linksDataBurgerMenu}/>
				</Nav>
				<BurgerCarImg/>
			</BurgerMenuMain>
			<BurgerMenuFooter>
				<FootertWrapperIcons>
					<IconGroup isHash iconData={iconDataBurgerMenu}/>
				</FootertWrapperIcons>
				<FooterCallUs>Связаться с нами</FooterCallUs>
				<FooterPhone><Link type="tel" isHash>+7 495 120-80-70</Link></FooterPhone>
			</BurgerMenuFooter>
		</BurgerPaper>
		<BasicModal open={openRegistrationPaper} content={<PopupRegistrationMob/>} onClose={() => setOpen(false)}/>
	</BurgerOverflow>
	)
}

