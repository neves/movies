import styled from 'styled-components'
import Link from 'components/Link'

const linkStyle = `
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.75rem;
	padding: 0.75rem;
	border-radius: 2rem;
	user-select: none;
	cursor: pointer;
	margin-right: 0.5rem;
	&:last-child{
		margin-right: -0.75rem;
	}
`

const StyledLink = styled(Link)`
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

const Button = styled.button`
	background: none;
	border: none;
	appearance: none;
	${linkStyle}
	&:focus{${p => p.theme.focusShadow}}
`

export { StyledLink, Button }