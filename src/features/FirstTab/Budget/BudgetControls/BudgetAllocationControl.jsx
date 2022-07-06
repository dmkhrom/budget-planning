import React from 'react';
import PropTypes from 'prop-types';
import { LabelWithTooltip } from 'components';
import { AllocationSwitcher } from 'features/FirstTab/Budget/BudgetControls/index';
import { BudgetAllocationControlWrapper } from 'features/FirstTab/Channel/styles';

export const BudgetAllocationControl = ({ onChangeAllocationType, allocationType }) => (
	<BudgetAllocationControlWrapper>
		<LabelWithTooltip
			label="Budget Allocation"
			tooltipDescription="Setup your budget manual or allocate amount equally among periods"
		/>
		<AllocationSwitcher
			onChangeAllocationType={onChangeAllocationType}
			allocationType={allocationType}
		/>
	</BudgetAllocationControlWrapper>
);

BudgetAllocationControl.propTypes = {
	allocationType: PropTypes.string,
	onChangeAllocationType: PropTypes.func
};
