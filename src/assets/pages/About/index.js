import styled from "styled-components"
import Link from "components/Link"

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const Anchor = styled(Link)`
	border-radius: 0.125rem;
	color: currentColor;
	outline: none;
	&:focus,
	&:hover {
		color: ${p => p.theme.colors.yellow};
		text-decoration: none;
	}
`

export { Wrapper, Anchor }
