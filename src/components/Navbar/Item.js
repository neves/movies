import React from 'react'
import { Button, StyledLink } from 'assets/components/Navbar/Item'

const Item = ({active, to, children}) => {
	if(active) return (
		<Button onClick={() => window.history.back()}>
			{children}
		</Button>
	)
	return (
		<StyledLink to={to} tabIndex={0}>
			{children}
		</StyledLink>
	)
}

export default Item
