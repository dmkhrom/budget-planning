import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { FirstTab } from 'features/FirstTab';
import { SecondTab } from 'features/SecondTab';

export const NAVIGATION = [
	{
		element: <Navigate replace to="/tab1" />,
		path: '/'
	},
	{
		element: <FirstTab />,
		name: 'Tab1',
		path: '/tab1'
	},
	{
		element: <SecondTab />,
		name: 'Tab2',
		path: '/tab2'
	}
];

export const Router = () => useRoutes(NAVIGATION);
