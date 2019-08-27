import React from 'react'
import Text from 'assets/components/Text'
import { Wrapper } from 'assets/pages/Details/Section'

const Section = ({title, children}) => (
	<Wrapper style={{margin: '1.5rem 0'}}>
		<Text weight={500} color={p => p.theme.colors.lightGrey} style={{margin: '0.5rem 0'}}>
			{title}
		</Text>
		<Text color={p => p.theme.colors.white}>
			{children}
		</Text>
	</Wrapper>
)

export default Section
