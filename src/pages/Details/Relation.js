import React from 'react'
import { Wrapper, Avatar, Main } from 'assets/pages/Details/Relation'

const getURL = (kind, id) => {
	if(kind === 'person') return `/movies/${id}`
	return `/people/${id}`
}

const Relation = ({id, kind, name, poster_path, profile_path, character, title, ...props}) => {
	const url = getURL(kind, id)
	const image = profile_path || poster_path
	const main = name || title || character
	return (
		<Wrapper to={url} {...props}>
			<Avatar>
				{image
					? <img alt={main} src={`https://image.tmdb.org/t/p/w45/${image}`}/>
					: <div>{(main || ' ')[0]}</div>
				}
			</Avatar>
			<Main>{main}</Main>
		</Wrapper>
	)
}

export default Relation
