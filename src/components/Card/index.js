import React from 'react'
import LazyImage from 'react-lazy-progressive-image'
import { useFavoriteState } from 'utils/favorites'
import AspectRatio from 'components/AspectRatio'
import Text from 'assets/components/Text'
import { Movie, Person, TV } from 'assets/icons'
import {
	HeartWrapper, 
	StyledHeart, 
	Wrapper, 
	Anchor, 
	OverflowHidden, 
	LoadMore, 
	AbsoluteFill, 
	Image, 
	NoImage, 
	Overlay, 
	Info, 
	Kind
} from 'assets/components/Card'
import { getKindFromURL } from 'utils/kind'

const FavoriteButton = ({kindURL, id}) => {
	const [isFavorite, {toggle}] = useFavoriteState(kindURL+'/'+id)
	return (
		// eslint-disable-next-line no-sequences
		<HeartWrapper isFavorite={isFavorite} onClick={toggle}>
			<StyledHeart filled={isFavorite}/>
		</HeartWrapper>
	)
}

const Card = ({id, loading, error, loadMore, ...props}) => {
	const kind = props?.media_type
	const kindURL = getKindFromURL(props?.media_type) || props.kindURL
	const title = props?.title || props?.name
	const image = props?.poster_path || props?.profile_path
	const year = (props?.release_date || props?.first_air_date || props?.birthday)?.split('-')[0]

	return (
		<Wrapper error={error} {...props}>
			<AspectRatio ratio={0.75}/>
			{!(loading || error || loadMore) && <Anchor to={`/${kindURL}/${id}`} tabIndex={0}/>}
			<OverflowHidden>
				{image && (
					<LazyImage
						placeholder={`https://image.tmdb.org/t/p/w45/${image}`}
						src={`https://image.tmdb.org/t/p/w300/${image}`}
					>
						{(src, loading) => <Image src={src} loading={loading}/>}
					</LazyImage>
				)}
			</OverflowHidden>
			{loadMore && (
				<LoadMore xs={1} weight={500} color={p => p.theme.colors.midGrey}>Load<br/>More</LoadMore>
			)}
			<AbsoluteFill>
				{!image && !loading && !loadMore && (
					<NoImage>
						{kind === 'movie' && <Movie/>}
						{kind === 'tv' && <TV/>}
						{kind === 'person' && <Person/>}
					</NoImage>
				)}
				{!loadMore && (
					<Overlay>
						{title && (
							<Info>
								<Text xs={0} sm={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
								<Text color={p => p.theme.colors.lightGrey}>{year}</Text>
							</Info>
						)}
						<div style={{display: 'flex', alignItems: 'center'}}>
							{kind && <Kind style={{position: 'relative'}}>{kind}</Kind>}
							{id && <FavoriteButton kindURL={kindURL} id={id} />}
						</div>
					</Overlay>
				)}
			</AbsoluteFill>
		</Wrapper>
	)
}

export default Card
