import { StyledBoxIcon } from "./icon-item-styles"
import { Link } from "../../atoms/link/link";

export const IconItem = ({ icon, ...props }) => <Link {...props}><StyledBoxIcon>{icon}</StyledBoxIcon></Link>