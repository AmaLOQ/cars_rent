import { StyledLink } from "./link-styles"

export const Link = ({children, isHash, isUnderlined, variant, text, ...props}) => 
	<StyledLink href={isHash ? '#' : false} isUnderlined={isUnderlined} variant={variant}>{text}{children}</StyledLink>