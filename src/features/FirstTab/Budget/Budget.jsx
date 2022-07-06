import React from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BudgetBreakdownControl } from 'features/FirstTab/Budget/BudgetBreakdown';
import { BudgetControls } from 'features/FirstTab/Budget/BudgetControls';
import { BudgetCommonWrapper } from 'features/FirstTab/Channel/styles';
import { updateChannel } from 'redux/channelsSlice';
import {
	updateDataWithFrequencyChanging,
	recalculateAmount,
	recalculateBreakdownData,
	updateBreakdownData
} from 'utils';

export const Budget = ({ channelData }) => {
	const { frequency, breakdownData, amount, allocation } = channelData;

	const dispatch = useDispatch();

	const onSelectBudgetFrequency = (e) => {
		if (e.target.innerText === frequency) {
			return;
		}

		const dataToUpdate = {
			...channelData,
			...updateDataWithFrequencyChanging(frequency, e.target.innerText, amount)
		};
		dispatch(updateChannel(dataToUpdate));
	};

	const onChangeAnnualBudgetAmount = (e) => {
		if (!e.target.value) {
			return;
		}

		const parsedValue = parseFloat(e.target.value.replace(/,/g, ''));

		const dataToUpdate = {
			...channelData,
			breakdownData: recalculateBreakdownData(breakdownData, parsedValue),
			amount: parsedValue
		};
		dispatch(updateChannel(dataToUpdate));
	};

	const onChangeAllocationType = (e) => {
		if (e.target.innerText === allocation) {
			return;
		}

		const dataToUpdate = {
			...channelData,
			...(e.target.innerText === 'Equal' && {
				breakdownData: recalculateBreakdownData(breakdownData, amount)
			}),
			allocation: e.target.innerText
		};
		dispatch(updateChannel(dataToUpdate));
	};

	const onChangeBreakdownItemValue = (e) => {
		const { value, name } = e.target;

		if (!value.length) {
			return;
		}

		const updatedBreakdownData = updateBreakdownData(
			breakdownData,
			name,
			parseFloat(e.target.value.replace(/,/g, ''))
		);

		const dataToUpdate = {
			...channelData,
			amount: recalculateAmount(updatedBreakdownData),
			breakdownData: updatedBreakdownData
		};
		dispatch(updateChannel(dataToUpdate));
	};

	const debouncedChangeBreakdownItemValue = debounce(onChangeBreakdownItemValue, 200);
	const debouncedAnnualBudgetAmountChange = debounce(onChangeAnnualBudgetAmount, 200);

	return (
		<BudgetCommonWrapper>
			<BudgetControls
				budgetFrequency={frequency}
				annualAmount={amount}
				onAnnualBudgetAmountChange={debouncedAnnualBudgetAmountChange}
				onSelectBudgetFrequency={onSelectBudgetFrequency}
				onChangeAllocationType={onChangeAllocationType}
				allocationType={allocation}
				disabledBaselineControl={allocation === 'Manual'}
			/>
			<BudgetBreakdownControl
				disableBreakdownItems={allocation === 'Equal'}
				onChangeBreakdownItemValue={debouncedChangeBreakdownItemValue}
				breakdownData={breakdownData}
			/>
		</BudgetCommonWrapper>
	);
};

Budget.propTypes = {
	channelData: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		allocation: PropTypes.string,
		frequency: PropTypes.string,
		breakdownData: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				value: PropTypes.number
			})
		),
		amount: PropTypes.number
	})
};
