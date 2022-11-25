import * as React from 'react';
import {PaperCallback, PopupTitel, PopupDescr, PopupInput, Overflow, BoxPopupDescr, BoxPopupInput} from './callback-popup-styles';
import Closer from '../../atoms/closer/closer';
import SendBtn from '../../atoms/buttons/send-btn';
import CheckboxAgree from '../checkbox-agree/checkbox-agree';
import { CssBaseline } from '@mui/material';

export default function PopoupCallbackDesk() {
	// Здесь получить размер окна из wind в useEffect и в моб разрешении устанавливать в use state флаг is mobile
	return (
		<Overflow>
			<CssBaseline>
				<PaperCallback>
					<Closer/>
					<PopupTitel>Обратный звонок</PopupTitel>
					<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
					<BoxPopupInput><PopupInput placeholder='Телефон' type='tel'/></BoxPopupInput>
					<CheckboxAgree/>
					<SendBtn/>
				</PaperCallback>
			</CssBaseline> 
		</Overflow>
	);
}