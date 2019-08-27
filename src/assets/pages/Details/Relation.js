import styled from 'styled-components'
import Link from 'components/Link'

const Wrapper = styled(Link)`
	color: currentColor;
	text-decoration: none;
	display: flex;
	align-items: center;
	overflow: hidden;
	border-radius: 1rem;
	&:focus{${p => p.theme.focusShadow}}
	&+&{margin-top: 0.5rem}
`

const Avatar = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	overflow: hidden;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
	background: ${p => p.theme.colors.grey};
	color: ${p => p.theme.colors.lightGrey};
	font-size: 0.625rem;
	line-height: 0.625rem;
	font-weight: 500;
	user-select: none;
	pointer-events: none;
	flex-shrink: 0;
	img{width: 100%}
`

const Main = styled.div`
	margin-right: 0.5rem;
`

export { Wrapper, Avatar, Main }
