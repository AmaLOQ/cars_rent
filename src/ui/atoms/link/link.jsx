import { StyledLink } from "./link-styles"

export const Link = ({isHash, isUnderlined, text, variant}) => 
	<StyledLink href={isHash ? '#' : false} isUnderlined={isUnderlined} variant={variant}>{text}</StyledLink> 