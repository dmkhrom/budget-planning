import React from 'react';
import { NAVIGATION_TABS } from 'constants/common';
import { CustomLink, NavigationWrapper } from './styles';

export const NavBar = () => (
	<NavigationWrapper>
		{NAVIGATION_TABS.map(item => (
			<CustomLink
				key={item.id}
				to={item.url}
			>
				{item.name}
			</CustomLink>
		))}
	</NavigationWrapper>
);
