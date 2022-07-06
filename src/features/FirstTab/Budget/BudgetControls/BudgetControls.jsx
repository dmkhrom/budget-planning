import React from 'react';
import PropTypes from 'prop-types';
import {
	BudgetFrequencyControl,
	BudgetBaselineControl,
	BudgetAllocationControl
} from 'features/FirstTab/Budget/BudgetControls/index';
import { BudgetControlsWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetControls = ({
	onSelectBudgetFrequency,
	budgetFrequency,
	annualAmount,
	onAnnualBudgetAmountChange,
	onChangeAllocationType,
	allocationType,
	disabledBaselineControl
}) => (
	<BudgetControlsWrapper>
		<BudgetFrequencyControl
			onSelectBudgetFrequency={onSelectBudgetFrequency}
			budgetFrequency={budgetFrequency}
		/>
		<BudgetBaselineControl
			annualAmount={annualAmount || 0}
			onAnnualBudgetAmountChange={onAnnualBudgetAmountChange}
			disabled={disabledBaselineControl}
		/>
		<BudgetAllocationControl
			onChangeAllocationType={onChangeAllocationType}
			allocationType={allocationType}
		/>
	</BudgetControlsWrapper>
);

BudgetControls.propTypes = {
	allocationType: PropTypes.string,
	annualAmount: PropTypes.number,
	budgetFrequency: PropTypes.string,
	onChangeAllocationType: PropTypes.func,
	disabledBaselineControl: PropTypes.bool,
	onAnnualBudgetAmountChange: PropTypes.func,
	onSelectBudgetFrequency: PropTypes.func
};
