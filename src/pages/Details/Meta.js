import React from 'react'
import { Wrapper, SeparatedText, Rating } from 'assets/pages/Details/Meta'
import { getFirst, getSecond, getHighlight } from 'utils/meta'

const Meta = data => (
	<Wrapper style={{margin: '1.5rem 0'}}>
		<SeparatedText sm={1} color={p => p.theme.colors.lightGrey || ''}>
			{getFirst(data) && <span>{getFirst(data)}</span>}
			{getSecond(data) && getSecond(data) !== getFirst(data) && <span>{getSecond(data)}</span>}
			{(getFirst(data) || getSecond(data)) && getHighlight(data) && <span/>}
		</SeparatedText>
		{getHighlight(data) && <Rating>{getHighlight(data)}</Rating>}
	</Wrapper>
)

export default Meta
