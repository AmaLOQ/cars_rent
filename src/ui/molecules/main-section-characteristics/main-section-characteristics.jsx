import { StyledCharacteristicsContainer, StyledCharacteristicsTitle, StyledCharacteristicsTabContainer } from "./main-section-characteristics-style";
import { TabsItem } from "../../atoms/tabs/tabs";

export const Characteristics = () => 
	<StyledCharacteristicsContainer>
		<StyledCharacteristicsTitle>Характеристики</StyledCharacteristicsTitle>
		<StyledCharacteristicsTabContainer><TabsItem/></StyledCharacteristicsTabContainer>
	</StyledCharacteristicsContainer>