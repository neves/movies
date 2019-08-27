import styled from 'styled-components'
import above from 'utils/above'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 1.5rem 0
`

const SeparatedText = styled(Text)`span+span{&:before{content: ' • '}}`

const Rating = styled(Text)`
	background: ${p => p.theme.colors.lightGrey};
	color: ${p => p.theme.colors.dark};
	font-weight: 500;
	border-radius: 0.25rem;
	margin: 0 0.5rem;
	padding: 0.125rem 0.375rem;
	text-align: center;
	${above('md')`
		margin: -0.25rem 0.5rem;
		padding: 0.375rem 0.5rem;
	`}
	${above('xg')`
		margin: -0.125rem 0.5rem;
		padding: 0.5rem 0.675rem;
	`}
`

export { Wrapper, SeparatedText, Rating }