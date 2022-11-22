import * as React from 'react';
import {PaperCallback, PopupTitel, PopupDescr, PopupInput, CheckboxDescr, Overflow} from './callback-popup-styles';
import Closer from '../../atoms/closer/closer';
import CheckboxButton from '../../atoms/checkbox/checkbox';
import SendBtn from '../../atoms/buttons/send-btn';
import { CssBaseline,  Stack} from '@mui/material';

export default function PopoupCallbackModal() {
  return (
	<Overflow>
		<CssBaseline>
			<PaperCallback>
				<Closer/>
				<PopupTitel>Обратный звонок</PopupTitel>
				<PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr>
				<PopupInput placeholder='Телефон' type='tel'/>
				<Stack direction = "row">
				<CheckboxButton/>
				<CheckboxDescr>Согласен (-на) с условиями оферты и обработкой персональных данных</CheckboxDescr>
				</Stack>
				<SendBtn/>
			</PaperCallback>
		</CssBaseline> 
	</Overflow>
  );
}