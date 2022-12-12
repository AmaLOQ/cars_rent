import { StyledLink } from "./link-styles"

export const Link = ({href, children, isHash, text, ...props}) => 
	<StyledLink href={isHash ? '#' : href} {...props}>{text}{children}</StyledLink>