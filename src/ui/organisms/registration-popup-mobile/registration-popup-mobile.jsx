import * as React from 'react';
import { CheckboxAgree } from '../../molecules/checkbox-agree/checkbox-agree';
import { Overflow } from '../callback-popup/callback-popup-styles';
import { PaperRegistrationMob, DataForSingInBox, PostStateBox, AutorzationBox40, Autorzation12, PopupTitel22 } from './registration-popup-mobile-styles';
import { BoxInputName, BoxInputSurname, DataForSingIn } from '..//registration-popup/registration-popup-style';
import { BoxPopupDescr, PopupDescr, PopupInput } from '../callback-popup/callback-popup-styles';
import { RadioGroup } from '../../molecules/radio-button-group/radio-group';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import { ButtonSqr } from '../../atoms/buttons/buttons';
import { StyledIconButton } from '../callback-popup/callback-popup-styles';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from "../../styles";

const radioData = [
	{ label: 'Легковые авто', defaultChecked: false },
	{ label: 'Грузовые авто', defaultChecked: false },
]

export const PopupRegistrationMob = () =>

	<Overflow>
		<PaperRegistrationMob>
			<StyledIconButton><CloseIcon fontSize="medium" color="primary" /></StyledIconButton>
			<PopupTitel22>Регистрация аккаунта</PopupTitel22>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><PopupInput placeholder="Имя" type="text"></PopupInput></BoxInputName>
			<BoxInputSurname><PopupInput placeholder="Фамилия" type="text"></PopupInput></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<PostStateBox><PopupInput placeholder="Почта" type="text" /></PostStateBox>
			<BoxInputSurname><PopupInput placeholder="Пароль" type="text" /></BoxInputSurname>
			<CheckboxAgree />
			<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Регистрация</ButtonBlack></ButtonBlackWrapper>
			<AutorzationBox40>
				<Autorzation12>Авторизация на RENT AUTO</Autorzation12>
				<ButtonSqr>Войти</ButtonSqr>
			</AutorzationBox40>
		</PaperRegistrationMob>
	</Overflow>
