import styled from 'styled-components'
import { fill } from 'assets/components/GlobalStyle'

const Wrapper = styled.div`
	overflow: hidden;
	object-fit: cover;
	border-radius: 0.25rem;
	background-color: ${p => p.theme.colors.grey};
	img{
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Img = styled.img`
	display: block;
	min-height: 100%;
	object-fit: cover;
	transition: 0.2s filter;
	${p => p.loading && `filter: blur(0.5px)`}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`

export { Wrapper, Img, NoImage }
