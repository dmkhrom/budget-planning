import React from 'react';
import PropTypes from 'prop-types';
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

BudgetFrequencyControl.propTypes = {
	budgetFrequency: PropTypes.string,
	selectBudgetFrequency: PropTypes.func
};
