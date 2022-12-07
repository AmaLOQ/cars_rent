import React from "react";
import telegram from "../../ico/telegram.svg";
import viber from "../../ico/viber.svg";
import mail from "../../ico/mail.svg";
import logo from '../../ico/logo.svg';
import {Link} from "@mui/material";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { FootertWrapperNaw, FootertNav, FootertContact, FootertContactCall, FootertContactPhone, FootertWrapperRights, FootertWrapperRightsFz14,
	FootertWrapperRightsFz16,
	FootertWrapperRightsIcoContainer,
} from "./footer-styles";

const linksData = [
	{text: 'Аренда Авто', isHash: true, variant: 'menuPromo'},
	{text: 'О нас', isHash: true, variant: 'menuPromo'},
	{text: 'Новости', isHash: true, variant: 'menuPromo'},
	{text: 'Сдать авто', isHash: true, variant: 'menuPromo'},
	{text: 'Контакты', isHash: true, variant: 'menuPromo'},
	{text: 'Отзывы', isHash: true, variant: 'menuPromo'},
]

export const Footer = () => 
	<>
		<FootertWrapperNaw>
			<FootertNav>
				<LinksGroup linksData={linksData}/>
			</FootertNav>
			<FootertContact>
				<FootertContactCall>Связаться с нами</FootertContactCall>
				<FootertContactPhone><Link href="#" type="tel">+7 495 120-80-70</Link></FootertContactPhone> 
			</FootertContact>
		</FootertWrapperNaw>
		<FootertWrapperRights>
			<FootertWrapperRightsFz16>© 2022 ООО «RENT AVTO»</FootertWrapperRightsFz16>
			<FootertWrapperRightsFz14>Авторские права © 2022 все права защищены.</FootertWrapperRightsFz14>
			<FootertWrapperRightsIcoContainer>
				<Link href="#"><img src={telegram} alt="Телеграм"/></Link>
				<Link href="#"><img src={viber} alt="Вибер"/></Link>
				<Link href="#"><img src={mail} alt="Майл"/></Link>
			</FootertWrapperRightsIcoContainer>
		</FootertWrapperRights>
	</>
