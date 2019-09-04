import React from 'react'
import InfoScreen from 'components/InfoScreen'
import { HeartBreak } from 'components/Icon'

const NoFavorites = ({length}) => {
	if (!length) {
		return (
			<InfoScreen
				emoji={<HeartBreak size={96} style={{margin: '1rem'}}/>}
				title='You still have no favorites'
				description='you can add movies to your favorites clicking on the ♥ icon'
			/>
		)
	}

	return null;
}

export default NoFavorites;