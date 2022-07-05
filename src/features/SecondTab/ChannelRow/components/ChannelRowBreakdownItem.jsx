import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CancelIcon } from 'assets/icons/cancel_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import { ReactComponent as SaveIcon } from 'assets/icons/save_icon.svg';
import { Tooltip } from 'components';
import { BreakDownItemValue } from 'features/SecondTab/ChannelRow/components';
import {
	BreakdownValueWrapper,
	ChannelRowBreakdownItemWrapper,
	EditActionsWrapper,
	BreakdownInput,
	BreakdownInputWrapper,
	BreakdownItemLabel
} from 'features/SecondTab/ChannelRow/styles';

const PREFIX = '$';

export const ChannelRowBreakdownItem = ({
	disabled,
	isEdit,
	isManualType,
	itemName,
	itemValue,
	setEditItem,
	updateChannelBudgetData
}) => {
	const [showEditIcon, setShowEditIcon] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(itemValue);
	}, []);

	const changeEditItem = () => {
		setEditItem(itemName);
	};

	const cancelItemChanges = () => {
		setEditItem(null);
		setValue(itemValue);
	};

	const saveItemChanges = () => {
		setEditItem(null);
		updateChannelBudgetData(itemName, value);
	};

	const handleChangeBreakdownItemValue = (e) => {
		setValue(e.target.value.slice(1));
	};

	return (
		<ChannelRowBreakdownItemWrapper
			onMouseEnter={() => !isEdit && !showEditIcon && setShowEditIcon(true)}
			onMouseLeave={() => setShowEditIcon(false)}
		>
			<BreakdownItemLabel>
				{`${itemName} ${new Date().getFullYear().toString().slice(-2)}`}
			</BreakdownItemLabel>
			<BreakdownValueWrapper>
				{isEdit ? (
					<BreakdownInputWrapper>
						<BreakdownInput
							allowLeadingZeros={false}
							allowNegative={false}
							disabled={disabled}
							isNumericString={true}
							name={itemName}
							onChange={handleChangeBreakdownItemValue}
							placeholder={value}
							prefix={PREFIX}
							thousandSeparator={true}
							value={value}
						/>
						<EditActionsWrapper>
							<SaveIcon onClick={saveItemChanges} />
							<CancelIcon onClick={cancelItemChanges} />
						</EditActionsWrapper>
					</BreakdownInputWrapper>
				) : (
					<BreakDownItemValue value={`${PREFIX} ${itemValue.toLocaleString()}`} />
				)}
				{!isEdit && showEditIcon && (
					<EditIcon
						className="edit-icon"
						onClick={() => (isManualType ? changeEditItem() : {})}
						onMouseEnter={() => !isManualType && setShowTooltip(true)}
						onMouseLeave={() => {
							setShowTooltip(false);
						}}
					/>
				)}
				<Tooltip
					isShow={showTooltip}
					tooltipDescription={
						'You can\'t edit items manually channel with budget allocation type "Equal". If you want it - please, edit channel allocation type'
					}
				/>
			</BreakdownValueWrapper>
		</ChannelRowBreakdownItemWrapper>
	);
};

ChannelRowBreakdownItem.propTypes = {
	disabled: PropTypes.bool,
	isEdit: PropTypes.bool,
	isManualType: PropTypes.bool,
	itemName: PropTypes.string,
	itemValue: PropTypes.number,
	setEditItem: PropTypes.func,
	updateChannelBudgetData: PropTypes.func
};
