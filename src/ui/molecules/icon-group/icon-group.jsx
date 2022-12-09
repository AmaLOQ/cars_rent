import { IconItem } from "../../atoms/icon-item/icon-item";

export const IconGroup = ({ iconData, ...props }) => iconData.map(icon => <IconItem icon={icon} {...props} />);