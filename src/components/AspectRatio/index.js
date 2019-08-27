import React from 'react'
import { Outer, Inner } from 'assets/components/AspectRatio'

const AspectRatio = ({ratio = 1, children, ...props}) => (
	<Outer ratio={ratio} {...props}>
		<Inner>{children}</Inner>
	</Outer>
)

export default AspectRatio
