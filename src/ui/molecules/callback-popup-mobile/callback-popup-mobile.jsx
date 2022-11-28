import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Closer from '../../atoms/closer/closer';
import CheckboxAgree from '../checkbox-agree/checkbox-agree';
import SendMobBtn from '../../atoms/buttons/send-mobile-btn';
import PaperCallbackMob from './callback-popup-mobile-styles';
import { 
	Overflow, 
	PopupTitel, 
	PopupDescr, 
	BoxPopupDescr,
	BoxPopupInput,
	PopupInput
} from '../callback-popup/callback-popup-styles';

export const PopupCallbackMob = () => {
	return(
		<Overflow>
			<CssBaseline>
				<PaperCallbackMob>
					<Closer/>
					<PopupTitel>Обратный звонок</PopupTitel>
					<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
					<BoxPopupInput><PopupInput placeholder="Телефон" type="tel"></PopupInput></BoxPopupInput>
					<CheckboxAgree/>
					<SendMobBtn/>
				</PaperCallbackMob>
			</CssBaseline>
		</Overflow>
	)
}