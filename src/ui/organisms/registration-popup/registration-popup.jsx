
import * as React from 'react';
import { Overflow, PopupTitle, PopupDescr } from '../../organisms/callback-popup/callback-popup-styles';
import { CheckboxButton } from '../../atoms/checkbox/checkbox';
import { ButtonSquare } from '../../atoms/buttons/square-btn/square-button';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { StyledIconButton } from '../../organisms/callback-popup/callback-popup-styles';
import CloseIcon from '@mui/icons-material/Close';
import { RadioGroup } from '../../molecules/radio-button-group/radio-group';
import { ButtonBlack } from '../../atoms/buttons/black-button/black-button';
import { InputComponent } from '../../atoms/input/input';
import { radioData } from './radio-data';
import {PaperRegistration, BoxPopupDescr, BoxInputName, BoxInputSurname, DataForSingIn, DataForSingInBox, AutorizationBox, Autorization, CheckboxWrapperReg
} from './registration-popup-style';

export const PopupRegistrationkDesk = () =>
	<Overflow>
		<PaperRegistration onClick={(e) => e.stopPropagation()}>
			<StyledIconButton><CloseIcon fontSize="medium" color="primary" /></StyledIconButton>
			<PopupTitle>Регистрация аккаунта</PopupTitle>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><InputComponent placeholder="имя" type="text" /></BoxInputName>
			<BoxInputSurname><InputComponent placeholder="Фамилия" type="text" /></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<BoxInputSurname><InputComponent placeholder="Почта" type="text" /></BoxInputSurname>
			<BoxInputSurname><InputComponent placeholder="Пароль" type="text" /></BoxInputSurname>
			<CheckboxWrapperReg><CheckboxButton text="Согласен (-на) с условиями оферты и обработкой персональных данных" /></CheckboxWrapperReg>
			<ButtonBlackWrapper><ButtonBlack isBigBlackBtn text="регистрация" /></ButtonBlackWrapper>
			<AutorizationBox>
				<Autorization>Авторизация на RENT AUTO</Autorization>
				<ButtonSquare text="Войти" />
			</AutorizationBox>
		</PaperRegistration>
	</Overflow>
