import React from 'react'
import Container from 'assets/components/Container'
import { Github } from 'assets/icons'
import { Wrapper, Anchor } from 'assets/components/Footer'

const Footer = () => (
	<Container>
		<Wrapper>
			<Anchor to='/about'>about</Anchor>
			<Anchor to='https://github.com/vitordino/movies' style={{padding: '0.375rem'}}><Github/></Anchor>
			<Anchor to='https://vitordino.com'>vitordino</Anchor>
		</Wrapper>
	</Container>
)

export default Footer
