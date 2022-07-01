import React, { useCallback } from 'react';
import { BudgetBreakdownControl } from 'features/FirstTab/Channel/components/Budget/BudgetBreakdown/BudgetBreakdown';
import { BudgetControls } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetControls';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { BudgetCommonWrapper } from 'features/FirstTab/Channel/styles';
import {
	updateDataWithFrequencyChanging,
	recalculateAmount,
	recalculateBreakdownData,
	updateBreakdownData
} from 'features/utils';
import { updateChannelsData } from 'redux/channelsSlice';

export const Budget = ({ channelData }) => {

	const {frequency, breakdownData, amount, allocation} = channelData;

	const dispatch = useDispatch();

	const changeBudgetFrequency = (e) => {

		if (e.target.innerText === frequency) {return;}

		const dataToUpdate = {
			...channelData,
			...updateDataWithFrequencyChanging(
				frequency,
				e.target.innerText,
				breakdownData,
				amount
			)
		};
		dispatch(updateChannelsData(dataToUpdate));
	};

	const annualBudgetAmountChange = (e) => {

		if(!e.target.value) {return;}

		const parsedValue = parseFloat(e.target.value.replace(/,/g, ''));

		const dataToUpdate = {
			...channelData,
			breakdownData: recalculateBreakdownData([...breakdownData], parsedValue),
			amount: parsedValue
		};
		console.log(dataToUpdate);
		dispatch(updateChannelsData(dataToUpdate));
	};

	const changeAllocationType = (e) => {

		if(e.target.innerText === allocation) {return;}

		const dataToUpdate = {
			...channelData,
			...(e.target.innerText === 'Equal' && {
				breakdownData: recalculateBreakdownData([...breakdownData], amount)
			}),
			allocation: e.target.innerText
		};
		dispatch(updateChannelsData(dataToUpdate));
	};

	const changeBreakdownItemValue = (e) => {
		const { value, name } = e.target;

		if (!value.length) {return;}

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
		dispatch(updateChannelsData(dataToUpdate));
	};

	const debouncedChangeBreakdownItemValue = useCallback(
		() => debounce(changeBreakdownItemValue, 200),
		[channelData]
	);

	const debouncedAnnualBudgetAmountChange = useCallback(
		() => debounce(annualBudgetAmountChange, 200),
		[channelData]
	);

	return (
		<BudgetCommonWrapper>
			<BudgetControls
				budgetFrequency={frequency}
				annualAmount={amount}
				handleAmountChange={debouncedAnnualBudgetAmountChange()}
				selectBudgetFrequency={changeBudgetFrequency}
				changeAllocationType={changeAllocationType}
				allocationType={allocation}
				disabledBaselineControl={allocation === 'Manual'}
			/>
			<BudgetBreakdownControl
				disableBreakdownItems={allocation === 'Equal'}
				handleChangeBreakdownItemValue={debouncedChangeBreakdownItemValue()}
				breakdownData={breakdownData}
			/>
		</BudgetCommonWrapper>
	);
};
