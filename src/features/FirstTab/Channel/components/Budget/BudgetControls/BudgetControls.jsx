import React from 'react';
import { BudgetAllocationControl } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetAllocationControl';
import { BudgetBaselineControl } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetBaselineControl';
import { BudgetFrequencyControl } from 'features/FirstTab/Channel/components/Budget/BudgetControls/BudgetFrequencyControl';
import { BudgetControlsWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetControls = ({
	selectBudgetFrequency,
	budgetFrequency,
	annualAmount,
	handleAmountChange,
	changeAllocationType,
	allocationType,
	disabledBaselineControl
}) => (
	<BudgetControlsWrapper>
		<BudgetFrequencyControl
			selectBudgetFrequency={selectBudgetFrequency}
			budgetFrequency={budgetFrequency}
		/>
		<BudgetBaselineControl
			annualAmount={annualAmount || 0}
			handleAmountChange={handleAmountChange}
			disabled={disabledBaselineControl}
		/>
		<BudgetAllocationControl
			changeAllocationType={changeAllocationType}
			allocationType={allocationType}
		/>
	</BudgetControlsWrapper>
);
