
import * as React from 'react';
import { Overflow, PopupTitel, PopupDescr, PopupInput } from '../callback-popup/callback-popup-styles';
import Closer from '../../atoms/closer/closer';
import RadioButtons from '../../atoms/radio-btn/radio-btn';
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
	Autorization
} from './registration-popup-style';
import CheckboxAgree from '../checkbox-agree/checkbox-agree';
import RegPopupBtn from '../../atoms/buttons/registration-popup-btn';
import SingInSqrBtn from '../../atoms/buttons/sing-in-square-btn';
import { CssBaseline, Stack } from '@mui/material';


export default function PopoupRegistrationkModal() {
	return (
		<Overflow>
			<CssBaseline>
				<PaperRegistration>
					<Closer/>
					<PopupTitel>Регистрация аккаунта</PopupTitel>
					<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
					<BoxInputName><PopupInput placeholder="Имя"/></BoxInputName>
					<BoxInputSurname><PopupInput placeholder="Имя"/></BoxInputSurname>
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
					<RegPopupBtn/>
					<AutorizationBox>
						<Autorization>Авторизация на RENT AUTO</Autorization>
						<SingInSqrBtn/>
					</AutorizationBox>
				</PaperRegistration>
			</CssBaseline>
		</Overflow>
	)
}