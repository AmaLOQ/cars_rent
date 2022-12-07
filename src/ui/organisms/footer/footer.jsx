import React from "react";
import { linksDataFooter } from "./links-data";
import { Link } from "../../atoms/link/link";
import { LinksGroup } from "../../molecules/promo-links-group/promo-links-group";
import { ComponentIcon } from "../../molecules/component-icon/conponent-icon";
import { iconData } from "../../molecules/component-icon/component-icon-data";
import { FootertWrapperNaw, FootertNav, FootertContact, FootertContactCall, FootertContactPhone, FootertWrapperRights, FootertWrapperRightsFz14,
	FootertWrapperRightsFz16,
	FootertWrapperRightsIcoContainer,
} from "./footer-styles";

export const Footer = () => 
	<>
		<FootertWrapperNaw>
			<FootertNav>
				<LinksGroup linksData={linksDataFooter}/>
			</FootertNav>
			<FootertContact>
				<FootertContactCall>Связаться с нами</FootertContactCall>
				<FootertContactPhone><Link type="tel" isHash>+7 495 120-80-70</Link></FootertContactPhone> 
			</FootertContact>
		</FootertWrapperNaw>
		<FootertWrapperRights>
			<FootertWrapperRightsFz16>© 2022 ООО «RENT AVTO»</FootertWrapperRightsFz16>
			<FootertWrapperRightsFz14>Авторские права © 2022 все права защищены.</FootertWrapperRightsFz14>
			<FootertWrapperRightsIcoContainer>
				<ComponentIcon iconData={iconData}/>
			</FootertWrapperRightsIcoContainer>
		</FootertWrapperRights>
	</>
