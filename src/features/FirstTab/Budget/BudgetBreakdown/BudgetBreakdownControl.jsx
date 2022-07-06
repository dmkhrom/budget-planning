import React from 'react';
import PropTypes from 'prop-types';
import { BudgetBreakdownItem } from 'features/FirstTab/Budget/BudgetBreakdown/index';
import {
	BreakdownSubtitle,
	BreakdownTitle,
	BudgetBreakdownDataWrapper,
	BudgetBreakdownWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownControl = ({
	breakdownData,
	onChangeBreakdownItemValue,
	disableBreakdownItems
}) => (
	<BudgetBreakdownWrapper>
		<BreakdownTitle>Budget Breakdown</BreakdownTitle>
		<BreakdownSubtitle>
			By default, your budget will be equally divided throughout the year. You can manually change
			the budget allocation, either now or later.
		</BreakdownSubtitle>
		<BudgetBreakdownDataWrapper>
			{breakdownData.map((item) => (
				<BudgetBreakdownItem
					key={item.name}
					itemLabel={item.name}
					itemValue={item.value}
					onChangeBreakdownItemValue={onChangeBreakdownItemValue}
					disabled={disableBreakdownItems}
				/>
			))}
		</BudgetBreakdownDataWrapper>
	</BudgetBreakdownWrapper>
);

BudgetBreakdownControl.propTypes = {
	breakdownData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.number
		})
	),
	onChangeBreakdownItemValue: PropTypes.func,
	disableBreakdownItems: PropTypes.bool
};
