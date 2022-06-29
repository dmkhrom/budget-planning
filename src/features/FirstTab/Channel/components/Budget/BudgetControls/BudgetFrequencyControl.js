import React from 'react';
import { Dropdown } from 'components/DrowDown/DropDown';
import { LabelWithTooltip } from 'components/LabelWithTooltip/LabelWithTooltip';
import { BudgetFrequencyControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetFrequencyControl = ({
	selectBudgetFrequency,
	budgetFrequency
}) => (
	<BudgetFrequencyControlWrapper>
		<LabelWithTooltip
			label='Budget Frequency'
			tooltipInfo='Setup your budget Annually, Monthly or Quarterly'
		/>
		<Dropdown
			handleSelect={selectBudgetFrequency}
			selectedItem={budgetFrequency}
		/>
	</BudgetFrequencyControlWrapper>
);
