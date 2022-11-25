import * as React from 'react';
import { CssBaseline, Stack } from '@mui/material';
import Closer from '../../atoms/closer/closer';
import RegPopupMobBtn from '../../atoms/buttons/registration-popup-mobile-btn';
import RadioButtons from '../../atoms/radio-btn/radio-btn';
import CheckboxAgree from '../checkbox-agree/checkbox-agree';
import SingInSqrBtn from '../../atoms/buttons/sing-in-square-btn';
import { Overflow } from '../callback-popup/callback-popup-styles';
import {PaperRegistrationMob, DataForSingInBox, PostStateBox, AutorzationBox40, Autorzation12, PopupTitel22, PopupDescrMobile}  from './registration-popup-mobile-styles';
import { BoxPopupDescr, 
		PopupInput,
} from '../callback-popup/callback-popup-styles';
import { BoxInputName, BoxInputSurname, StackStyled, RadioDescr, DataForSingIn} from '../registration-popup/registration-popup-style';

export default function PopupRegistrationMob() {
	return(	
		<Overflow>
			<CssBaseline>
				<PaperRegistrationMob>
					<Closer/>
					<PopupTitel22>Регистрация аккаунта</PopupTitel22>
					<BoxPopupDescr><PopupDescrMobile>Для того, чтобы войти или создать аккаунт</PopupDescrMobile></BoxPopupDescr>
					<BoxInputName><PopupInput placeholder="Имя" type="text"></PopupInput></BoxInputName>
					<BoxInputSurname><PopupInput placeholder="Фамилия" type="text"></PopupInput></BoxInputSurname>
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
					<PostStateBox><PopupInput placeholder="Почта" type="text"/></PostStateBox>
					<BoxInputSurname><PopupInput placeholder="Пароль" type="text"/></BoxInputSurname>
					<CheckboxAgree/>
					<RegPopupMobBtn/>
					<AutorzationBox40>
						<Autorzation12>Авторизация на RENT AUTO</Autorzation12>
						<SingInSqrBtn/>
					</AutorzationBox40>
				</PaperRegistrationMob>
			</CssBaseline>
		</Overflow>
	)
}