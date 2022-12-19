import React from "react";
import { StyledButtonBlack } from "./black-button-style";

export const BlackButton = ({ isBig, text, onClick}) => <StyledButtonBlack onClick={onClick} isBig={isBig}>{text}</StyledButtonBlack>