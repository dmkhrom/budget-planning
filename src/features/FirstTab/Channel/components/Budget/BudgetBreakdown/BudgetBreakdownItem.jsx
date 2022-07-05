import React from 'react';
import { ItemLabel } from 'components/ItemLabel/ItemLabel';
import {
	AmountInput,
	BudgetBreakdownItemWrapper,
	InputWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownItem = ({
	itemLabel,
	itemValue,
	handleChangeBreakdownItemValue,
	disabled
}) => (
	<BudgetBreakdownItemWrapper>
		<ItemLabel value={`${itemLabel} ${new Date().getFullYear().toString().slice(-2)}`} />
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
