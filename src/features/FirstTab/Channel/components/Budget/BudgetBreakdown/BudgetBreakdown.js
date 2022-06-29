import React from 'react';
import { BudgetBreakdownItem } from 'features/FirstTab/Channel/components/Budget/BudgetBreakdown/BudgetBreakdownItem';
import {
	BreakdownSubtitle,
	BreakdownTitle, BudgetBreakdownDataWrapper,
	BudgetBreakdownWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownControl = ({
	breakdownData,
	handleChangeBreakdownItemValue,
	disableBreakdownItems
}) => (
	<BudgetBreakdownWrapper>
		<BreakdownTitle>Budget Breakdown</BreakdownTitle>
		<BreakdownSubtitle>
			By default, your budget will be equally divided throughout the year. You
			can manually change the budget allocation, either now or later.
		</BreakdownSubtitle>
		<BudgetBreakdownDataWrapper>
			{breakdownData.map(item => (
				<BudgetBreakdownItem
					key={item.name}
					itemLabel={item.name}
					itemValue={item.value}
					handleChangeBreakdownItemValue={handleChangeBreakdownItemValue}
					disabled={disableBreakdownItems}
				/>
			))}
		</BudgetBreakdownDataWrapper>
	</BudgetBreakdownWrapper>
);
