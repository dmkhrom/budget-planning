import React from 'react';
import PropTypes from 'prop-types';
import { BudgetFrequencyControl, BudgetBaselineControl, BudgetAllocationControl } from 'features/FirstTab/Channel/components/Budget/BudgetControls';
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

BudgetControls.propTypes = {
	allocationType: PropTypes.string,
	annualAmount: PropTypes.number,
	budgetFrequency: PropTypes.string,
	changeAllocationType: PropTypes.func,
	disabledBaselineControl: PropTypes.bool,
	handleAmountChange: PropTypes.func,
	selectBudgetFrequency: PropTypes.func
};
