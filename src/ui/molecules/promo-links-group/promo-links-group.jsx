import { Link } from "../../atoms/link/link";

export const LinksGroup = ({linksData}) => linksData.map(props => <Link {...props}/> );