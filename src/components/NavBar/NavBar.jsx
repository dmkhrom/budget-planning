import React from 'react';
import { NAVIGATION } from 'router';
import { CustomLink, NavigationWrapper } from './styles';

export const NavBar = () => (
	<NavigationWrapper>
		{NAVIGATION.map((item) => item.name && (
			<CustomLink key={item.path} to={item.path}>
				{item.name}
			</CustomLink>
		))}
	</NavigationWrapper>
);
