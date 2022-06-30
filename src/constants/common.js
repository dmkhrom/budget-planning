export const BREAKDOWN_MONTHS = [
	{ name: 'Jan', value: 0 },
	{ name: 'Feb', value: 0 },
	{ name: 'Mar', value: 0 },
	{ name: 'Apr', value: 0 },
	{ name: 'May', value: 0 },
	{ name: 'Jun', value: 0 },
	{ name: 'Jul', value: 0 },
	{ name: 'Aug', value: 0 },
	{ name: 'Sep', value: 0 },
	{ name: 'Oct', value: 0 },
	{ name: 'Nov', value: 0 },
	{ name: 'Dec', value: 0 },
];

export const BREAKDOWN_QUARTERS = [
	{ name: 'First Quarter', value: 0 },
	{ name: 'Second Quarter', value: 0 },
	{ name: 'Third Quarter', value: 0 },
	{ name: 'Fourth Quarter', value: 0 },
];

export const getInitialChannelData = (id) => ({
	id,
	name: 'New Channel',
	allocation: 'Equal',
	frequency: 'Annually',
	breakdownData: BREAKDOWN_MONTHS,
	amount: 0,
});

export const BUTTONS_NAMES = {
	addChannel: 'Add channel'
};

export const NAVIGATION_TABS = [
	{
		id: 'first_tab',
		name: 'Tab1',
		url: '/tab1'
	},
	{
		id: 'second_tab',
		name: 'Tab2',
		url: '/tab2'
	}
];

export const BUDGET_FREQUENCY_ITEMS = [
	'Annually', 'Monthly', 'Quarterly'
];

export const ALLOCATION_ITEMS = [
	'Equal', 'Manual'
];
