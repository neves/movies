import React, { useEffect } from 'react'
import { Row } from 'griding'
import { useStorageString } from 'utils/useStorageString'
import { getTitleFromURL } from 'utils/kind'
import Container from 'assets/components/Container'
import Text from 'assets/components/Text'
import CardsByPage from './CardsByPage'
import Info from './Info'
import { Wrapper, Searchbar } from 'assets/pages/Search'

/* eslint-disable no-mixed-operators */
const Search = ({isSearchable = true, kindURL = 'multi'}) => {
	useEffect(() => {document.title = getTitleFromURL(kindURL)}, [])
	const [search, setSearch] = useStorageString('search', '')

	const [pageString, setPage] = useStorageString('page', '1')
	const page = +pageString
	const pagesArray = [...Array(page).fill(0).map((x, i) => i+1)]

	return(
		<Wrapper>
			{isSearchable && (
				<Searchbar
					value={search}
					onChange={e => {setSearch(e.target.value); setPage(1)}}
					kindURL={kindURL}
				/>
			)}
			<Container>
				{(kindURL === 'featured') && <Text weight={600} xs={2} sm={3} md={4} xg={5}>Featured movies</Text>}
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem', position: 'relative', zIndex: kindURL !== 'featured' && 2}}>
					{(!!search || kindURL === 'featured') && pagesArray.map(page => (
						<CardsByPage
							key={page}
							search={search}
							page={page}
							setPage={setPage}
							isLastPage={pagesArray.slice(-1)[0] === page}
							kindURL={kindURL}
						/>
					))}
				</Row>
			</Container>
			{(!search && kindURL !== 'featured') && (
				<Info emoji='☝️' kind={kindURL} description='use the search bar above'/>
			)}
		</Wrapper>
	)
}
/* eslint-enable no-mixed-operators */

export default Search
