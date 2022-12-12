import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)`
	font-size: ${({variant, theme}) => variant === 'menuActive' 
		? theme.typography.h5.fontSize
		: theme.typography.h4.fontSize };
	font-weight: ${({variant, theme}) => variant === 'menuPromo' 
		? theme.typography.fontWeightMedium
		: theme.typography.fontWeight };
	line-height: ${({variant}) => variant === 'menuPromo' 
		? '20px'
		: '140%'};
	text-decoration: ${({isUnderlined}) => isUnderlined 
		? 'underline' 
		: 'none'};
	color: ${props => props.theme.palette.primary.main};

	@media ${props => props.theme.media.md} {
		font-size: ${props => props.theme.typography.button.fontSize} ;
	}
`;