import styled from 'styled-components'
import Container from 'assets/components/Container'

const Wrapper = styled(Container)`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	text-align: center;
	svg{color: ${p => p.theme.colors.grey}}
`

const Emoji = styled.div`
	font-size: 3rem;
	margin: 0.5em;
`

export { Wrapper, Emoji }
