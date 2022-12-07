import { StyledLink } from "./link-styles"

export const Link = ({isHash, isUnderlined, variant, text}) => 
	<StyledLink href={isHash ? '#' : false} isUnderlined={isUnderlined} variant={variant}>{text}</StyledLink>