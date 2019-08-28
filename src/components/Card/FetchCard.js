import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import { getKindFromURL } from 'utils/kind'
import Card from './index'

const FetchCard = ({kindURL, id}) => {
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/${getKindFromURL(kindURL)}/${id}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
	].join(''))

	if(loading) return <Card loading/>
	if(error) return <Card error/>

	return <Card id={id} kindURL={kindURL} {...data}/>
}

export default FetchCard
