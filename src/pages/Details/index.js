import React, { useEffect } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { Row, Cell } from 'griding'
import { getTitleFromURL, getKindByURL } from 'utils/kind'
import Container from 'assets/components/Container'
import Loader from 'assets/icons/Loader'
import { Arrow, IMDB } from 'assets/icons'
import Text from 'assets/components/Text'
import Button from 'components/Button'
import ToggleButton from 'components/ToggleButton'
import InfoScreen from 'components/InfoScreen'
import Meta from './Meta'
import Info from './Info'
import Image from './Image'
import { Wrapper, BackLink } from 'assets/pages/Details'

const getDetailTitle = (kindURL, title) => `${getTitleFromURL(kindURL)} ${title ? ` ⠿ ${title}` : ''}`

const Details = ({id, kindURL, ...props}) => {
	const kind = getKindByURL(kindURL)
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/${kind}/${id}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&append_to_response=release_dates,external_ids,credits,content_ratings`
	].join(''))

	const title = data?.title || data?.name
	const image = data?.poster_path || data?.profile_path
	const imdb = data?.imdb_id || data?.external_ids?.imdb_id
	const score = data?.vote_average

	useEffect(() => {document.title = getDetailTitle(kindURL, title)}, [data])

	return(
		<Wrapper error={error}>
			<Container>
				{loading && <Loader/>}
				{!loading && data && (
					<Row vertical-gutter style={{justifyContent: 'space-between'}}>
						<Cell xs={12} md={6} style={{marginBottom: '1.5rem'}}>
							<BackLink onClick={() => window.history.back()}><Arrow/></BackLink>
							<Meta {...data}/>
							<Text weight={600} xs={2} sm={3} md={4} xg={5}>{title}</Text>
							<div style={{display: 'flex', margin: '1rem -0.5rem'}}>
								{!!imdb && (
									<Button imdb={imdb} background='#FF9F1C' logo={<IMDB color='#0A1014'/>}>
										{!!score && `${score}/10`}
									</Button>
								)}
								<ToggleButton kindURL={kindURL} id={id}/>
							</div>
							<Info kind={kind} {...data}/>
						</Cell>
						<Cell xs={12} sm={12} md={5} lg={5}>
							<Image kind={kind} alt={`poster for: ${title}`} image={image}/>
						</Cell>
					</Row>
				)}
			</Container>
			{error && (
				<Container style={{flex: 1}}>
					<InfoScreen emoji='❌' title='I’m sorry Dave' description='I’m afraid i can’t do that'/>
				</Container>
			)}
		</Wrapper>
	)
}

export default Details
