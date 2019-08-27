import styled from 'styled-components'
import Link from 'components/Link'
import Text from 'assets/components/Text'
import { Heart } from 'assets/icons'
import { fill } from 'assets/components/GlobalStyle'

const Wrapper = styled.div`
	background: none;
	border: none;
	margin: 0;
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.error ? p.theme.colors.red : p.theme.colors.grey};
	border-radius: 0.1875rem;
	cursor: pointer;
`

const Anchor = styled(Link)`
	appearance: none;
	width: 100%;
	color: currentColor;
	display: block;
	border-radius: 0.1875rem;
	z-index: 1;
	${fill}
	&:focus{${p => p.theme.focusShadow}}
`

const AbsoluteFill = styled.div`
	${fill}
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
`

const OverflowHidden = styled(AbsoluteFill)`
	overflow: hidden;
	border-radius: 0.1875rem;
`

const Image = styled.img`
	display: block;
	min-height: 100%;
	object-fit: cover;
	transition: 0.2s all;
	${p => p.loading && `filter: blur(2rem);`}
`

const Overlay = styled.div`
	width: 100%;
	margin-top: auto;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	background: ${p => p.theme.colors.overlay};
	box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	border-radius: 0 0 0.1875rem 0.1875rem;
	@media (hover: hover) {
		border-radius: 0.1875rem;
		height: 100%;
		background: none;
		box-shadow: none;
	}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		background: ${p => p.theme.colors.overlay};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	}
`

const HeartWrapper = styled.button`
	background: none;
	border: none;
	margin: 0;
	color: currentColor;
	top: 0;
	right: 0;
	left: auto;
	padding: 0.75rem;
	cursor: pointer;
	z-index: 1;
	position: absolute;
	@media (hover: hover) {
		margin-left: auto;
		position: relative;
		opacity: ${p => (p.isFavorite) ? 1 : 0};
	}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
`

const StyledHeart = styled(Heart)`
	transition: 0.2s all;
	${HeartWrapper}:focus &, ${HeartWrapper}:hover & {
		color: ${p => p.theme.colors.red};
	}
`

const Info = styled.div`
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	cursor: pointer;
	overflow: hidden;
	@media (hover: hover) {opacity: 0;}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{opacity: 1;}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`
const LoadMore = styled(Text)`
	text-align: center;
	height: 100%;
	margin: auto;
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`

const Kind = styled.div`
	padding: 0.75rem 0.75rem 0;
	margin-bottom: -0.375rem;
	font-size: 0.75rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.025rem;
	color: ${p => p.theme.colors.lightGrey};
	@media (hover: hover) {
		margin-bottom: 0;
		color: transparent;
		padding: 0.75rem;
	}
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`

export {
	Wrapper,
	Anchor,
	OverflowHidden,
	AbsoluteFill,
	Image,
	Overlay,
	HeartWrapper,
	StyledHeart,
	Info,
	NoImage,
	LoadMore,
	Kind,
}
