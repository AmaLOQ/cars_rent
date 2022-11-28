import { createTheme } from "@mui/material";


const COLOR = {
	semiBlack: '#242424',
	btnHover: 'rgba(36, 36, 36, 0.7)',
	grayLight: '#EFEFEF',
	gradiendDef: 'linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%)',
	gradientHover: 'linear-gradient(269.87deg, rgba(1, 67, 105, 0.7) -17.97%, rgba(40, 159, 202, 0.7) 101.14%)',
	grayDark: '#636363',
	redLight: '#FFC5C5',
}

const theme = createTheme({
	palette: {
		primary: {
			main: COLOR.semiBlack,
			light: COLOR.btnHover,
		},
		secondary: {
			main: COLOR.grayDark,
			light: COLOR.grayLight,
		},
		warning: {
			main: COLOR.redLight
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
			cursor: 'pointer',
		},
		subtitle1: {
			fontSize: '24px',
		},
		subtitle2: {
			fontSize: '18px',
		},
		caption: {
			fontSize: '20px',
		},
		body1: {
			fontSize: '12px',
		},
		body2: {
			fontSize: '22px',
		}
	},
})  

export default theme;