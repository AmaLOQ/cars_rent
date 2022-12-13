import * as React from 'react';
import { PaperCallback, PopupTitle, PopupDescr, CallbackOverflow, BoxPopupDescr, BoxPopupInput } from './callback-popup-styles';
import { CheckboxWrapper } from '../../atoms/checkbox/checkbox-style';
import { CheckboxButton } from '../../atoms/checkbox/checkbox';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import {ReactComponent as Closer} from '../../ico/closer.svg'
import { StyledIconButton } from './callback-popup-styles';
import { ButtonBlack } from '../../atoms/buttons/black-button/black-button';
import { InputComponent } from '../../atoms/input/input';

export const PopupCallbackDesk = () =>
	<CallbackOverflow>
		<PaperCallback onClick={e => e.stopPropagation()}>
			<StyledIconButton><Closer/></StyledIconButton>
			<PopupTitle>Обратный звонок</PopupTitle>
			<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
			<BoxPopupInput><InputComponent placeholder="Телефон" type="tel" /></BoxPopupInput>
			<CheckboxWrapper><CheckboxButton text="Согласен (-на) с условиями оферты и обработкой персональных данных" /></CheckboxWrapper>
			<ButtonBlackWrapper><ButtonBlack isBigBlackBtn text="Отправить" /></ButtonBlackWrapper>
		</PaperCallback>
	</CallbackOverflow>
