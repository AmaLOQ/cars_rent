import { IconItem } from "../../atoms/icon-item/icon-item";

export const ComponentIcon = ({iconData}) => iconData.map(icon => <IconItem icon={icon}/>);