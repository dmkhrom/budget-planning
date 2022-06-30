import React from 'react';
import { LabelWithTooltip } from 'components/LabelWithTooltip/LabelWithTooltip';
import { AllocationSwitcher } from 'features/FirstTab/Channel/components/Budget/BudgetControls/AllocationSwitcher';
import { BudgetAllocationControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetAllocationControl = ({ changeAllocationType, allocationType }) => (
	<BudgetAllocationControlWrapper>
		<LabelWithTooltip
			label='Budget Allocation'
			tooltipDescription='Setup your budget manual or allocate amount equally among periods'
		/>
		<AllocationSwitcher
			handleSwitch={changeAllocationType}
			allocationType={allocationType}
		/>
	</BudgetAllocationControlWrapper>
);
