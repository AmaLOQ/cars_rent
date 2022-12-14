import React from "react";
import { linksDataFooter } from "./links-data";
import { Link } from "../../atoms/link/link";
import { LinksGroup } from "../../molecules/links-group/links-group";
import { IconGroup } from "../icon-group/icon-group";
import { iconDataFooter } from "./icons-data";
import { FootertWrapperNav, FootertNav, FootertContact, FootertContactCall, FootertContactPhone, FootertWrapperRights, FootertWrapperRightsFz14,
	FootertWrapperRightsFz16,
	FootertWrapperRightsIcoContainer,
} from "./footer-styles";

export const Footer = () => 
	<>
		<FootertWrapperNav>
			<FootertNav>
				<LinksGroup linksData={linksDataFooter}/>
			</FootertNav>
			<FootertContact>
				<FootertContactCall>Связаться с нами</FootertContactCall>
				<FootertContactPhone><Link type="tel" isHash>+7 495 120-80-70</Link></FootertContactPhone> 
			</FootertContact>
		</FootertWrapperNav>
		<FootertWrapperRights>
			<FootertWrapperRightsFz16>© 2022 ООО «RENT AVTO»</FootertWrapperRightsFz16>
			<FootertWrapperRightsFz14>Авторские права © 2022 все права защищены.</FootertWrapperRightsFz14>
			<FootertWrapperRightsIcoContainer>
				<IconGroup isHash iconData={iconDataFooter}/>
			</FootertWrapperRightsIcoContainer>
		</FootertWrapperRights>
	</>
