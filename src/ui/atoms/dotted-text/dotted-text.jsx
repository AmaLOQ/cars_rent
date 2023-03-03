import React from "react";
import { StyledDottedText } from "./dotted.text-style";

export const DottedText = ({text, isUpper, isBlack, ...props}) => <StyledDottedText isBlack={isBlack} isUpper={isUpper}>{text}</StyledDottedText>