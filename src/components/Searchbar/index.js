import React from 'react'
import Container from 'assets/components/Container'
import { Wrapper, Input } from 'assets/components/Searchbar'
import { Loupe } from 'assets/icons'

const getPlaceholder = kindURL => {
	if(kindURL === 'movies') return 'movies'
	if(kindURL === 'tv') return 'tv'
	if(kindURL === 'people') return 'people'
	return 'movies, tv or people'
}

const Searchbar = ({kindURL, value, onChange, ...props}) => (
	<Container {...props}>
		<Wrapper>
			<Loupe/>
			<Input placeholder={`Search ${getPlaceholder(kindURL)}...`} autoFocus={true} value={value} onChange={onChange}/>
		</Wrapper>
	</Container>
)

export default Searchbar
