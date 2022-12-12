import { IconItem } from "../../molecules/icon-item/icon-item";


export const IconGroup = ({ iconData, ...props }) => iconData.map(Icon => <IconItem icon={Icon} {...props} />);