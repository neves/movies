import React from 'react'
import InfoScreen from 'components/InfoScreen'
import { HeartBreak } from 'components/Icon'
import Show from '../Show'

const NoFavorites = ({favorites}) => {
	return (
		<Show condition={!favorites.length}>
			<InfoScreen
				emoji={<HeartBreak size={96} style={{margin: '1rem'}}/>}
				title='You still have no favorites'
				description='you can add movies to your favorites clicking on the ♥ icon'
			/>
		</Show>
	)
}

export default NoFavorites;