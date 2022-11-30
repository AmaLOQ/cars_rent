import * as React from 'react';
import {PaperCallbackMob} from './callback-popup-mobile-styles';
import { CheckboxAgree } from '../../molecules/checkbox-agree/checkbox-agree';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import {theme} from '../../styles';
import { Overflow, PopupTitle, PopupDescr, BoxPopupDescr,BoxPopupInput,PopupInput } from '../callback-popup/callback-popup-styles';
import { StyledIconButton } from '../callback-popup/callback-popup-styles';
import CloseIcon from '@mui/icons-material/Close';

export const PopupCallbackMob = () => 

		<Overflow>
			<PaperCallbackMob>
				<StyledIconButton><CloseIcon fontSize="medium" color="primary"/></StyledIconButton>	
				<PopupTitle>Обратный звонок</PopupTitle>
				<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
				<BoxPopupInput><PopupInput placeholder="Телефон" type="tel"></PopupInput></BoxPopupInput>
				<CheckboxAgree/>
				<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Отправить</ButtonBlack></ButtonBlackWrapper>
			</PaperCallbackMob>
		</Overflow>
