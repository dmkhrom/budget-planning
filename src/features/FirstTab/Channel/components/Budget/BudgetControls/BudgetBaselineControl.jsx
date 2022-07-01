import React from 'react';
import { NumericInput } from 'components/Inputs/NumericInput';
import { LabelWithTooltip } from 'components/LabelWithTooltip/LabelWithTooltip';
import { BudgetBaselineControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetBaselineControl = ({ annualAmount, handleAmountChange, disabled }) => (
	<BudgetBaselineControlWrapper>
		<LabelWithTooltip label="Baseline [Annual] Budget" tooltipDescription="Annual budget amount" />
		<NumericInput
			value={annualAmount}
			handleChange={handleAmountChange}
			disabled={disabled}
			allowLeadingZeros={false}
			isNumericString={true}
			allowNegative={false}
			thousandSeparator={true}
		/>
	</BudgetBaselineControlWrapper>
);
