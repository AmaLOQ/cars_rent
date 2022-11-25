import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Closer from '../../atoms/closer/closer';
import CheckboxAgree from '../checkbox-agree/checkbox-agree';
import SendMobBtn from '../../atoms/buttons/send-mobile-btn';
import { 
	Overflow, 
	PopupTitel, 
	PopupDescr, 
	BoxPopupDescr,
	BoxPopupInput,
	PopupInput
} from '../callback-popup/callback-popup-styles';
import {PaperCallbackMob, PopupTitleMobile} from './callback-popup-mobile-styles';

export default function PopupCallbackMob() {
	return(
		<Overflow>
			<CssBaseline>
				<PaperCallbackMob>
					<Closer/>
					<PopupTitleMobile>Обратный звонок</PopupTitleMobile>
					<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
					<BoxPopupInput><PopupInput placeholder="Телефон" type="tel"></PopupInput></BoxPopupInput>
					<CheckboxAgree/>
					<SendMobBtn/>
				</PaperCallbackMob>
			</CssBaseline>
		</Overflow>
	)
}