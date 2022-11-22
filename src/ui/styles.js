import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";


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
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontSize: 54,
		},
		h2: {
			fontSize: 40,
		},
		h3: {
			fontSize: 18,
		},
		h4: {
			fontSize16: 16,
		},
		h5: {
			fontSize: 14,
		},
		button: {
			fontSize: 14,
		},
		subtitle1: {
			fontSize: 24,
			fontWeight: 700,
		},
		subtitle2: {
			fontSize: 18,
		},
		caption: {
			fontSize: 20,
		},
		body1: {
			fontSize: 12,
		}
	},
})  

export default theme;