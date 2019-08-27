import styled from 'styled-components'
import Link from 'components/Link'

const Anchor = styled(Link)`
	border-radius: 0.125rem;
	color: currentColor;
	outline: none;
	&:focus, &:hover{
		color: ${p => p.theme.colors.yellow};
		text-decoration: none;
	}
`

export { Anchor }
