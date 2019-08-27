import React from 'react'
import { Location } from '@reach/router'
import { Heart, Fire } from 'assets/icons'
import Item from './Item'
import { StickyContainer, Wrapper, Logo, Flex } from 'assets/components/Navbar'

const Navbar = () => (
	<StickyContainer>
		<Wrapper>
			<Logo tabIndex={0} to='/'>
				<span role='img' aria-label='movies logo'>🍿</span>
			</Logo>
			<Location>
				{({location: {pathname}}) => (
					<Flex>
						<Item to='/featured' active={pathname === '/featured'}>
							<Fire filled={pathname === '/featured'} style={{transform: 'translateY(1px)'}}/>
						</Item>
						<Item to='/favorites' active={pathname === '/favorites'}>
							<Heart filled={pathname === '/favorites'} style={{transform: 'translateY(1px)'}}/>
						</Item>
					</Flex>
				)}
			</Location>
		</Wrapper>
	</StickyContainer>
)

export default Navbar
