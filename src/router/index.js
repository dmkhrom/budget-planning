import React from 'react';
import { FirstTab } from 'features/FirstTab/FirstTab';
import { SecondTab } from 'features/SecondTab/SecondTab';
import { Navigate, useRoutes } from 'react-router-dom';

export const NAVIGATION = [
	{
		element: <Navigate replace to="/tab1" />,
		path: '/'
	},
	{
		element: <FirstTab />,
		name: 'Tab1',
		path: 'tab1'
	},
	{
		element: <SecondTab />,
		name: 'Tab2',
		path: 'tab2'
	}
];

export const Router = () => useRoutes(NAVIGATION);
