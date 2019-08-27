import React from 'react'
import Text from 'assets/components/Text'
import {Wrapper, Left, Right} from 'assets/components/Button';

const Button = ({logo, background, children, imdb}) => (
	<Wrapper tabIndex={0} href={`https://imdb.com/title/${imdb}/`}>
		{logo && <Left background={background}>{logo}</Left>}
		{children && <Right><Text weight={500}>{children}</Text></Right>}
	</Wrapper>
)

export default Button
