import React from 'react'
import { Row, Cell } from 'griding'
import FetchCard from 'components/Card/FetchCard'
import Text from 'components/Text'
import Show from '../Show'

const HasFavorites = ({favorites}) => {
	const title = `${favorites.length} ${favorites.length > 1 ? `favorites`: `favorite`}`
	return (
		<Show condition={favorites.length}>
			<Text weight={600} xs={2} sm={3} md={4} xg={5}>{title}</Text>
			<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
				{favorites.map(favorite => (
					<Cell key={favorite} xs={6} sm={4} md={3} xg={2}>
						<FetchCard
							kindURL={favorite?.split('/')[0]}
							id={favorite?.split('/')[1]}
						/>
					</Cell>
				))}
			</Row>
		</Show>
	)
}

export default HasFavorites;