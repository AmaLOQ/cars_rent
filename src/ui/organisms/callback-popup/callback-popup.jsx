import * as React from 'react';
import { PaperCallback, PopupTitle, PopupDescr, PopupInput, Overflow, BoxPopupDescr, BoxPopupInput } from './callback-popup-styles';
import { CheckboxAgree } from '../../molecules/checkbox-agree/checkbox-agree';
import { ButtonBlack, ButtonBlackWrapper } from '../../atoms/buttons/buttons';
import CloseIcon from '@mui/icons-material/Close';
import { StyledIconButton } from './callback-popup-styles';
import { theme } from '../../styles';

export const PopoupCallbackDesk = () =>

	<Overflow>
		<PaperCallback>
			<StyledIconButton><CloseIcon fontSize="medium" color="primary" /></StyledIconButton>
			<PopupTitle>Обратный звонок</PopupTitle>
			<BoxPopupDescr><PopupDescr>Мы свяжемся с вами в ближайшее время!</PopupDescr></BoxPopupDescr>
			<BoxPopupInput><PopupInput placeholder="Телефон"></PopupInput></BoxPopupInput>
			<CheckboxAgree />
			<ButtonBlackWrapper><ButtonBlack blackBtn={theme.blackBtn}>Отправить</ButtonBlack></ButtonBlackWrapper>
		</PaperCallback>
	</Overflow>
