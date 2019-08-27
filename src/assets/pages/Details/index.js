import styled from 'styled-components'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
	margin-bottom: ${p => p.error ? 0 : '6rem'};
`

const BackLink = styled.button`
	background: ${p => p.theme.colors.dark};
	border: none;
	display: inline-block;
	appearance: none;
	color: ${p => p.theme.colors.lightGrey};
	cursor: pointer;
	border-radius: 0.25rem;
	margin: 0 -0.5rem;
	padding: 0.75rem 1rem 0.75rem 0.5rem;
	position: sticky;
	top: 0.25rem;
	z-index: 2;
	&:hover{color: ${p => p.theme.colors.white}}
	&:focus{box-shadow: inset 0 0 0 0.125rem ${p => p.theme.colors.yellow}}
	&:before{
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 0 4rem ${p => p.theme.colors.dark};
	}
`

export { Wrapper, BackLink }