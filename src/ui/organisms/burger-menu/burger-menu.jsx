import React from "react";
import { Paper } from "@mui/material";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { linksDataBurgerMenu } from "./burger-links-data";
import { PositionedMenu } from "../../atoms/menu-active/menu-active";
import { iconDataBurgerMenu } from "./burger-icons-data";
import { IconGroup } from "../icon-group/icon-group";
import { HeaderLogo } from "../header/headers-styles";
import { Link } from "../../atoms/link/link";
import {ReactComponent as BurgerCar} from "../../img/burger_car.png"
import {ReactComponent as Logo} from "../../ico/logo.svg"
import { BurgerPaper, BurgerMenuHeader} from "./burger-menu-styles";

export const BurgerMenu = () => {

	return(
		<BurgerPaper>
			<BurgerMenuHeader>
				<HeaderLogo>sdfsdfsdf</HeaderLogo>
			</BurgerMenuHeader>
			{/* <BurgerMenuHeader>
				<HeaderLogo></HeaderLogo>
				<HeaderMenuCloser></HeaderMenuCloser>
			</BurgerMenuHeader>
			<BurgerMenuMain>
				<ButtonsWrapper></ButtonsWrapper>
				<ButtonsWrapper></ButtonsWrapper>
				<BurgerNav>
					<PositionedMenu/>
					<LinksGroup linksData={linksDataBurgerMenu}/>
				</BurgerNav>
				<BurgerCarWrapper><BurgerCar/></BurgerCarWrapper>
			</BurgerMenuMain>
			<BurgerMenuFooter>
				<IconGroup iconData={iconDataBurgerMenu}/>
				<ContactUs>Связаться с нами</ContactUs>
				<FooterBurgerContactPhone><Link type="tel" isHash>+7 495 120-80-70</Link></FooterBurgerContactPhone>
			</BurgerMenuFooter> */}
		</BurgerPaper>
	)
}