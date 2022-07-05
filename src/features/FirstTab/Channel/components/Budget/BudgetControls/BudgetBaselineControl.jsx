import React from 'react';
import { LabelWithTooltip } from 'components/LabelWithTooltip/LabelWithTooltip';
import PropTypes from 'prop-types';
import { NumericInput } from 'components';
import { BudgetBaselineControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetBaselineControl = ({ annualAmount, onAmountChange, disabled }) => (
	<BudgetBaselineControlWrapper>
		<LabelWithTooltip label="Baseline [Annual] Budget" tooltipDescription="Annual budget amount" />
		<NumericInput
			value={annualAmount}
			onChange={onAmountChange}
			disabled={disabled}
			allowLeadingZeros={false}
			isNumericString={true}
			allowNegative={false}
			thousandSeparator={true}
		/>
	</BudgetBaselineControlWrapper>
);

BudgetBaselineControl.propTypes = {
	annualAmount: PropTypes.number,
	onAmountChange: PropTypes.func,
	disabled: PropTypes.bool
};
