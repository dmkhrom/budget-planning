import { BREAKDOWN_MONTHS, BREAKDOWN_QUARTERS } from 'constants/common';

export const recalculateAmount = (array) => +array.reduce((sum, item) => sum += item.value, 0).toFixed(3);

export const recalculateBreakdownData = (array, amount) => array.map(item =>
	({
		...item,
		value: +(amount / array.length).toFixed(3)
	})
);

export const updateObjectValueInArrayOfObjects = (array, searchKey, comparingKey, newValue) => {
	const itemIndex = array.findIndex(item => item[searchKey] === comparingKey);

	array[itemIndex] = {
		...array[itemIndex],
		...newValue
	};
	console.log(array, itemIndex, newValue);
	return array;
};

export const getDataToUpdate = (
	prevFrequencyType,
	newFrequencyType,
	currentBreakdownData,
	amount
) => {
	switch (true) {
	case newFrequencyType === 'Annually':
		return ({
			breakdownData: recalculateBreakdownData(
				currentBreakdownData,
				amount,
			),
			frequency: newFrequencyType,
			allocation: 'Equal'
		});
	case newFrequencyType === 'Quarterly':
		return ({
			breakdownData: recalculateBreakdownData(
				BREAKDOWN_QUARTERS,
				amount,
			),
			frequency: newFrequencyType,
			allocation: 'Manual'
		});
	case newFrequencyType === 'Monthly' && prevFrequencyType === 'Annually':
		return ({
			frequency: newFrequencyType,
			allocation: 'Manual'
		});
	case newFrequencyType === 'Monthly' && prevFrequencyType === 'Quarterly':
		return ({
			breakdownData: recalculateBreakdownData(
				BREAKDOWN_MONTHS,
				amount,
			),
			frequency: newFrequencyType,
			allocation: 'Manual'
		});
	default: return null;
	}
};
