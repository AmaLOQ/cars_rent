import * as React from 'react';
import { PaperCallback, PopupTitle, PopupDescr, CallbackOverflow, BoxPopupDescr, BoxPopupInput } from './callback-popup-desk-styles';
import { CheckboxWrapper25px } from '../../atoms/checkbox/checkbox-style';
import { CheckboxButton } from '../../atoms/checkbox/checkbox-button';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { ReactComponent as Closer } from '../../ico/closer.svg'
import { StyledIconButton } from './callback-popup-desk-styles';
import { BlackButton } from '../../atoms/buttons/black-button/black-button';
import { Input } from '../../atoms/input/input';

export const CallbackPopupDesk = () =>
	<CallbackOverflow>
		<PaperCallback onClick={e => e.stopPropagation()}>
			<StyledIconButton><Closer /></StyledIconButton>
			<PopupTitle>Обратный звонок</PopupTitle>
			<BoxPopupDescr><PopupDescr>Мы свяжемся c вами в ближайшее время!</PopupDescr></BoxPopupDescr>
			<BoxPopupInput><Input placeholder="Телефон" type="tel" /></BoxPopupInput>
			<CheckboxWrapper25px><CheckboxButton text="Согласен (-на) c условиями оферты и обработкой персональных данных" /></CheckboxWrapper25px>
			<ButtonBlackWrapper><BlackButton isBig text="Отправить" /></ButtonBlackWrapper>
		</PaperCallback>
	</CallbackOverflow>
