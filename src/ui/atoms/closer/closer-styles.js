import { styled } from "@mui/material";

const CloserBtn = styled('div')`
	position: absolute;
	top: 15px;
	right: 15px;
	width: 17px;
	height: 17px;
	cursor: pointer;
	::before, ::after{
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		width: 2px;
		height: 24px;
		background-color: ${props => props.theme.palette.primary.main};
	}
	::before{
		transform: rotate(45deg);
		top: -20%;
		left: 45%;
	}
	::after{
		transform: rotate(-45deg);
		top: -20%;
		left: 45%;
	}
`;

export default CloserBtn;