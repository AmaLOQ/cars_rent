import { Box, styled } from "@mui/material";

const RingPromo = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	background: linear-gradient(269.87deg, #014369 -17.97%, #289FCA 101.14%);
`;


const EmptyWhiteRingPromo = styled(Box)`
	width: 11px;
	height: 11px;
	background: #fff;
	border-radius: 100%;
`;


export {
	RingPromo,
	EmptyWhiteRingPromo
}