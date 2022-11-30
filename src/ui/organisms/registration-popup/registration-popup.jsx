
import * as React from 'react';
import { Overflow, PopupTitle, PopupDescr, PopupInput } from '../../organisms/callback-popup/callback-popup-styles';
import { CheckboxAgree } from '../../molecules/checkbox-agree/checkbox-agree';
import { ButtonSqr } from '../../atoms/buttons/buttons';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import { StyledIconButton } from '../../organisms/callback-popup/callback-popup-styles';
import CloseIcon from '@mui/icons-material/Close';
import { RadioGroup } from '../../molecules/radio-button-group/radio-group';
import { theme } from '../../styles';
import {
	PaperRegistration,
	BoxPopupDescr,
	BoxInputName,
	BoxInputSurname,
	DataForSingIn,
	DataForSingInBox,
	AutorizationBox,
	Autorization,
} from './registration-popup-style';

const radioData = [
	{ label: 'Легковые авто', defaultChecked: false },
	{ label: 'Грузовые авто', defaultChecked: false },
]

export const PopupRegistrationkDesk = () =>

	<Overflow>
		<PaperRegistration>
			<StyledIconButton><CloseIcon fontSize="medium" color="primary" /></StyledIconButton>
			<PopupTitle>Регистрация аккаунта</PopupTitle>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><PopupInput placeholder="Имя" /></BoxInputName>
			<BoxInputSurname><PopupInput placeholder="Фамилия" /></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<BoxInputSurname><PopupInput placeholder="Почта" /></BoxInputSurname>
			<BoxInputSurname><PopupInput placeholder="Пароль" /></BoxInputSurname>
			<CheckboxAgree />
			<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Регистрация</ButtonBlack></ButtonBlackWrapper>
			<AutorizationBox>
				<Autorization>Авторизация на RENT AUTO</Autorization>
				<ButtonSqr>Войти</ButtonSqr>
			</AutorizationBox>
		</PaperRegistration>
	</Overflow>
