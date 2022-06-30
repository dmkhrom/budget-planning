import React, { useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { BudgetBreakdownControl } from 'features/FirstTab/Channel/components/Budget/BudgetBreakdown/BudgetBreakdown';
import { BudgetControls } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetControls';
import { BudgetCommonWrapper } from 'features/FirstTab/Channel/styles';
import {
	getDataToUpdate,
	recalculateAmount,
	recalculateBreakdownData,
	updateObjectValueInArrayOfObjects
} from 'features/utils';
import useChannelsControl from 'hooks/useChannelsControl';

export const Budget = ({ channelData }) => {

	const {
		onUpdateActiveChannelData,
	} = useChannelsControl();

	const changeBudgetFrequency = (e) => {

		if(e.target.innerText === channelData.frequency) {
			return;
		}

		const dataToUpdate = getDataToUpdate(
			channelData.frequency,
			e.target.innerText,
			channelData.breakdownData,
			channelData.amount
		);
		onUpdateActiveChannelData(dataToUpdate);
	};

	const annualBudgetAmountChange = (e) => {
		const parsedValue = parseFloat(e.target.value.replace(/,/g, ''));
		onUpdateActiveChannelData({
			breakdownData: recalculateBreakdownData(
				[ ...channelData.breakdownData ],
				parsedValue
			),
			amount: parsedValue
		});
	};

	const changeAllocationType = (e) => {
		onUpdateActiveChannelData({
			...(e.target.innerText === 'Equal' &&
				{
					breakdownData: recalculateBreakdownData(
						[ ...channelData.breakdownData ],
						channelData.amount
					)
				}
			),
			allocation: e.target.innerText
		});
	};

	const changeBreakdownItemValue = (e) => {
		const { value, name } = e.target;

		if (!value.length) {
			return;
		}
		const updatedBreakdownData = updateObjectValueInArrayOfObjects(
			[ ...channelData.breakdownData ],
			'name',
			name,
			{ value: parseFloat(value.replace(/,/g, '')) }
		);
		onUpdateActiveChannelData({
			amount: recalculateAmount(updatedBreakdownData),
			breakdownData: updatedBreakdownData
		});
	};

	const debouncedChangeBreakdownItemValue = useCallback(() =>
		debounce(changeBreakdownItemValue, 200)
	, [ channelData ]);

	const debouncedAnnualBudgetAmountChange = useCallback(() =>
		debounce(annualBudgetAmountChange, 200)
	, [ channelData ]);

	return (
		<BudgetCommonWrapper>
			<BudgetControls
				budgetFrequency={channelData?.frequency}
				annualAmount={channelData?.amount}
				handleAmountChange={debouncedAnnualBudgetAmountChange()}
				selectBudgetFrequency={changeBudgetFrequency}
				changeAllocationType={changeAllocationType}
				allocationType={channelData?.allocation}
				disabledBaselineControl={channelData?.allocation === 'Manual'}
			/>
			<BudgetBreakdownControl
				disableBreakdownItems={channelData?.allocation === 'Equal'}
				handleChangeBreakdownItemValue={debouncedChangeBreakdownItemValue()}
				breakdownData={channelData.breakdownData}
			/>
		</BudgetCommonWrapper>
	);
};
