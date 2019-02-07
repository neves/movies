import React, { Fragment, lazy, Suspense } from 'react'
import { Router, Location } from '@reach/router'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Loader from 'components/Loader'
const SearchView = lazy(() => import('components/SearchView'))
const FavoritesView = lazy(() => import('components/FavoritesView'))
const DetailView = lazy(() => import('components/DetailView'))

const App = () => (
	<Fragment>
		<Navbar/>
		<div style={{flex: 1}}>
			<Location>
				{({location}) => (
					<Suspense fallback={<Loader/>}>
						<Router location={location}>
							<SearchView path='/'/>
							<SearchView path='/movies'/>
							<FavoritesView path='/favorites'/>
							<DetailView path='movies/:movieId'/>
						</Router>
					</Suspense>
				)}
			</Location>
		</div>
		<Footer/>
	</Fragment>
)


export default App
