import React from 'react';
import { FirstTab } from 'features/FirstTab/FirstTab';
import { SecondTab } from 'features/SecondTab/SecondTab';
import { Navigate } from 'react-router-dom';

export const BREAKDOWN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const BREAKDOWN_QUARTERS = ['First Quarter', 'Second Quarter', 'Third Quarter', 'Fourth Quarter'];

export const BREAKDOWN_SCHEME = {
	month: BREAKDOWN_MONTHS,
	quarters: BREAKDOWN_QUARTERS
};

export const NAVIGATION = [
	{
		element: <Navigate replace to="/tab1" />,
		url: '/'
	},
	{
		element: <FirstTab />,
		name: 'Tab1',
		url: 'tab1'
	},
	{
		element: <SecondTab />,
		name: 'Tab2',
		url: 'tab2'
	}
];

export const BUDGET_FREQUENCY_ITEMS = ['Annually', 'Monthly', 'Quarterly'];

export const ALLOCATION_ITEMS = ['Equal', 'Manual'];
