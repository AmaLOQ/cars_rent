import * as React from 'react';
import { Stack } from '@mui/material';
import {RadioButtons} from '../../atoms/radio-btn/radio-btn';
import {CheckboxAgree} from '../checkbox-agree/checkbox-agree';
import { Overflow } from '../callback-popup/callback-popup-styles';
import {PaperRegistrationMob, DataForSingInBox, StackStyledMob, PostStateBox, AutorzationBox40, Autorzation12, PopupTitel22}  from './registration-popup-mobile-styles';
import { BoxInputName, BoxInputSurname, RadioDescr, DataForSingIn} from '../registration-popup/registration-popup-style';
import { BoxPopupDescr, PopupDescr,PopupInput } from '../callback-popup/callback-popup-styles';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import { ButtonSqr } from '../../atoms/buttons/buttons';
import {theme} from "../../styles"


export const PopupRegistrationMob = () => {
	return(	
		<Overflow>
			<PaperRegistrationMob>
				<PopupTitel22>Регистрация аккаунта</PopupTitel22>
				<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
				<BoxInputName><PopupInput placeholder="Имя" type="text"></PopupInput></BoxInputName>
				<BoxInputSurname><PopupInput placeholder="Фамилия" type="text"></PopupInput></BoxInputSurname>
				<StackStyledMob>
					<Stack direction="row">
						<RadioButtons/>
						<RadioDescr>Легковые авто</RadioDescr>
					</Stack>
					<Stack direction="row">
						<RadioButtons/>
						<RadioDescr>Грузовые авто</RadioDescr>
					</Stack>
				</StackStyledMob>
				<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
				<PostStateBox><PopupInput placeholder="Почта" type="text"/></PostStateBox>
				<BoxInputSurname><PopupInput placeholder="Пароль" type="text"/></BoxInputSurname>
				<CheckboxAgree/>
				<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Регистрация</ButtonBlack></ButtonBlackWrapper>
				<AutorzationBox40>
					<Autorzation12>Авторизация на RENT AUTO</Autorzation12>
					<ButtonSqr>Войти</ButtonSqr>
				</AutorzationBox40>
			</PaperRegistrationMob>
		</Overflow>
	)
}