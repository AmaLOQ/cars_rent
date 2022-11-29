import * as React from 'react';
import {PaperCallback, PopupTitle, PopupDescr, PopupInput, Overflow, BoxPopupDescr, BoxPopupInput} from './callback-popup-styles';
import closer from "../../ico/cancel.svg";
import { IconButton } from '@mui/material';
import { CheckboxAgree } from '../checkbox-agree/checkbox-agree';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import {theme} from '../../styles';

export const PopoupCallbackDesk = () => {
	return (
	<Overflow>
		<PaperCallback>
			<PopupTitle>Обратный звонок</PopupTitle>
			<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
			<BoxPopupInput><PopupInput placeholder="Телефон"></PopupInput></BoxPopupInput>
			<CheckboxAgree/>
			<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Отправить</ButtonBlack></ButtonBlackWrapper>
		</PaperCallback>
	</Overflow>
	);
}