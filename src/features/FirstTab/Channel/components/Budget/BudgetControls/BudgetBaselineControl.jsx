import React from 'react';
import { LabelWithTooltip } from 'components/LabelWithTooltip/LabelWithTooltip';
import { NumericInput } from 'components';
import { BudgetBaselineControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetBaselineControl = ({ annualAmount, handleAmountChange, disabled }) => (
	<BudgetBaselineControlWrapper>
		<LabelWithTooltip label="Baseline [Annual] Budget" tooltipDescription="Annual budget amount" />
		<NumericInput
			value={annualAmount}
			onChange={handleAmountChange}
			disabled={disabled}
			allowLeadingZeros={false}
			isNumericString={true}
			allowNegative={false}
			thousandSeparator={true}
		/>
	</BudgetBaselineControlWrapper>
);
