import { OwnerCar } from "./owner-car-info";
import { ownerCarData } from "./owner-car-data";

export const OwnerCarGroup = ({ownerCarData, ...props}) => ownerCarData.map(value => <OwnerCar {...value}/>)