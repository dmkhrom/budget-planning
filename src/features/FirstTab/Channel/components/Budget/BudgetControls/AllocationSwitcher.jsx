import { ALLOCATION_ITEMS } from 'constants';
import React from 'react';
import PropTypes from 'prop-types';
import {
	AllocationSwitcherOption,
	AllocationSwitcherWrapper
} from 'features/FirstTab/Channel/styles';

export const AllocationSwitcher = ({ onChangeAllocationType, allocationType }) => (
	<AllocationSwitcherWrapper>
		{ALLOCATION_ITEMS.map((item) => (
			<AllocationSwitcherOption
				key={item}
				className={allocationType === item ? 'active-item' : ''}
				onClick={onChangeAllocationType}
			>
				{item}
			</AllocationSwitcherOption>
		))}
	</AllocationSwitcherWrapper>
);

AllocationSwitcher.propTypes = {
	allocationType: PropTypes.string,
	onChangeAllocationType: PropTypes.func
};
