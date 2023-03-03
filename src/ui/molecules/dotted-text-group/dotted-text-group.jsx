import React from "react";
import { DottedText } from "../../atoms/dotted-text/dotted-text";
import { dottedData } from "./dotted-text.data";
import { DottedTextContainer } from "./dotted-text-group-styles";

export const DottedGroup = ({dottedData}) => dottedData.map(props => <DottedText {...props}/>)