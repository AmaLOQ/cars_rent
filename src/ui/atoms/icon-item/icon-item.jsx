import { StyledBoxIcon } from "./icon-item-styles"
import { Link } from "../link/link";

export const IconItem = ({ icon, ...props }) => <Link {...props}><StyledBoxIcon><img src={icon} alt="Icon" /></StyledBoxIcon></Link>