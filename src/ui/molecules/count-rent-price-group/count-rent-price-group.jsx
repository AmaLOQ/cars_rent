import React from "react";
import { CountRentPriceItem } from "../../atoms/count-rent-price-item/count-rent-price-item";

export const CountRentPriceGroup = ({rentData, ...props}) => 
	rentData.map(el => <CountRentPriceItem {...el}/>)