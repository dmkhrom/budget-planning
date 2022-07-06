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
import { useOutsideClick } from 'hooks/useOutsideClick';

const PREFIX = '$';

export const ChannelRowBreakdownItem = ({
	disabled,
	isManualType,
	itemName,
	itemValue,
	onUpdateChannelBudgetData
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [showEditIcon, setShowEditIcon] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(itemValue);
	}, []);

	const cancelItemChanges = () => {
		setIsEdit(false);
		setValue(itemValue);
	};

	const saveItemChanges = () => {
		setIsEdit(false);
		onUpdateChannelBudgetData(itemName, value);
	};

	const changeBreakdownItemValue = (e) => {
		setValue(e.target.value.slice(1));
	};

	const ref = useOutsideClick(cancelItemChanges);

	return (
		<ChannelRowBreakdownItemWrapper
			onMouseEnter={() => !isEdit && !showEditIcon && setShowEditIcon(true)}
			onMouseLeave={() => setShowEditIcon(false)}
		>
			<BreakdownItemLabel>
				{`${itemName} ${new Date().getFullYear().toString().slice(-2)}`}
			</BreakdownItemLabel>
			<BreakdownValueWrapper ref={ref}>
				{isEdit ? (
					<BreakdownInputWrapper>
						<BreakdownInput
							allowLeadingZeros={false}
							allowNegative={false}
							disabled={disabled}
							isNumericString={true}
							name={itemName}
							onChange={changeBreakdownItemValue}
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
				<Tooltip
					disabled={isManualType}
					tooltipDescription={
						'You can\'t edit items manually channel with budget allocation type "Equal". If you want it - please, edit channel allocation type'
					}
				>
					<EditIcon
						className={`edit-icon ${!isEdit && showEditIcon && 'visible'}`}
						onClick={() => isManualType && setIsEdit(true)}
					/>
				</Tooltip>
			</BreakdownValueWrapper>
		</ChannelRowBreakdownItemWrapper>
	);
};

ChannelRowBreakdownItem.propTypes = {
	disabled: PropTypes.bool,
	isManualType: PropTypes.bool,
	itemName: PropTypes.string,
	itemValue: PropTypes.number,
	onUpdateChannelBudgetData: PropTypes.func
};
