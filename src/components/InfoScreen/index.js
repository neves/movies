import React from 'react'
import Text from 'assets/components/Text'
import { Wrapper, Emoji } from 'assets/components/InfoScreen'

const InfoScreen = ({emoji, title, description, ...props}) => (
	<Wrapper {...props}>
		{emoji && <Emoji>{emoji}</Emoji>}
		{title && <Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>{title}</Text>}
		{description && <Text color={p => p.theme.colors.lightGrey}>{description}</Text>}
	</Wrapper>
)

export default InfoScreen
