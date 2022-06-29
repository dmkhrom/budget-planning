import React from 'react';
import { BudgetBreakdownControl } from 'features/FirstTab/Channel/components/Budget/BudgetBreakdown/BudgetBreakdown';
import { BudgetControls } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetControls';
import { BudgetCommonWrapper } from 'features/FirstTab/Channel/styles';
import useChannelsControl from 'hooks/useChannelsControl';

export const Budget = ({ channelData }) => {

	const {
		onChangeActiveChannelData,
	} = useChannelsControl();

	const selectBudgetFrequency = (e) => {
		onChangeActiveChannelData('frequency', e.target.innerText);
	};

	const handleAmountChange = (e) => {
		onChangeActiveChannelData('amount', e.target.value);
	};

	const changeAllocationType = (e) => {
		onChangeActiveChannelData('allocation', e.target.innerText);
	};

	const changeBreakdownItemValue = (e) => {
		console.log('TARGET VALUE', {na: e.target.name, val: e.target.value});
	};

	return (
		<BudgetCommonWrapper>
			<BudgetControls
				budgetFrequency={channelData?.frequency}
				annualAmount={channelData?.amount}
				handleAmountChange={handleAmountChange}
				selectBudgetFrequency={selectBudgetFrequency}
				changeAllocationType={changeAllocationType}
				allocationType={channelData?.allocation}
				disabledBaselineControl={channelData?.allocation === 'Manual'}
			/>
			<BudgetBreakdownControl
				disableBreakdownItems={channelData?.allocation === 'Equal'}
				handleChangeBreakdownItemValue={changeBreakdownItemValue}
				breakdownData={channelData.breakdownData}
			/>
		</BudgetCommonWrapper>
	);
};
