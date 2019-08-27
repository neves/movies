import styled from 'styled-components'
import above from 'utils/above'

const Wrapper = styled.label`
	background: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.lightGrey};
	display: flex;
	align-items: center;
	border-radius: 0.25rem;
	position: relative;
	box-shadow: 0 0 4rem 0.125rem ${p => p.theme.colors.dark};
	padding: 0.5rem 0.625rem;
	${above('sm')`
		padding: 0.75rem;
	`}
	&:focus-within{
		&:before{
		content: '';
		border-radius: 0.25rem;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		${p => p.theme.focusShadow}}
		}
	}
`

const Input = styled.input`
	color: ${p => p.theme.colors.dark};
	border: none;
	background: none;
	outline: none;
	flex: 1;
	${p => p.theme.typography[0]};
	margin-left: 0.375rem;
	${above('sm')`
		margin-left: 0.5rem;
	`}
	&::placeholder{
		color: ${p => p.theme.colors.lightGrey};
	}
	&::selection{
		background: ${p => p.theme.colors.lightGrey};
		color: ${p => p.theme.colors.white};
	}
`

export { Wrapper, Input }