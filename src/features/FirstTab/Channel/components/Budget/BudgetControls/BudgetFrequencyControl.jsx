import React from 'react';
import { LabelWithTooltip, DropDown } from 'components';
import { BudgetFrequencyControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetFrequencyControl = ({ selectBudgetFrequency, budgetFrequency }) => (
	<BudgetFrequencyControlWrapper>
		<LabelWithTooltip
			label="Budget Frequency"
			tooltipDescription="Setup your budget Annually, Monthly or Quarterly"
		/>
		<DropDown handleSelect={selectBudgetFrequency} selectedItem={budgetFrequency} />
	</BudgetFrequencyControlWrapper>
);
