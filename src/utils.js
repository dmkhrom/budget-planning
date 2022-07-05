import {
	ALLOCATION_ITEMS,
	BREAKDOWN_MONTHS,
	BREAKDOWN_QUARTERS,
	BUDGET_FREQUENCY_ITEMS
} from 'constants';
import { v4 } from 'uuid';

export const getBreakDownInitialData = (breakdownArray) =>
	breakdownArray.map((item) => ({ name: item, value: 0 }));

export const getInitialChannelData = () => ({
	id: v4(),
	name: 'New Channel',
	allocation: ALLOCATION_ITEMS[0],
	frequency: BUDGET_FREQUENCY_ITEMS[0],
	breakdownData: getBreakDownInitialData(BREAKDOWN_MONTHS),
	amount: 0
});

export const recalculateAmount = (array) =>
	+array.reduce((sum, item) => (sum += item.value), 0).toFixed(3);

export const recalculateBreakdownData = (array, amount) =>
	array.map((item) => ({
		...item,
		value: +(amount / array.length).toFixed(3)
	}));

export const updateBreakdownData = (array, itemName, value) =>
	array.map((item) => (item.name === itemName ? { ...item, value } : item));

export const updateDataWithFrequencyChanging = (
	prevFrequencyType,
	newFrequencyType,
	currentBreakdownData,
	amount
) => {
	if (newFrequencyType === 'Annually') {
		return {
			breakdownData: recalculateBreakdownData(currentBreakdownData, amount),
			frequency: newFrequencyType,
			allocation: 'Equal'
		};
	}

	if (newFrequencyType === 'Quarterly') {
		return {
			breakdownData: recalculateBreakdownData(getBreakDownInitialData(BREAKDOWN_QUARTERS), amount),
			frequency: newFrequencyType,
			allocation: 'Manual'
		};
	}

	if (newFrequencyType === 'Monthly' && prevFrequencyType === 'Annually') {
		return {
			frequency: newFrequencyType,
			allocation: 'Manual'
		};
	}

	if (newFrequencyType === 'Monthly' && prevFrequencyType === 'Quarterly') {
		return {
			breakdownData: recalculateBreakdownData(getBreakDownInitialData(BREAKDOWN_MONTHS), amount),
			frequency: newFrequencyType,
			allocation: 'Manual'
		};
	}
};
