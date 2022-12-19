
import * as React from 'react';
import { PopupTitle, PopupDescr } from '../callback-popup/callback-popup-desk-styles';
import { CheckboxButton } from '../../atoms/checkbox/checkbox-button';
import { ButtonSquare } from '../../atoms/buttons/square-btn/square-button';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { StyledIconButton } from '../callback-popup/callback-popup-desk-styles';
import { ReactComponent as Closer } from '../../ico/closer.svg'
import { RadioGroup } from '../../molecules/radio-group/radio-group';
import { BlackButton } from '../../atoms/buttons/black-button/black-button';
import { Input } from '../../atoms/input/input';
import { radioData } from './radio-data';
import { CheckboxWrapper30px } from '../../atoms/checkbox/checkbox-style';
import {PaperRegistration, BoxPopupDescr, BoxInputName, BoxInputSurname, DataForSingIn, DataForSingInBox, AutorizationBox, Autorization,
	RegistrationOverflow } from './registration-popup-desk-style';

export const RegistrationkPopupDesk = () =>
	<RegistrationOverflow>
		<PaperRegistration onClick={(e) => e.stopPropagation()}>
			<StyledIconButton><Closer /></StyledIconButton>
			<PopupTitle>Регистрация аккаунта</PopupTitle>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><Input placeholder="имя" type="text" /></BoxInputName>
			<BoxInputSurname><Input placeholder="Фамилия" type="text" /></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<BoxInputSurname><Input placeholder="Почта" type="text" /></BoxInputSurname>
			<BoxInputSurname><Input placeholder="Пароль" type="text" /></BoxInputSurname>
			<CheckboxWrapper30px><CheckboxButton text="Согласен (-на) c условиями оферты и обработкой персональных данных" /></CheckboxWrapper30px>
			<ButtonBlackWrapper><BlackButton isBig text="регистрация" /></ButtonBlackWrapper>
			<AutorizationBox>
				<Autorization>Авторизация на RENT AUTO</Autorization>
				<ButtonSquare text="Войти" />
			</AutorizationBox>
		</PaperRegistration>
	</RegistrationOverflow>
