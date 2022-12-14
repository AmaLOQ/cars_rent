import * as React from 'react';
import { CheckboxButton } from '../../atoms/checkbox/checkbox-button';
import { RegistrationOverflow } from '../registration-popup/registration-popup-desk-style';
import { PaperRegistrationMob, DataForSingInBox, PostStateBox, AutorzationBox40, Autorzation12, PopupTitel22 } from './registration-popup-mobile-styles';
import { BoxInputName, BoxInputSurname, DataForSingIn } from '../registration-popup/registration-popup-desk-style';
import { BoxPopupDescr, PopupDescr } from '../callback-popup/callback-popup-desk-styles';
import { CheckboxWrapper30px } from '../../atoms/checkbox/checkbox-style';
import { RadioGroup } from '../../molecules/radio-group/radio-group';
import { ButtonBlackWrapper } from '../../atoms/buttons/black-button/black-button-style';
import { ButtonSquare } from '../../atoms/buttons/square-btn/square-button';
import { StyledIconButton } from '../callback-popup/callback-popup-desk-styles';
import { ReactComponent as Closer } from '../../ico/closer.svg'
import { BlackButton } from '../../atoms/buttons/black-button/black-button';
import { Input } from '../../atoms/input/input';

const radioData = [
	{ label: 'Легковые авто', defaultChecked: true },
	{ label: 'Грузовые авто', defaultChecked: false },
]

export const RegistrationPopupMobile = () =>
	<RegistrationOverflow>
		<PaperRegistrationMob onClick={(e) => e.stopPropagation()}>
			<StyledIconButton><Closer /></StyledIconButton>
			<PopupTitel22>Регистрация аккаунта</PopupTitel22>
			<BoxPopupDescr><PopupDescr>Для того, чтобы войти или создать аккаунт</PopupDescr></BoxPopupDescr>
			<BoxInputName><Input placeholder="Имя" type="text" /></BoxInputName>
			<BoxInputSurname><Input placeholder="Фамилия" type="text" /></BoxInputSurname>
			<RadioGroup radioData={radioData} />
			<DataForSingInBox><DataForSingIn>данные для входа в сервис</DataForSingIn></DataForSingInBox>
			<PostStateBox><Input placeholder="Почта" type="text" /></PostStateBox>
			<BoxInputSurname><Input placeholder="Пароль" type="text" /></BoxInputSurname>
			<CheckboxWrapper30px><CheckboxButton text="Согласен (-на) c условиями оферты и обработкой персональных данных" /></CheckboxWrapper30px>
			<ButtonBlackWrapper><BlackButton isBig text="регистрация" /></ButtonBlackWrapper>
			<AutorzationBox40>
				<Autorzation12>Авторизация на <span>rent auto</span></Autorzation12>
				<ButtonSquare text="Войти" />
			</AutorzationBox40>
		</PaperRegistrationMob>
	</RegistrationOverflow>
