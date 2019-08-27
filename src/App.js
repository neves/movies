import React, { Fragment, lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Loader from 'components/Loader'
const Search = lazy(() => import('pages/Search'))
const Favorites = lazy(() => import('pages/Favorites'))
const Details = lazy(() => import('pages/Details'))
const About = lazy(() => import('pages/About'))

const App = () => (
	<Fragment>
		<Navbar/>
		<div style={{flex: 1}}>
			<Suspense fallback={<Loader/>}>
				<Router>
					<Search path='/'/>
					<Search isSearchable={false} path='/featured' kindURL='featured'/>
					<Favorites path='/favorites'/>
					<About path='/about'/>
					<Search path=':kindURL'/>
					<Details path=':kindURL/:id'/>
				</Router>
			</Suspense>
		</div>
		<Footer/>
	</Fragment>
)


export default App
