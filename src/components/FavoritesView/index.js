import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFavorites } from 'utils/favorites'
import Container from 'components/Container'
import HasFavorites from './has-favorites'
import NoFavorites from './no-favorites'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const SearchView = () => {
	const [favoritesSet] = useFavorites()
	const favorites = [...favoritesSet] || []
	const title = `Movies ⠿ ${!favorites.length ?
		'no favorites' : `${favorites.length} ${favorites.length > 1 ? `favorites`: `favorite`}`}`
	useEffect(() => {document.title = title}, [title])

	return(
		<Wrapper>
			<Container>
				<HasFavorites favorites={favorites}></HasFavorites>
				<NoFavorites length={favorites.length}></NoFavorites>
			</Container>
		</Wrapper>
	)
}

export default SearchView
