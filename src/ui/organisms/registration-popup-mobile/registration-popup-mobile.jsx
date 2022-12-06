import * as React from 'react';
import { CheckboxButton } from '../../atoms/checkbox/checkbox';
import { Overflow } from '../callback-popup/callback-popup-styles';
import { PaperRegistrationMob, DataForSingInBox, PostStateBox, AutorzationBox40, Autorzation12, PopupTitel22 } from './registration-popup-mobile-styles';
import { BoxInputName, BoxInputSurname, DataForSingIn } from '..//registration-popup/registration-popup-style';
import { BoxPopupDescr, PopupDescr} from '../callback-popup/callback-popup-styles';
import { CheckboxWrapper } from '../../atoms/checkbox/checkbox-style';
import { RadioGroup } from '../../molecules/radio-button-group/radio-group';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { ButtonSquare } from '../../atoms/buttons/square-btn/square-button';
import { StyledIconButton } from '../callback-popup/callback-popup-styles';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonBlack } from '../../atoms/buttons/black-button/black-button';
import { InputComponent } from '../../atoms/input/input';

const radioData = [
	{ label: 'Легковые авто', defaultChecked: true },
	{ label: 'Грузовые авто', defaultChecked: false },
]

export const PopupRegistrationMob = () =>
	<Overflow>
		<PaperRegistrationMob>
			<StyledIconButton><CloseIcon fontSize="medium" color="primary" /></StyledIconButton>
			<PopupTitel22>Регистрация аккаунта</PopupTitel22>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><InputComponent placeholder="Имя" type="text" /></BoxInputName>
			<BoxInputSurname><InputComponent placeholder="Фамилия" type="text" /></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<PostStateBox><InputComponent placeholder="Почта" type="text" /></PostStateBox>
			<BoxInputSurname><InputComponent placeholder="Пароль" type="text" /></BoxInputSurname>
			<CheckboxWrapper><CheckboxButton text="Согласен (-на) с условиями оферты и обработкой персональных данных" /></CheckboxWrapper>
			<ButtonBlackWrapper><ButtonBlack isBigBlackBtn text="регистрация" /></ButtonBlackWrapper>
			<AutorzationBox40>
				<Autorzation12>Авторизация на <span>rent auto</span></Autorzation12>
				<ButtonSquare text="Войти" />
			</AutorzationBox40>
		</PaperRegistrationMob>
	</Overflow>
