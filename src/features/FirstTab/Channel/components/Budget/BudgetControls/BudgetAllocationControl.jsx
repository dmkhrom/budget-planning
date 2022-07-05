import React from 'react';
import PropTypes from 'prop-types';
import { LabelWithTooltip } from 'components';
import { AllocationSwitcher } from 'features/FirstTab/Channel/components/Budget/BudgetControls';
import { BudgetAllocationControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetAllocationControl = ({ changeAllocationType, allocationType }) => (
	<BudgetAllocationControlWrapper>
		<LabelWithTooltip
			label="Budget Allocation"
			tooltipDescription="Setup your budget manual or allocate amount equally among periods"
		/>
		<AllocationSwitcher handleSwitch={changeAllocationType} allocationType={allocationType} />
	</BudgetAllocationControlWrapper>
);

BudgetAllocationControl.propTypes = {
	allocationType: PropTypes.string,
	changeAllocationType: PropTypes.func
};
