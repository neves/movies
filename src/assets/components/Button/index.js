import styled from 'styled-components'

const Wrapper = styled.a`
	display: inline-flex;
	color: currentColor;
	text-decoration: none;
	border-radius: 0.25rem;
	box-shadow: inset 0 0 0 1px ${p => p.theme.colors.midGrey};
	overflow: hidden;
	margin: 1rem 0.5rem;
	outline: none;
	&:focus{box-shadow: inset 0 0 0 0.125rem ${p => p.theme.colors.yellow}}
`

const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${p => p.background};
	padding: 0.5rem;
`

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`

export { Wrapper, Left, Right }