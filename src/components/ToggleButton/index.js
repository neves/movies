import React from 'react'
import { useFavoriteState } from 'utils/favorites'
import Text from 'assets/components/Text'
import { Heart } from 'assets/icons'
import { Wrapper, Left, Right } from 'assets/components/ToggleButton'

const Button = ({kindURL, id}) => {
	const [isFavorite, {toggle}] = useFavoriteState(kindURL+'/'+id)
	return (
		<Wrapper isFavorite={isFavorite} onClick={toggle}>
			<Left>
				<Heart filled={isFavorite} size={16} strokeWidth={2.5}/>
			</Left>
			<Right>
				<Text weight={500}>
					{isFavorite ? 'Added' : 'Add to favourites'}
				</Text>
			</Right>
		</Wrapper>
	)
}

export default Button
