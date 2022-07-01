import { BUDGET_FREQUENCY_ITEMS } from 'constants';
import React, { useState } from 'react';
import {ReactComponent as ArrowDown} from 'assets/icons/arrow_down_icon.svg';
import {
	DropdownItem,
	DropdownList,
	DropdownSelectedItem,
	DropdownWrapper
} from 'components/DrowDown/styles';

export const Dropdown = ({ handleSelect, selectedItem }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownWrapper onMouseLeave={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)}>
			<DropdownSelectedItem isOpen={isOpen}>
				{selectedItem}
				<ArrowDown className="chevron-icon"/>
			</DropdownSelectedItem>
			{isOpen && (
				<DropdownList isOpen={isOpen}>
					{BUDGET_FREQUENCY_ITEMS.map((item) => (
						<DropdownItem key={item} name={item} value={item} onClick={handleSelect}>
							{item}
						</DropdownItem>
					))}
				</DropdownList>
			)}
		</DropdownWrapper>
	);
};
