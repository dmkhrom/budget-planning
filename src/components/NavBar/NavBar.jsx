import { NAVIGATION } from 'constants';
import React from 'react';
import { CustomLink, NavigationWrapper } from './styles';

export const NavBar = () => (
	<NavigationWrapper>
		{NAVIGATION.map((item) => item.name && (
			<CustomLink key={item.url} to={item.url}>
				{item.name}
			</CustomLink>
		))}
	</NavigationWrapper>
);
