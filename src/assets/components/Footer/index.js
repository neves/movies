import styled from 'styled-components'
import Link from 'components/Link'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`

const Anchor = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.375rem;
	border-radius: 0.125rem;
	font-weight: 500;
	color: ${p => p.theme.colors.grey};
	&:hover, &:focus {color: ${p => p.theme.colors.lightGrey}}
	&:focus{${p => p.theme.focusShadow}}
	& strong{
		font-weight: 500;
	}
`

export { Wrapper,	Anchor }