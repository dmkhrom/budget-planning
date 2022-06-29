import React from 'react';
import {
	AmountInput,
	BreakdownItemLabel,
	BudgetBreakdownItemWrapper,
	InputWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownItem = ({itemLabel, itemValue, handleChangeBreakdownItemValue, disabled}) => (
	<BudgetBreakdownItemWrapper>
		<BreakdownItemLabel>
			{itemLabel}
		</BreakdownItemLabel>
		<InputWrapper>
			<AmountInput
				value={itemValue}
				name={itemLabel}
				onChange={handleChangeBreakdownItemValue}
				disabled={disabled}
				allowLeadingZeros={false}
				isNumericString={true}
				allowNegative={false}
				thousandSeparator={true}
			/>
		</InputWrapper>
	</BudgetBreakdownItemWrapper>
);
