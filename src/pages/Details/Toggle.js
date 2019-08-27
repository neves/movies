import React from 'react'
import { Wrapper } from 'assets/pages/Details/Toggle'

const Toggle = ({more, ...props}) => (
	<Wrapper {...props}>
		{!!more ? 'More' : 'Fewer'}
	</Wrapper>
)

export default Toggle
