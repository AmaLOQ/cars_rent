import React from "react";
import { DottedText } from "../../atoms/dotted-text/dotted-text";
import { dottedData } from "./dotted-text.data";

export const DottedGroup = ({dottedData}) => dottedData.map(props => <DottedText {...props}/>)