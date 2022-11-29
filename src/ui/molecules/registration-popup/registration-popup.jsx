
import * as React from 'react';
import { Overflow, PopupTitle, PopupDescr, PopupInput } from '../callback-popup/callback-popup-styles';
import {RadioButtons} from '../../atoms/radio-btn/radio-btn';
import {CheckboxAgree} from '../checkbox-agree/checkbox-agree';
import { Stack } from '@mui/material';
import { ButtonSqr } from '../../atoms/buttons/buttons';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import {theme} from '../../styles';
import {
	PaperRegistration, 
	BoxPopupDescr, 
	BoxInputName, 
	BoxInputSurname, 
	RadioDescr, 
	StackStyled, 
	DataForSingIn, 
	DataForSingInBox,
	AutorizationBox,
	Autorization, } from './registration-popup-style';

export const PopupRegistrationkDesk = () => {
	return (
		<Overflow>
			<PaperRegistration>
				<PopupTitle>Регистрация аккаунта</PopupTitle>
				<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
				<BoxInputName><PopupInput placeholder="Имя"/></BoxInputName>
				<BoxInputSurname><PopupInput placeholder="Фамилия"/></BoxInputSurname>
				<StackStyled>
					<Stack direction="row">
						<RadioButtons/>
						<RadioDescr>Легковые авто</RadioDescr>
					</Stack>
					<Stack direction="row">
						<RadioButtons/>
						<RadioDescr>Грузовые авто</RadioDescr>
					</Stack>
				</StackStyled>
				<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
				<BoxInputSurname><PopupInput placeholder="Почта"/></BoxInputSurname>
				<BoxInputSurname><PopupInput placeholder="Пароль"/></BoxInputSurname>
				<CheckboxAgree/>
				<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Регистрация</ButtonBlack></ButtonBlackWrapper>
				<AutorizationBox>
					<Autorization>Авторизация на RENT AUTO</Autorization>
					<ButtonSqr>Войти</ButtonSqr>
				</AutorizationBox>
			</PaperRegistration>
		</Overflow>
	)
}