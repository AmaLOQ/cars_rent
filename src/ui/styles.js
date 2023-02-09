import { createTheme } from "@mui/material";

const COLOR = {
	SEMI_BLACK: '#242424',
	BTN_HOVER: 'rgba(36, 36, 36, 0.7)',
	GRAY_DARK: '#636363',
	GRAY_LIGHT: '#EFEFEF',
	GRADIENT_DEFAULT: 'linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%)',
	GRADIENT_HOVER: 'linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%)',
	RED_LIGHT: '#FFC5C5',
}

export const theme = createTheme({
	palette: {
		primary: {
			main: COLOR.SEMI_BLACK,
			light: COLOR.BTN_HOVER,
		},
		secondary: {
			main: COLOR.GRAY_DARK,
			light: COLOR.GRAY_LIGHT,
		},
		warning: {
			main: COLOR.RED_LIGHT
		},
		white: '#fff',
	},
	typography: {
		fontFamily: 'Montserrat',
		fontSize: '16px',
		fontWeight: 600,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		fontWeightExtraBold: 800,
		h1: {
			fontSize: '54px',
		},
		h2: {
			fontSize: '40px',
		},
		h3: {
			fontSize: '18px',
		},
		h4: {
			fontSize: '16px',
		},
		h5: {
			fontSize: '14px',
		},
		button: {
			fontSize: '14px',
		},
		subtitle1: {
			fontSize: '24px',
			fontWeight: 700,
		},
		subtitle2: {
			fontSize: '18px',
		},
		caption: {
			fontSize: '20px',
		},
		caption2: {
			fontSize: '16px',
		},
		body1: {
			fontSize: '12px',
		},
		body2: {
			fontSize: '22px',
		},
	},
	media: {
		lg: '(max-width: 1199.9px)',
		md: '(max-width: 991.9px)',
		sm: '(max-width: 767.9px)',
		phone: '(max-width: 575.9px)',
		smallMobile: '(max-width: 496px)',
		landscape: '(max-height: 666.9px)',
	},
	customComponents: {
		buttons: {
			bigBlackBtn: {
				fontSize: '16px',
				padding: '17px 50px',
				textTransform: 'uppercase',
			},
			smallGradientBtn: {
				fontSize: '14px',
				padding: '7.7px 57.7px',
				textTransform: 'capitalize',
			},
		},
	},
}) 
