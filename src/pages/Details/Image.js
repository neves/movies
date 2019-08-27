import React from 'react'
import LazyImage from 'react-lazy-progressive-image'
import { Movie, TV, Person } from 'assets/icons'
import { Wrapper, Img, NoImage } from 'assets/pages/Details/Image'

const Image = ({image, kind}) => (
	<Wrapper ratio={image ? 0.75 : 1}>
		{image
			? (
				<LazyImage
					placeholder={`https://image.tmdb.org/t/p/w300/${image}`}
					src={`https://image.tmdb.org/t/p/w1280/${image}`}
				>
					{(src, loading) => <Img src={src} loading={loading}/>}
				</LazyImage>
			) : (
				<NoImage>
					{kind === 'movie' && <Movie size={96} strokeWidth={1.125}/>}
					{kind === 'tv' && <TV size={96} strokeWidth={1.125}/>}
					{kind === 'person' && <Person size={96} strokeWidth={1.125}/>}
				</NoImage>
			)
		}
	</Wrapper>
)

export default Image
