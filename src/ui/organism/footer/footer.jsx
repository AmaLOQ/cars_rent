import React from "react";
import { CssBaseline, Box } from "@mui/material";
import telegram from "../../ico/telegram.svg";
import viber from "../../ico/viber.svg";
import mail from "../../ico/mail.svg";
import { 
	FootertWrapperNaw, 
	FootertNav,
	FootertNavTopic,
	FootertContact,
	FootertContactCall,
	FootertContactPhone,
	FootertWrapperRights,
	FootertWrapperRightsFz14,
	FootertWrapperRightsFz16,
	FootertWrapperRightsIcoContainer,
	FootertWrapperRightsIcoBox
} from "./footer-styles";

export default function Footer() {
	return(
		<CssBaseline>
			<FootertWrapperNaw>
				<FootertNav>
					<FootertNavTopic>Аренда Авто</FootertNavTopic>
					<FootertNavTopic>О нас</FootertNavTopic>
					<FootertNavTopic>Новости</FootertNavTopic>
					<FootertNavTopic>Сдать авто</FootertNavTopic>
					<FootertNavTopic>Контакты</FootertNavTopic>
					<FootertNavTopic>Отзывы</FootertNavTopic>
				</FootertNav>
				<FootertContact>
					<FootertContactCall>Связаться с нами</FootertContactCall>
					<FootertContactPhone><a href="#" type="tel">+7 495 120-80-70</a></FootertContactPhone> 
				</FootertContact>
			</FootertWrapperNaw>
			<FootertWrapperRights>
					<FootertWrapperRightsFz16>© 2022 ООО «RENT AVTO»</FootertWrapperRightsFz16>
					<FootertWrapperRightsFz14>Авторские права © 2022 все права защищены.</FootertWrapperRightsFz14>
					<FootertWrapperRightsIcoContainer>
						<Box><img src={telegram} alt="Телеграм"/></Box>
						<Box><img src={viber} alt="Вибер"/></Box>
						<Box><img src={mail} alt="Майл"/></Box>
					</FootertWrapperRightsIcoContainer>
				</FootertWrapperRights>
		</CssBaseline>
	)
}