import React from 'react';
import {
	AmountInput,
	BreakdownItemLabel,
	BudgetBreakdownItemWrapper,
	InputWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownItem = (
	{
		isQuarters,
		itemLabel,
		itemValue,
		handleChangeBreakdownItemValue,
		disabled
	}) => (
	<BudgetBreakdownItemWrapper>
		<BreakdownItemLabel>
			{`${itemLabel} ${ isQuarters ? new Date().getFullYear().toString().substr(-2) : ''}`}
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
