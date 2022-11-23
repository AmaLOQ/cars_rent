import { Paper, styled, Typography, Box, Grid} from "@mui/material";

const CountPaper = styled(Paper)`
	width: 370px;
	height: 390px;
	padding: 30px 25px 37px;
	background: ${props => props.theme.palette.white};
`;

const CountPaperTitle = styled(Typography)`
	font-weight: 600;
	font-size: 18px;
	line-height: 140%;
	text-align: center;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
`;

const PriceWrapper = styled(Box)`
	width: 100%;
	margin-top: 34px;
`;

const GridRow = styled(Grid)`
	display: grid;
	grid-template-columns: 120px 1fr;
	grid-template-row: repeat(2, 18px);
	grid-auto-row: auto;
	margin-bottom: 20px;
`;

const GridDays = styled(Typography)`
	font-weight: 600;
	font-size: 14px;
	line-height: 140%;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
`;

const GridPrice = styled(Typography)`
	grid-column: 2 / 3;
	grid-row: 1 / 3;
	justify-self: end;
	margin-right: 15px;
	font-weight: 700;
	font-size: 22px;
	line-height: 140%;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
`;

const GridPriceDays = styled(Typography)`
	display: inline-block;
	font-weight: 500;
	font-size: 18px;
	line-height: 140%;
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary.main};
`;

const GridPriceDiscount = styled(Box)`
	display: inline-block;
	text-align: center;
	width: 33px;
	height: 15px;
	background: #FFC5C5;
	border-radius: 4px;
	font-weight: 400;
	font-size: 12px;
	line-height: 140%;
	color: ${props => props.theme.palette.primary.main};
`;



export {
	CountPaper,
	CountPaperTitle,
	PriceWrapper,
	GridRow,
	GridDays,
	GridPrice,
	GridPriceDays,
	GridPriceDiscount
}