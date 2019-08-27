import styled from 'styled-components'
import Search from 'components/Searchbar'

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const Searchbar = styled(Search)`
	position: sticky;
	top: 0.875rem;
	z-index: 3;
`

export { Wrapper, Searchbar }