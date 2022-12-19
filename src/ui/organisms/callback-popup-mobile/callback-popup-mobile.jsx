import * as React from 'react';
import { PaperCallbackMob } from './callback-popup-mobile-styles';
import { CheckboxWrapper } from '../../atoms/checkbox/checkbox-style';
import { CheckboxButton } from '../../atoms/checkbox/checkbox';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { CallbackOverflow, PopupTitle, PopupDescr, BoxPopupDescr, BoxPopupInput } from '../callback-popup/callback-popup-styles';
import { StyledIconButton } from '../callback-popup/callback-popup-styles';
import {ReactComponent as Closer} from '../../ico/closer.svg'
import { ButtonBlack } from '../../atoms/buttons/black-button/black-button';
import { InputComponent } from '../../atoms/input/input';

export const CallbackPopupMob = () =>
	<CallbackOverflow>
		<PaperCallbackMob onClick={e => e.stopPropagation()}>
			<StyledIconButton><Closer/></StyledIconButton>
			<PopupTitle>Обратный звонок</PopupTitle>
			<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
			<BoxPopupInput><InputComponent placeholder="Телефон" type="tel" /></BoxPopupInput>
			<CheckboxWrapper><CheckboxButton text="Согласен (-на) с условиями оферты и обработкой персональных данных" /></CheckboxWrapper>
			<ButtonBlackWrapper><ButtonBlack isBig text="Отправить" /></ButtonBlackWrapper>
		</PaperCallbackMob>
	</CallbackOverflow>
