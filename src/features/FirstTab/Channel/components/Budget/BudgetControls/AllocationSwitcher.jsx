import { ALLOCATION_ITEMS } from 'constants';
import React from 'react';
import {
	AllocationSwitcherOption,
	AllocationSwitcherWrapper
} from 'features/FirstTab/Channel/styles';

export const AllocationSwitcher = ({ handleSwitch, allocationType }) => (
	<AllocationSwitcherWrapper>
		{ALLOCATION_ITEMS.map((item) => (
			<AllocationSwitcherOption
				key={item}
				className={allocationType === item ? 'active-item' : ''}
				onClick={handleSwitch}>
				{item}
			</AllocationSwitcherOption>
		))}
	</AllocationSwitcherWrapper>
);
