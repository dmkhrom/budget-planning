import React from 'react';
import PropTypes from 'prop-types';
import { ItemLabel } from 'components';
import {
	AmountInput,
	BudgetBreakdownItemWrapper,
	InputWrapper
} from 'features/FirstTab/Channel/styles';

export const BudgetBreakdownItem = ({
	itemLabel,
	itemValue,
	onChangeBreakdownItemValue,
	disabled
}) => (
	<BudgetBreakdownItemWrapper>
		<ItemLabel value={`${itemLabel} ${new Date().getFullYear().toString().slice(-2)}`} />
		<InputWrapper>
			<AmountInput
				value={itemValue}
				name={itemLabel}
				onChange={onChangeBreakdownItemValue}
				disabled={disabled}
				allowLeadingZeros={false}
				isNumericString={true}
				allowNegative={false}
				thousandSeparator={true}
			/>
		</InputWrapper>
	</BudgetBreakdownItemWrapper>
);

BudgetBreakdownItem.propTypes = {
	disabled: PropTypes.bool,
	onChangeBreakdownItemValue: PropTypes.func,
	itemLabel: PropTypes.string,
	itemValue: PropTypes.number
};
