import React from "react";
import { StyledButtonBlack } from "./black-button-style";

export const ButtonBlack = ({ isBigBlackBtn, text, onClick}) => <StyledButtonBlack onClick={onClick} isBigBlackBtn={isBigBlackBtn}>{text}</StyledButtonBlack>